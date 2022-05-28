import { isNil } from "lodash";
import React, { useState } from "react";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

export type ItemQualityProps = {};

const ItemQuality: React.FunctionComponent<ItemQualityProps> = (
  props: ItemQualityProps
): JSX.Element => {
  const [hitRate, setHitRate] = useState<number | null>(null);
  const [durability, setDurability] = useState<number | null>(null);

  const calculateMethodSix = (): number => {
    if (hitRate === null || durability === null) {
      return 0;
    }
    return Math.floor((hitRate + 15 - durability * 0.8) / 0.6);
  };

  return (
    <PageWrapper>
      <h3>Method #6</h3>
      <NumberInput label="Hit Rate:" value={hitRate} onChange={setHitRate} />
      <NumberInput
        label="Durability:"
        value={durability}
        onChange={setDurability}
      />
      {!isNil(hitRate) && !isNil(durability) ? (
        <div>Quality = {calculateMethodSix()}</div>
      ) : null}
    </PageWrapper>
  );
};

export default ItemQuality;
