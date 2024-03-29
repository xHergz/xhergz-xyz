import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

const PATHS = {
  CONTRACTION_TRACKER: "/misc/contraction-tracker",
  PASSWORD_GENERATOR: "/misc/password-generator",
};

const Rose: NextPage = () => {
  return (
    <PageWrapper>
      <div>
        <ul>
          <li>
            <Link href={PATHS.CONTRACTION_TRACKER}>Contraction Tracker</Link>
          </li>
          <li>
            <Link href={PATHS.PASSWORD_GENERATOR}>Password Generator</Link>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default Rose;
