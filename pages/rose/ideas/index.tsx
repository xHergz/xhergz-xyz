import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import PageWrapper from "../../../src/components/PageWrapper/PageWrapper";

const PATHS = {
  NEW_END_GAME: "/rose/ideas/new-end-game",
};

const Rose: NextPage = () => {
  return (
    <PageWrapper>
      <div>
        <ul>
          <li>
            <Link href={PATHS.NEW_END_GAME}>New End Game</Link>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default Rose;
