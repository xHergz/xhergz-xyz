import { Listbox, Transition } from "@headlessui/react";
import { NextPage } from "next";
import NextImage from "next/image";
import { Fragment, useMemo, useState } from "react";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { ALL_ITEMS, RoseItemGroup } from "../../src/constants/drop.constants";
import { customLoader } from "../../src/utils/next.utils";

type ItemGroupOption = {
  id: RoseItemGroup;
  label: string;
};

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

const DropTableMaker: NextPage = () => {
  const [selectedGroup, setSelectedGroup] = useState<ItemGroupOption>(
    ROSE_ITEM_GROUPS[0]
  );

  const selectedItems = useMemo(() => {
    return ALL_ITEMS.filter((item) => item.group === selectedGroup.id);
  }, [selectedGroup]);

  console.log(selectedItems);

  const iconUrl = (iconId: number): string => {
    return `https://www.aruarose.com/public/images/armory/icons/icon_${iconId}.png`;
  };

  return (
    <PageWrapper>
      <div>
        <Listbox value={selectedGroup} onChange={setSelectedGroup}>
          <Listbox.Button>{selectedGroup.label}</Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-1 00"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options>
              {ROSE_ITEM_GROUPS.map((group) => (
                <Listbox.Option key={group.id} value={group}>
                  {group.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
        <div className="flex gap-2 p-8 justify-center flex-wrap">
          {selectedItems.map((item) => {
            return (
              <NextImage
                key={item.id}
                src={iconUrl(item.iconId)}
                alt={item.name}
                width={48}
                height={48}
                loader={customLoader}
                unoptimized
              />
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};

export default DropTableMaker;
