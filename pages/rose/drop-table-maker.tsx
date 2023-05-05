import { Listbox, Transition } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import NextImage from "next/image";
import { Fragment, useMemo, useRef, useState } from "react";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import {
  ALL_ITEMS,
  Item,
  RoseItemGroup,
} from "../../src/constants/drop.constants";
import { customLoader } from "../../src/utils/next.utils";
import FileInputButton from "../../src/components/common/FileInputButton";

type ItemGroupOption = {
  id: RoseItemGroup;
  label: string;
};

type ToolType = "add" | "remove";

type DropType = "normal" | "rare" | "unique";

const ROSE_ITEM_GROUPS: ItemGroupOption[] = [
  {
    id: "104sets",
    label: "104 Sets",
  },
  {
    id: "120sets",
    label: "120 Sets",
  },
  {
    id: "consumables",
    label: "Consumables",
  },
  {
    id: "eldeonMaterials",
    label: "Eldeon Materials",
  },
  {
    id: "gems",
    label: "Gems",
  },
  {
    id: "junonMaterials",
    label: "Junon Materials",
  },
  {
    id: "lunaMaterials",
    label: "Luna Materials",
  },
  {
    id: "otherMaterials",
    label: "Other Materials",
  },
  {
    id: "refines",
    label: "Refines",
  },
  {
    id: "resources",
    label: "Resources",
  },
  {
    id: "weapons",
    label: "Weapons",
  },
];

type DropItemProps = {
  dropType: DropType | null;
  item: Item;
  selected: boolean;
  onClick: (item: Item) => void;
};

const DropItem = ({ dropType, item, selected, onClick }: DropItemProps) => {
  const iconUrl = `https://www.aruarose.com/public/images/armory/icons/icon_${item.iconId}.png`;

  const itemClasses = clsx({
    "cursor-pointer": true,
    "border-2 border-yellow-500": dropType === "normal",
    "border-2 border-blue-500": dropType === "rare",
    "border-2 border-purple-500": dropType === "unique",
    "border-2 border-green-500": selected,
  });

  const handleClick = () => {
    onClick(item);
  };

  return (
    <NextImage
      key={item.id}
      className={itemClasses}
      src={iconUrl}
      alt={item.name}
      width={36}
      height={36}
      loader={customLoader}
      unoptimized
      onClick={handleClick}
    />
  );
};

type DropTableColumn = {
  item: Item;
  dropType: DropType | null;
};

type DropTableRow = {
  mobImage: string;
  drops: (DropTableColumn | null)[];
};

type DropTableProps = {
  rows: DropTableRow[];
  onAddMobImage: (index: number, mobImage: string) => void;
  onNewRow: () => void;
  onCellClick: (rowIndex: number, columnIndex: number) => void;
};

