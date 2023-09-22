import { isNil } from "lodash";
import { useState } from "react";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";
import SegmentedControl from "../../src/components/SegmentedControl/SegmentedControl";
import { calculateCrossbowAttack } from "../../src/utils/roseUtils";

type WeaponType =
  | "shortSword"
  | "longSword"
  | "blunt"
  | "spear"
  | "bow"
  | "crossbow"
  | "katar"
  | "duals"
  | "staff"
  | "wand"
  | "gun"
  | "cannon";

export type StatCalcProps = {};

const StatCalc: React.FC<StatCalcProps> = ({}): JSX.Element => {
  const [str, setStr] = useState<number | null>(15);
  const [dex, setDex] = useState<number | null>(15);
  const [int, setInt] = useState<number | null>(15);
  const [con, setCon] = useState<number | null>(15);
  const [cha, setCha] = useState<number | null>(10);
  const [sen, setSen] = useState<number | null>(10);
  const [weaponType, setWeaponType] = useState<WeaponType>("shortSword");
  const [weaponAttack, setWeaponAttack] = useState<number | null>(0);
  const [ammoQuality, setAmmoQuality] = useState<number | null>(40);

  const calculateAttackPower = (): number => {
    switch (weaponType) {
      case "shortSword":
        return 1;
      case "longSword":
        return 2;
      case "blunt":
        return 3;
      case "spear":
        return 4;
      case "bow":
        return 5;
      case "crossbow":
        if (!str || !dex || !sen || !weaponAttack || !ammoQuality) {
          return 0;
        }
        return calculateCrossbowAttack(
          str,
          dex,
          sen,
          weaponAttack,
          ammoQuality
        );
      case "katar":
        return 7;
      case "duals":
        return 8;
      case "staff":
        return 9;
      case "wand":
        return 10;
      case "gun":
        return 11;
      case "cannon":
        return 12;
      default:
        return 0;
    }
  };

  return (
    <RosePageWrapper>
      <h3>Stat Calc</h3>
      <div className="grid grid-cols-2">
        <div>
          <NumberInput label="Str:" value={str} onChange={setStr} />
          <NumberInput label="Dex:" value={dex} onChange={setDex} />
          <NumberInput label="Int:" value={int} onChange={setInt} />
          <NumberInput label="Con:" value={con} onChange={setCon} />
          <NumberInput label="Cha:" value={cha} onChange={setCha} />
          <NumberInput label="Sen:" value={sen} onChange={setSen} />
          <SegmentedControl
            label="Weapon Type:"
            value={weaponType}
            onChange={setWeaponType}
            options={[
              { label: "Short Sword", value: "shortSword" },
              { label: "Long Sword", value: "longSword" },
              { label: "Blunt", value: "blunt" },
              { label: "Spear", value: "spear" },
              { label: "Bow", value: "bow" },
              { label: "Crossbow", value: "crossbow" },
              { label: "Katar", value: "katar" },
              { label: "Duals", value: "duals" },
              { label: "Staff", value: "staff" },
              { label: "Wand", value: "wand" },
              { label: "Gun", value: "gun" },
              { label: "Cannon", value: "cannon" },
            ]}
          />
          <NumberInput
            label="Weapon Attack:"
            value={weaponAttack}
            onChange={setWeaponAttack}
          />
          <NumberInput
            label="Ammo Quality:"
            value={ammoQuality}
            onChange={setAmmoQuality}
          />
        </div>
        <div>
          <div>Attack Power = {calculateAttackPower()}</div>
        </div>
      </div>
    </RosePageWrapper>
  );
};

export default StatCalc;
