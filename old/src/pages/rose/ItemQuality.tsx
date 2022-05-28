import { isNil } from "lodash";
import React, { useState } from "react";
import NumberInput from "../../components/NumberInput/NumberInput";

export type ItemQualityProps = {};

const ItemQuality: React.FunctionComponent<ItemQualityProps> = (
    props: ItemQualityProps
): JSX.Element => {
    const [hitRate, setHitRate] = useState<number>();
    const [durability, setDurability] = useState<number>();

    const calculateMethodSix = (): number => {
        return Math.floor((hitRate + 15 - durability * 0.8) / 0.6);
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
            {!isNil(hitRate) && !isNil(durability) ? (
                <div>Quality = {calculateMethodSix()}</div>
            ) : null}
        </div>
    );
};

export default ItemQuality;
