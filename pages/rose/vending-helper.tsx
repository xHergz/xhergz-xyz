import { isNil } from "lodash";
import React, { useState } from "react";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";

export type VendingHelperProps = {};

const VendingHelper: React.FunctionComponent<VendingHelperProps> = (
  props: VendingHelperProps
): JSX.Element => {
  const [basePrice, setBasePrice] = useState<number | null>(null);

  const calculateMarkup = (markup: number): number => {
    if (basePrice === null) {
      return 0;
    }
    return Math.floor(basePrice * markup);
  };

  return (
    <RosePageWrapper>
      <h3>Markup Calculation</h3>
      <NumberInput
        label="Base Price:"
        value={basePrice}
        onChange={setBasePrice}
      />
      {!isNil(basePrice) ? (
        <>
          <div>10% Markup = {calculateMarkup(1.1)}</div>
          <div>15% Markup = {calculateMarkup(1.15)}</div>
          <div>20% Markup = {calculateMarkup(1.2)}</div>
          <div>25% Markup = {calculateMarkup(1.25)}</div>
        </>
      ) : null}
    </RosePageWrapper>
  );
};

export default VendingHelper;
