import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

const PATHS = {
  ITEM_QUALITY: "/rose/item-quality",
  ITEM_STATS: "/rose/item-stats",
  MONSTER_COLOUR: "/rose/monster-colour",
  PARTY_EXP: "/rose/party-exp",
  REFINE_DATA: "/rose/refine-data",
};

const Rose: NextPage = () => {
  return (
    <PageWrapper>
      <div>
        <ul>
          <li>
            <Link href={PATHS.ITEM_QUALITY}>Item Quality</Link>
          </li>
          <li>
            <Link href={PATHS.ITEM_STATS}>Item Stats</Link>
          </li>
          <li>
            <Link href={PATHS.MONSTER_COLOUR}>Monster Colour</Link>
          </li>
          <li>
            <Link href={PATHS.REFINE_DATA}>Refine Data</Link>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default Rose;