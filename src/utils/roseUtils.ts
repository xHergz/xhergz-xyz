export function maxCraftStat(quality: number): number {
    const max = (quality + 12) * 3.2;
    return max > 300 ? 300 : max;
};

export function maxDropStat(monsterLevel: number): number {
    const max = monsterLevel + 70;
    return max > 300 ? 300 : max;
};