const DropTable = ({
  rows,
  onAddMobImage,
  onNewRow,
  onCellClick,
}: DropTableProps) => {
  const handleNewImage = (index: number, files: FileList) => {
    // Get the selected file
    const image = files[0];

    if (image) {
      // Create a new FileReader instance
      const reader = new FileReader();

      // Set the callback function for when the file is loaded
      reader.onload = () => {
        // Get the base 64 encoded string from the reader's result
        const arrayBuffer = reader.result as ArrayBuffer;
        const base64String = `data:${image.type};base64,${Buffer.from(
          arrayBuffer
        ).toString("base64")}`;
        onAddMobImage(index, base64String);
      };

      // Read the file as an ArrayBuffer (which will trigger the onload callback)
      reader.readAsArrayBuffer(image);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="w-32 bg-gray-300"></th>
            {[...Array(35)].map((x, i) => (
              <th key={i} className="w-32 bg-gray-300 text-center">
                #{i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="w-32 border-2 border-gray-200 text-center align-middle">
                {row.mobImage ? (
                  <NextImage
                    src={`${row.mobImage}`}
                    alt="mob"
                    width={48}
                    height={48}
                    unoptimized
                    loader={customLoader}
                  />
                ) : (
                  <FileInputButton
                    onFileSelected={(list) => handleNewImage(rowIndex, list)}
                    rightIcon={<ArrowUpTrayIcon height={16} width={16} />}
                  />
                )}
              </td>
              {row.drops.map((drop, columnIndex) => (
                <td
                  key={columnIndex}
                  className="w-32 text-center align-middle border-2 border-gray-200"
                  onClick={() => onCellClick(rowIndex, columnIndex)}
                >
                  {drop && (
                    <DropItem
                      dropType={drop.dropType}
                      item={drop.item}
                      selected={false}
                      onClick={() => {}}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-white-500 px-8" onClick={onNewRow}>
        +
      </button>
    </>
  );
};

const DropTableMaker: NextPage = () => {
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [dropRows, setDropRows] = useState<DropTableRow[][]>([[]]);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<ItemGroupOption>(
    ROSE_ITEM_GROUPS[0]
  );
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    ALL_ITEMS.filter((item) => item.group === ROSE_ITEM_GROUPS[0].id)
  );
  const [selectedTool, setSelectedTool] = useState<ToolType>("add");

  const addToolClasses = clsx({
    "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]": selectedTool === "add",
  });

  const removeToolClasses = clsx({
    "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]": selectedTool === "remove",
  });

  const handleCellClick = (rowIndex: number, columnIndex: number) => {
    if (currentItem === null) {
      return;
    }
    const newValue: DropTableColumn | null =
      selectedTool === "add" ? { item: currentItem, dropType: null } : null;
    const newRows = [...dropRows];
    newRows[currentTabIndex][rowIndex].drops[columnIndex] = newValue;
    setDropRows(newRows);
  };

  const handleAddMobImage = (rowIndex: number, mobImage: string) => {
    const newRows = [...dropRows];
    newRows[currentTabIndex][rowIndex].mobImage = mobImage;
    setDropRows(newRows);
  };

  const handleAddNewRow = () => {
    const newRows = [...dropRows];
    newRows[currentTabIndex].push({
      mobImage: "",
      drops: [...Array(35)].map((x) => null),
    });
    setDropRows(newRows);
  };

  const handleSelectedGroupChange = (newGroup: ItemGroupOption) => {
    setSelectedGroup(newGroup);
    setSelectedItems(ALL_ITEMS.filter((item) => item.group === newGroup.id));
    setCurrentItem(null);
  };

  const selectAddTool = () => {
    setSelectedTool("add");
  };

  const selectRemoveTool = () => {
    setSelectedTool("remove");
  };

  return (
    <PageWrapper>
      <div className="py-4 px-16">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button>
              <FolderIcon height={32} width={32} />
            </button>
            <button>
              <ArrowDownTrayIcon height={32} width={32} />
            </button>
            <button className={addToolClasses} onClick={selectAddTool}>
              <CursorArrowRaysIcon height={32} width={32} />
            </button>
            <button className={removeToolClasses} onClick={selectRemoveTool}>
              <ArchiveBoxXMarkIcon height={32} width={32} />
            </button>
          </div>
          <div className="relative">
            <Listbox value={selectedGroup} onChange={handleSelectedGroupChange}>
              <Listbox.Button className="flex items-center px-8">
                {selectedGroup.label} <ChevronDownIcon height={16} width={16} />
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-1 00"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {ROSE_ITEM_GROUPS.map((group) => (
                    <Listbox.Option key={group.id} value={group}>
                      {group.label}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
        <div className="flex gap-2 p-8 justify-center flex-wrap">
          {selectedItems.map((item) => {
            return (
              <DropItem
                key={item.id}
                dropType={null}
                item={item}
                selected={currentItem !== null && currentItem.id === item.id}
                onClick={setCurrentItem}
              />
            );
          })}
        </div>
        <DropTable
          rows={dropRows[currentTabIndex]}
          onAddMobImage={handleAddMobImage}
          onCellClick={handleCellClick}
          onNewRow={handleAddNewRow}
        />
      </div>
    </PageWrapper>
  );
};

export default DropTableMaker;
