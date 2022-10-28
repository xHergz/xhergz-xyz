export type Definition = {
  term: string;
  definition: string;
  example?: string;
};

export type DropLevel = "Uncommon" | "Rare" | "UberRare" | "Legendary";

export type CraftLevel = "Common" | "Uncommon" | "Rare" | "UberRare";

export type OverviewGroup = {
  description: string;
  items: Item[][];
  notes: string[];
  dropLevels: DropLevel[];
  craftLevels: CraftLevel[];
};

export type OverviewData = {
  title: string;
  groups: OverviewGroup[];
};

export type IconData = {
  [index: string]: number;
};

export type ItemColor = "yellow" | "blue" | "purple";

export type Item = {
  id: number;
  name: string;
  color: ItemColor;
};

export type ItemData = {
  [index: string]: Item;
};

export const DEFINITIONS: Definition[] = [
  {
    term: "Uncommon Drop",
    definition:
      "Something that drops semi frequently when farming. Drops from regular mobs (more frequent) and bosses (more frequent).",
    example: "Yellow gear or gems",
  },
  {
    term: "Rare Drop",
    definition:
      "Something that drops only from bosses and is higher up in the drop table. Drops from regular bosses (less frequent) and second spawn bosses (more frequent)",
    example: "Blue gear",
  },
  {
    term: "Uber Rare Drop",
    definition:
      "Something that only drops from second spawn bosses and is higher up in the drop table (less frequent)",
    example: "Uniques",
  },
  {
    term: "Legendary Drop",
    definition:
      "Something that only drops from second spawn bosses and is VERY high up in the drop table (less frequent)",
    example: "???",
  },
  {
    term: "Common Craft",
    definition:
      "Able to mass craft this item because you can use NPC bought mats and/or mats that you can farm in a large quantity.",
    example: "Masks",
  },
  {
    term: "Uncommon Craft",
    definition:
      "Able to mass craft this item because you can use NPC bought mats and/or mats that you can farm in a large quantity but requires more materials or requires something that is slightly harder to farm or has a lower success rate",
    example: "120 gear",
  },
  {
    term: "Rare Craft",
    definition:
      "Able to be crafted but not in mass quantities. Requires a high quantity of mats that are pretty easy to farm.",
    example: "130 weapons",
  },
  {
    term: "Uber Rare Craftable",
    definition:
      "Able to be crafted but is restricted by materials that are very rare.",
    example: "Arua's 200 masks",
  },
];

export const ICONS: IconData = {
  OLD_SOLDIER_HEAD: 305,
  OLD_SOLDIER_BODY: 305,
  OLD_SOLDIER_HAND: 305,
  OLD_SOLDIER_FOOT: 305,
};

export const ARMORS: ItemData = {
  OLD_BLUE_SOLDIER_HEAD: {
    id: ICONS.OLD_SOLDIER_HEAD,
    name: "120 Blue Soldier Helm",
    color: "blue",
  },
  OLD_BLUE_SOLDIER_BODY: {
    id: ICONS.OLD_SOLDIER_BODY,
    name: "120 Blue Soldier Armor",
    color: "blue",
  },
  OLD_BLUE_SOLDIER_HAND: {
    id: ICONS.OLD_SOLDIER_HAND,
    name: "120 Blue Soldier Gauntlets",
    color: "blue",
  },
  OLD_BLUE_SOLDIER_FOOT: {
    id: ICONS.OLD_SOLDIER_FOOT,
    name: "120 Blue Soldier Boots",
    color: "blue",
  },
};

export const OVERVIEW: OverviewData[] = [
  {
    title: "Armor",
    groups: [
      {
        description: "120 Blues",
        items: [
          [
            ARMORS.OLD_BLUE_SOLDIER_HEAD,
            ARMORS.OLD_BLUE_SOLDIER_BODY,
            ARMORS.OLD_BLUE_SOLDIER_HAND,
            ARMORS.OLD_BLUE_SOLDIER_FOOT,
          ],
        ],
        notes: ["Better than yellow New Set A, worse than blue New Set A"],
        dropLevels: ["Rare"],
        craftLevels: [],
      },
    ],
  },
];
