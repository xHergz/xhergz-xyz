import { isNil } from "lodash";
import React, { useState } from "react";
import NumberInput from "../../components/NumberInput/NumberInput";

export type ItemQualityProps = {};

const ItemQuality: React.FunctionComponent<ItemQualityProps> = (
    props: ItemQualityProps
): JSX.Element => {
    const [hitRate, setHitRate] = useState<number>();
    const [durability, setDurability] = useState<number>();
    const [quality, setQuality] = useState<number>();

    const calculate = (): void => {
        const quality = Math.floor((hitRate + 15 - durability * 0.8) / 0.6);
        setQuality(quality);
    };

    const canCalculate = !isNil(hitRate) && !isNil(durability);
    return (
        <div>
            <h3>Method #6</h3>
            <NumberInput
                label="Hit Rate:"
                value={hitRate}
                onChange={setHitRate}
            />
            <NumberInput
                label="Durability:"
                value={durability}
                onChange={setDurability}
            />
            <button onClick={calculate} disabled={!canCalculate}>
                Calculate
            </button>
            {!isNil(quality) ? <div>Quality = {quality}</div> : null}
        </div>
    );
};

export default ItemQuality;
