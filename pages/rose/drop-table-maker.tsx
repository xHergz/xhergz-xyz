import { Listbox, Tab, Transition } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FolderIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import NextImage from "next/image";
import { Fragment, useState } from "react";

import {
  ALL_ITEMS,
  Item,
  RoseItemGroup,
} from "../../src/constants/drop.constants";
import { customLoader } from "../../src/utils/next.utils";
import FileInputButton from "../../src/components/common/FileInputButton";
import IconButton from "../../src/components/common/IconButton";
import Button from "../../src/components/common/Button";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";

type ItemGroupOption = {
  id: RoseItemGroup;
  label: string;
};

type ToolType = "add" | "remove";

type DropType = "normal" | "rare" | "unique";

const ROSE_ITEM_GROUPS: ItemGroupOption[] = [
  {
    id: "88sets",
    label: "88 Sets",
  },
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
  { id: "altEquipment", label: "Alt Equipment" },
  { id: "uniques", label: "Uniques" },
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
    "cursor-pointer w-auto m-0": true,
    "border-4 border-yellow-300": dropType === "normal",
    "border-4 border-blue-300": dropType === "rare",
    "border-4 border-purple-300": dropType === "unique",
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
  const handleNewImage = (index: number, files: FileList): void => {
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
            <th className="w-32 bg-gray-300" />
            {rows.map((row, rowIndex) => {
              return (
                <th className="w-32 bg-gray-300" key={rowIndex}>
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
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...Array(35)].map((_, rowIndex) => {
            return (
              <tr key={rowIndex}>
                <td className="w-32 text-center align-middle border-2 border-gray-200">
                  #{rowIndex + 1}
                </td>
                {rows.map((row, colIndex) => (
                  <td
                    key={colIndex}
                    className="w-32 text-center align-middle border-2 border-gray-200"
                    onClick={() => onCellClick(rowIndex, colIndex)}
                  >
                    {row.drops[rowIndex] && (
                      <DropItem
                        dropType={row.drops[rowIndex]!.dropType}
                        item={row.drops[rowIndex]!.item}
                        selected={false}
                        onClick={() => {}}
                      />
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <IconButton icon={PlusIcon} onClick={onNewRow} />
    </>
  );
};

type DropTypeButtonProps = {
  dropType: DropType;
  selected: boolean;
  onClick: (newType: DropType) => void;
};

const DropTypeButton = ({
  dropType,
  selected,
  onClick,
}: DropTypeButtonProps) => {
  const buttonClasses = clsx({
    "bg-yellow-300": dropType === "normal",
    "bg-blue-300": dropType === "rare",
    "bg-purple-300": dropType === "unique",
    "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]": selected,
  });

  const handleClick = (): void => {
    onClick(dropType);
  };

  return <Button className={buttonClasses} size="md" onClick={handleClick} />;
};

const DropTableMaker: NextPage = () => {
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [dropRows, setDropRows] = useState<DropTableRow[][]>([[]]);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [selectedDropType, setSelectedDropType] = useState<DropType>("normal");
  const [selectedGroup, setSelectedGroup] = useState<ItemGroupOption>(
    ROSE_ITEM_GROUPS[0]
  );
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    ALL_ITEMS.filter((item) => item.group === ROSE_ITEM_GROUPS[0].id)
  );
  const [selectedTool, setSelectedTool] = useState<ToolType>("add");
  const [tableType, setTableType] = useState<"text" | "icon">("icon");

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
      selectedTool === "add"
        ? {
            item: currentItem,
            dropType:
              currentItem.type === "equipment" ? selectedDropType : null,
          }
        : null;
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

  const handleAddNewTab = () => {
    const newRows = [...dropRows];
    newRows.push([]);
    setDropRows(newRows);
    setCurrentTabIndex(newRows.length - 1);
  };

  const handleDropTypeChange = (newType: DropType): void => {
    setSelectedDropType(newType);
  };

  const handleLoadFile = (files: FileList) => {
    const saveFile = files[0];

    if (saveFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setDropRows(JSON.parse(reader.result as string));
      };

      // Read the file as an ArrayBuffer (which will trigger the onload callback)
      reader.readAsText(saveFile);
    }
  };

  const handleSaveFile = () => {
    const fileContent = JSON.stringify(dropRows);
    const downloadLink = document.getElementById(
      "downloadLink"
    ) as HTMLAnchorElement;
    if (downloadLink !== null) {
      const fileData = new Blob([fileContent], { type: "application/json" });
      downloadLink.href = URL.createObjectURL(fileData);
      downloadLink.download = "DropFile.json";
      downloadLink.click();
    }
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
    <RosePageWrapper>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <FileInputButton
            rightIcon={<FolderIcon width={24} height={24} />}
            size="md"
            onFileSelected={handleLoadFile}
          />
          <IconButton
            icon={ArrowDownTrayIcon}
            size="md"
            onClick={handleSaveFile}
          />
          <IconButton
            className={addToolClasses}
            icon={CursorArrowRaysIcon}
            size="md"
            onClick={selectAddTool}
          />
          <IconButton
            className={removeToolClasses}
            icon={ArchiveBoxXMarkIcon}
            size="md"
            onClick={selectRemoveTool}
          />
          <DropTypeButton
            dropType="normal"
            selected={selectedDropType === "normal"}
            onClick={handleDropTypeChange}
          />
          <DropTypeButton
            dropType="rare"
            selected={selectedDropType === "rare"}
            onClick={handleDropTypeChange}
          />
          <DropTypeButton
            dropType="unique"
            selected={selectedDropType === "unique"}
            onClick={handleDropTypeChange}
          />
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
      <Tab.Group selectedIndex={currentTabIndex} onChange={setCurrentTabIndex}>
        <Tab.List>
          {dropRows.map((row, index) => (
            <Tab
              key={index}
              className={
                currentTabIndex === index ? "bg-secondary-500 text-white" : ""
              }
            >
              Tab {index + 1}
            </Tab>
          ))}
          <IconButton icon={PlusIcon} size="sm" onClick={handleAddNewTab} />
        </Tab.List>
        <Tab.Panels>
          {dropRows.map((row, index) => (
            <Tab.Panel key={index}>
              <DropTable
                rows={dropRows[index]}
                onAddMobImage={handleAddMobImage}
                onCellClick={handleCellClick}
                onNewRow={handleAddNewRow}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <a id="downloadLink" style={{ display: "none" }} />
    </RosePageWrapper>
  );
};

export default DropTableMaker;
