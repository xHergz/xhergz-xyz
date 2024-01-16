import React from "react";

import NavList from "./NavList";

export type RoseNavListProps = {};

const ROSE_PATHS = {
  DROP_TABLE_MAKER: "/rose/drop-table-maker",
  ITEM_QUALITY: "/rose/item-quality",
  ITEM_STATS: "/rose/item-stats",
  MONSTER_COLOUR: "/rose/monster-colour",
  PARTY_EXP: "/rose/party-exp",
  QUEST_REWARDS: "/rose/quest-rewards",
  REFINE_DATA: "/rose/refine-data",
};

const ROSE_SECTIONS = [
  {
    title: "Game Data",
    items: [
      {
        title: "Refine Data",
        href: ROSE_PATHS.REFINE_DATA,
      },
    ],
  },
  {
    title: "Game Tools",
    items: [
      {
        title: "Item Quality Calcualtor",
        href: ROSE_PATHS.ITEM_QUALITY,
      },
      {
        title: "Item Stats Calculator",
        href: ROSE_PATHS.ITEM_STATS,
      },
      {
        title: "Monster Colour Calculator",
        href: ROSE_PATHS.MONSTER_COLOUR,
      },
      {
        title: "Quest Rewards Calculator",
        href: ROSE_PATHS.QUEST_REWARDS,
      },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      {
        title: "Drop Table Maker",
        href: ROSE_PATHS.DROP_TABLE_MAKER,
      },
    ],
  },
];

const RoseNavList: React.FunctionComponent<RoseNavListProps> = (
  props: RoseNavListProps
): JSX.Element => {
  return <NavList title="AruaROSE Tools" sections={ROSE_SECTIONS} />;
};

export default RoseNavList;
