export function maxCraftStat(quality: number): number {
  const max = (quality + 12) * 3.2;
  return max > 300 ? 300 : max;
}

export function maxDropStat(monsterLevel: number): number {
  const max = monsterLevel + 70;
  return max > 300 ? 300 : max;
}

export const calculateCrossbowAttack = (
  str: number,
  dex: number,
  sen: number,
  weaponAtk: number,
  ammoQuality: number
): number => {
  const strSegment = str * (1 / 5);
  const dexSegment =
    dex * ((0.04 * weaponAtk + 0.02 * ammoQuality + 18.92) / 30);
  const senSegment =
    sen * ((0.03 * weaponAtk + 0.015 * ammoQuality + 0.24) / 30);
  return Math.floor(strSegment + dexSegment + senSegment);
};
