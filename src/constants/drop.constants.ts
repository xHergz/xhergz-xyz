export type RoseItemType = "equipment" | "consumable" | "etc";

export type RoseItemClassification =
  | "material"
  | "chemical"
  | "potion"
  | "magicItem"
  | "refiningMaterial"
  | "metal"
  | "otherworldlyMetal"
  | "leather"
  | "cloth"
  | "woodenMaterial"
  | "stoneMaterial"
  | "gem"
  | "hat"
  | "helmet"
  | "magicHat"
  | "casualClothes"
  | "combatUniforms"
  | "magicClothes"
  | "gloves"
  | "gauntlets"
  | "magicGloves"
  | "shoes"
  | "boots"
  | "magicBoots"
  | "blunts"
  | "oneHandedSwords"
  | "axes"
  | "duals"
  | "katars"
  | "spears"
  | "twoHandedSwords"
  | "staffs"
  | "wands"
  | "bows"
  | "crossbows"
  | "guns"
  | "launchers";

export type RoseItemGroup =
  | "junonMaterials"
  | "lunaMaterials"
  | "eldeonMaterials"
  | "consumables"
  | "refines"
  | "otherMaterials"
  | "resources"
  | "gems"
  | "104sets"
  | "120sets"
  | "weapons";

export type Item = {
  id: number;
  name: string;
  iconId: number;
  type: RoseItemType;
  classification: RoseItemClassification;
  group: RoseItemGroup;
};

const CHEMICALS: Item[] = [
  {
    id: 12071,
    name: "Grey Powder",
    iconId: 1859,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12072,
    name: "Black Powder",
    iconId: 1860,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12073,
    name: "Green Powder",
    iconId: 1861,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12074,
    name: "Blue Powder",
    iconId: 1862,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12075,
    name: "Pink Powder",
    iconId: 1863,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12076,
    name: "Orange Powder",
    iconId: 1864,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12077,
    name: "Red Powder",
    iconId: 1865,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12078,
    name: "Golden Powder",
    iconId: 1866,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12079,
    name: "Transparent Powder",
    iconId: 1894,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12080,
    name: "Rainbow Powder",
    iconId: 1895,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12081,
    name: "Lisent (Fe)",
    iconId: 1014,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12082,
    name: "Lisent (Cu)",
    iconId: 1015,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12083,
    name: "Lisent (Pb)",
    iconId: 1016,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12084,
    name: "Lisent (Al)",
    iconId: 1017,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12085,
    name: "Lisent (Hg)",
    iconId: 1018,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12086,
    name: "Lisent (Na)",
    iconId: 1019,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12087,
    name: "Lisent (Cr)",
    iconId: 1020,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12088,
    name: "Lisent (Au)",
    iconId: 1021,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
  {
    id: 12109,
    name: "Lisent (Ag)",
    iconId: 1532,
    type: "etc",
    classification: "chemical",
    group: "refines",
  },
];

const MAGIC_ITEMS: Item[] = [
  {
    id: 10301,
    name: "Purify Scroll",
    iconId: 2728,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10313,
    name: "Advanced HP Scroll (Solo)",
    iconId: 1034,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10314,
    name: "Advanced MP Scroll (Solo)",
    iconId: 1035,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10315,
    name: "Advanced Dexterity Scroll (Solo)",
    iconId: 1036,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10316,
    name: "Advanced Strength Scroll (Solo)",
    iconId: 1037,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10317,
    name: "Advanced Defense Scroll (Solo)",
    iconId: 1038,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10318,
    name: "Advanced Accuracy Scroll (Solo)",
    iconId: 1060,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10319,
    name: "Advanced Damage Scroll (Solo)",
    iconId: 1060,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
  {
    id: 10384,
    name: "Storm Charm",
    iconId: 1779,
    type: "consumable",
    classification: "magicItem",
    group: "consumables",
  },
];

const MATERIALS: Item[] = [
  {
    id: 12094,
    name: "Rubber Sap",
    iconId: 1745,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12116,
    name: "Netil",
    iconId: 1924,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12117,
    name: "Metil",
    iconId: 1925,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12118,
    name: "Etil",
    iconId: 1926,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12119,
    name: "Petil",
    iconId: 1927,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12120,
    name: "Setil",
    iconId: 1928,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12135,
    name: "Gypsy Tears",
    iconId: 1804,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12136,
    name: "Dark Stone",
    iconId: 1902,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12137,
    name: "Rainbow Stone",
    iconId: 1903,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12139,
    name: "Bamboo",
    iconId: 2115,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12151,
    name: "Black Heart",
    iconId: 1911,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12152,
    name: "Green Heart",
    iconId: 1912,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12153,
    name: "Blue Heart",
    iconId: 1913,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12154,
    name: "Pink Heart",
    iconId: 1914,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12155,
    name: "Red Heart",
    iconId: 1915,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12156,
    name: "Golden Heart",
    iconId: 1916,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12157,
    name: "White Heart",
    iconId: 1917,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12161,
    name: "Green Crystal",
    iconId: 1963,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12162,
    name: "Blue Crystal",
    iconId: 1964,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12163,
    name: "Red Crystal",
    iconId: 1965,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12164,
    name: "White Crystal",
    iconId: 1966,
    type: "etc",
    classification: "material",
    group: "otherMaterials",
  },
  {
    id: 12170,
    name: "Hook Wind Piece",
    iconId: 5362,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12176,
    name: "Insect Leg",
    iconId: 1974,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12177,
    name: "Insect Wing",
    iconId: 1976,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12182,
    name: "Thin Leaf",
    iconId: 1981,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12183,
    name: "Thick Leaf",
    iconId: 1982,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12190,
    name: "Bark",
    iconId: 1990,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12191,
    name: "Animal Leg Bone",
    iconId: 1991,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12192,
    name: "Animal Backbone",
    iconId: 1992,
    type: "etc",
    classification: "material",
    group: "junonMaterials",
  },
  {
    id: 12271,
    name: "Sharp Thorn",
    iconId: 2139,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12272,
    name: "Noctilucent Leaf",
    iconId: 2137,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12278,
    name: "Spider Web",
    iconId: 2138,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12279,
    name: "Killer Leaf",
    iconId: 2136,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12280,
    name: "Paper Wing Pieces",
    iconId: 2134,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12281,
    name: "Plasma",
    iconId: 2133,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12282,
    name: "Sikuku Costume",
    iconId: 2140,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
  {
    id: 12999,
    name: "Mad Honey",
    iconId: 1604,
    type: "etc",
    classification: "material",
    group: "eldeonMaterials",
  },
];

const CLOTHS: Item[] = [
  {
    id: 12051,
    name: "Tough Cloth",
    iconId: 1820,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12052,
    name: "Cotton",
    iconId: 1821,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12053,
    name: "Linen",
    iconId: 1822,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12054,
    name: "Felt",
    iconId: 1823,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12055,
    name: "Silk",
    iconId: 1824,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12056,
    name: "Wool",
    iconId: 1825,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12057,
    name: "Denim",
    iconId: 1826,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12058,
    name: "Plain Weave",
    iconId: 1827,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12059,
    name: "Twill",
    iconId: 1828,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
  {
    id: 12060,
    name: "Lace",
    iconId: 1829,
    type: "etc",
    classification: "cloth",
    group: "resources",
  },
];

const LEATHERS: Item[] = [
  {
    id: 12041,
    name: "Worn-out Leather",
    iconId: 1807,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12042,
    name: "Thin Leather",
    iconId: 1808,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12043,
    name: "Sleek Leather",
    iconId: 1809,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12044,
    name: "Tough Leather",
    iconId: 1810,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12045,
    name: "Tender Leather",
    iconId: 1811,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12046,
    name: "Gorgeous Leather",
    iconId: 1812,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12047,
    name: "Thick Leather",
    iconId: 1813,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12048,
    name: "Hard Leather",
    iconId: 1814,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12049,
    name: "Transparent Leather",
    iconId: 1815,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
  {
    id: 12050,
    name: "Patterned Leather",
    iconId: 1816,
    type: "etc",
    classification: "leather",
    group: "resources",
  },
];

const METALS: Item[] = [
  {
    id: 12001,
    name: "Rusted Iron",
    iconId: 1755,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12002,
    name: "Tin",
    iconId: 1756,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12003,
    name: "Copper",
    iconId: 1757,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12004,
    name: "Bronze",
    iconId: 1758,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12005,
    name: "Iron",
    iconId: 1759,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12006,
    name: "Silver Iron",
    iconId: 1760,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12007,
    name: "Steel",
    iconId: 1761,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12008,
    name: "Chromium",
    iconId: 1762,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12009,
    name: "Tiar",
    iconId: 1763,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
  {
    id: 12010,
    name: "Damascus",
    iconId: 1764,
    type: "etc",
    classification: "metal",
    group: "resources",
  },
];

const OTHERWORLDLY_METALS: Item[] = [
  {
    id: 12011,
    name: "Unprocessed Metal",
    iconId: 1768,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12012,
    name: "Demon Metal",
    iconId: 1769,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12013,
    name: "Wolf Steel",
    iconId: 1770,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12014,
    name: "Molive",
    iconId: 1771,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12015,
    name: "Mythril",
    iconId: 1772,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12016,
    name: "Orihalcon",
    iconId: 1773,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12017,
    name: "Adamantium",
    iconId: 1774,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12018,
    name: "Otherworldly Metal",
    iconId: 1775,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12019,
    name: "Philosopher Stone",
    iconId: 1776,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
  {
    id: 12020,
    name: "Mercury",
    iconId: 1777,
    type: "etc",
    classification: "otherworldlyMetal",
    group: "resources",
  },
];

const STONE_MATERIALS: Item[] = [
  {
    id: 12025,
    name: "Granite",
    iconId: 1785,
    type: "etc",
    classification: "stoneMaterial",
    group: "resources",
  },
  {
    id: 12026,
    name: "Marble",
    iconId: 1786,
    type: "etc",
    classification: "stoneMaterial",
    group: "resources",
  },
];

const WOODEN_MATERIALS: Item[] = [
  {
    id: 12031,
    name: "Twig",
    iconId: 1794,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12032,
    name: "Maple Wood",
    iconId: 1795,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12033,
    name: "Aromatic Wood",
    iconId: 1796,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12034,
    name: "Oak Wood",
    iconId: 1797,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12035,
    name: "Paulownia Wood",
    iconId: 1798,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12036,
    name: "Pine Wood",
    iconId: 1799,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12037,
    name: "Cinnamon Wood",
    iconId: 1800,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12038,
    name: "Red Sandalwood",
    iconId: 1801,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12029,
    name: "Otherworldly Wood",
    iconId: 1802,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
  {
    id: 12030,
    name: "Sephiroth Wood",
    iconId: 1803,
    type: "etc",
    classification: "woodenMaterial",
    group: "resources",
  },
];

const POTIONS: Item[] = [
  {
    id: 10056,
    name: "Vital Jam (+1)",
    iconId: 5265,
    type: "consumable",
    classification: "potion",
    group: "consumables",
  },
  {
    id: 10057,
    name: "Vital Jam (+2)",
    iconId: 5266,
    type: "consumable",
    classification: "potion",
    group: "consumables",
  },
  {
    id: 10058,
    name: "Vital Jam (+5)",
    iconId: 5267,
    type: "consumable",
    classification: "potion",
    group: "consumables",
  },
];

const REFINES: Item[] = [
  {
    id: 12061,
    name: "Low Essence",
    iconId: 1833,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12062,
    name: "Essence",
    iconId: 1834,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12063,
    name: "Low Ether",
    iconId: 1835,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12064,
    name: "Ether",
    iconId: 1836,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12065,
    name: "High Ether",
    iconId: 1837,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12066,
    name: "Elixir",
    iconId: 1838,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12067,
    name: "Hime",
    iconId: 1839,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12068,
    name: "Low Enthiric",
    iconId: 1840,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
  {
    id: 12069,
    name: "Enthiric",
    iconId: 1841,
    type: "etc",
    classification: "refiningMaterial",
    group: "refines",
  },
];

const GEMS: Item[] = [
  {
    id: 11301,
    name: "Garnet [1]",
    iconId: 1409,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11302,
    name: "Garnet [2]",
    iconId: 1410,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11303,
    name: "Garnet [3]",
    iconId: 1411,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11311,
    name: "Ruby [1]",
    iconId: 1435,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11312,
    name: "Ruby [2]",
    iconId: 1436,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11313,
    name: "Ruby [3]",
    iconId: 1437,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11321,
    name: "Sapphire [1]",
    iconId: 1461,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11322,
    name: "Sapphire [2]",
    iconId: 1462,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11323,
    name: "Sapphire [3]",
    iconId: 1463,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11331,
    name: "Topaz [1]",
    iconId: 1448,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11332,
    name: "Topaz [2]",
    iconId: 1449,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11333,
    name: "Topaz [3]",
    iconId: 1450,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11341,
    name: "Emerald [1]",
    iconId: 1487,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11342,
    name: "Emerald [2]",
    iconId: 1488,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11343,
    name: "Emerald [3]",
    iconId: 1489,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11351,
    name: "Peridot [1]",
    iconId: 1474,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11352,
    name: "Peridot [2]",
    iconId: 1475,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11353,
    name: "Peridot [3]",
    iconId: 1476,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11361,
    name: "Diamond [1]",
    iconId: 1404,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11362,
    name: "Diamond [2]",
    iconId: 1405,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11363,
    name: "Diamond [3]",
    iconId: 1406,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11371,
    name: "Pink Opal [1]",
    iconId: 1734,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11372,
    name: "Pink Opal [2]",
    iconId: 1735,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11373,
    name: "Pink Opal [3]",
    iconId: 1736,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11381,
    name: "Amethyst [1]",
    iconId: 1726,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11382,
    name: "Amethyst [2]",
    iconId: 1727,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11383,
    name: "Amethyst [3]",
    iconId: 1729,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11391,
    name: "Black Onyx [1]",
    iconId: 1791,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11392,
    name: "Black Onyx [2]",
    iconId: 1792,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
  {
    id: 11393,
    name: "Black Onyx [3]",
    iconId: 1805,
    type: "etc",
    classification: "gem",
    group: "gems",
  },
];

const ARMOR: Item[] = [
  {
    id: 2096,
    name: "Jaguar Hat",
    iconId: 187,
    type: "equipment",
    classification: "hat",
    group: "104sets",
  },
  {
    id: 3096,
    name: "Jaguar Armor",
    iconId: 369,
    type: "equipment",
    classification: "gloves",
    group: "104sets",
  },
  {
    id: 4096,
    name: "Jaguar Gloves",
    iconId: 525,
    type: "equipment",
    classification: "hat",
    group: "104sets",
  },
  {
    id: 5096,
    name: "Jaguar Boots",
    iconId: 681,
    type: "equipment",
    classification: "hat",
    group: "104sets",
  },
  {
    id: 2097,
    name: "Wild Hawker Hat",
    iconId: 188,
    type: "equipment",
    classification: "hat",
    group: "120sets",
  },
  {
    id: 3097,
    name: "Wild Hawker Chest",
    iconId: 370,
    type: "equipment",
    classification: "hat",
    group: "120sets",
  },
  {
    id: 4097,
    name: "Wild Hawker Gloves",
    iconId: 526,
    type: "equipment",
    classification: "gloves",
    group: "120sets",
  },
  {
    id: 5097,
    name: "Wild Hawker Boots",
    iconId: 682,
    type: "equipment",
    classification: "hat",
    group: "120sets",
  },
  {
    id: 2126,
    name: "Rich Merchant Turban",
    iconId: 213,
    type: "equipment",
    classification: "hat",
    group: "104sets",
  },
  {
    id: 3126,
    name: "Rich Merchant Vest",
    iconId: 395,
    type: "equipment",
    classification: "casualClothes",
    group: "104sets",
  },
  {
    id: 4126,
    name: "Rich Merchant Gloves",
    iconId: 551,
    type: "equipment",
    classification: "gloves",
    group: "104sets",
  },
  {
    id: 5126,
    name: "Rich Merchant Boots",
    iconId: 707,
    type: "equipment",
    classification: "shoes",
    group: "104sets",
  },
  {
    id: 2127,
    name: "Redfield Chairman Hat",
    iconId: 214,
    type: "equipment",
    classification: "hat",
    group: "120sets",
  },
  {
    id: 3127,
    name: "Redfield Chairman Suit",
    iconId: 396,
    type: "equipment",
    classification: "casualClothes",
    group: "120sets",
  },
  {
    id: 4127,
    name: "Redfield Chairman Gloves",
    iconId: 552,
    type: "equipment",
    classification: "gloves",
    group: "120sets",
  },
  {
    id: 5127,
    name: "Redfield Chairman Shoes",
    iconId: 708,
    type: "equipment",
    classification: "shoes",
    group: "120sets",
  },
  {
    id: 2036,
    name: "Kurash Helm",
    iconId: 122,
    type: "equipment",
    classification: "helmet",
    group: "104sets",
  },
  {
    id: 3036,
    name: "Kurash Armor",
    iconId: 304,
    type: "equipment",
    classification: "combatUniforms",
    group: "104sets",
  },
  {
    id: 4036,
    name: "Kurash Gauntlets",
    iconId: 460,
    type: "equipment",
    classification: "gauntlets",
    group: "104sets",
  },
  {
    id: 5036,
    name: "Kurash Boots",
    iconId: 616,
    type: "equipment",
    classification: "boots",
    group: "104sets",
  },
  {
    id: 2037,
    name: "Plate Helm",
    iconId: 123,
    type: "equipment",
    classification: "helmet",
    group: "120sets",
  },
  {
    id: 3037,
    name: "Plate Armor",
    iconId: 305,
    type: "equipment",
    classification: "combatUniforms",
    group: "120sets",
  },
  {
    id: 4037,
    name: "Plate Gauntlets",
    iconId: 461,
    type: "equipment",
    classification: "gauntlets",
    group: "120sets",
  },
  {
    id: 5037,
    name: "Plate Boots",
    iconId: 617,
    type: "equipment",
    classification: "boots",
    group: "120sets",
  },
  {
    id: 2066,
    name: "Velvet Hat of Witch",
    iconId: 148,
    type: "equipment",
    classification: "magicHat",
    group: "104sets",
  },
  {
    id: 3066,
    name: "Velvet Coat of Witch",
    iconId: 343,
    type: "equipment",
    classification: "magicClothes",
    group: "104sets",
  },
  {
    id: 4066,
    name: "Velvet Gloves of Witch",
    iconId: 486,
    type: "equipment",
    classification: "magicGloves",
    group: "104sets",
  },
  {
    id: 5066,
    name: "Velvet Boots of Witch",
    iconId: 642,
    type: "equipment",
    classification: "magicBoots",
    group: "104sets",
  },
  {
    id: 2067,
    name: "Heaven's Bonnet",
    iconId: 149,
    type: "equipment",
    classification: "magicHat",
    group: "120sets",
  },
  {
    id: 3067,
    name: "Heaven's Coat",
    iconId: 344,
    type: "equipment",
    classification: "magicClothes",
    group: "120sets",
  },
  {
    id: 4067,
    name: "Heaven's Gloves",
    iconId: 487,
    type: "equipment",
    classification: "magicGloves",
    group: "120sets",
  },
  {
    id: 5067,
    name: "Heaven's Shoes",
    iconId: 643,
    type: "equipment",
    classification: "magicBoots",
    group: "120sets",
  },
];

const WEAPONS: Item[] = [
  {
    id: 8045,
    name: "Great Hammer",
    iconId: 964,
    type: "equipment",
    classification: "blunts",
    group: "weapons",
  },
  {
    id: 8046,
    name: "Forest Hammer",
    iconId: 965,
    type: "equipment",
    classification: "blunts",
    group: "weapons",
  },
  {
    id: 8047,
    name: "Labour Hammer",
    iconId: 966,
    type: "equipment",
    classification: "blunts",
    group: "weapons",
  },
  {
    id: 8017,
    name: "Flamboyant",
    iconId: 927,
    type: "equipment",
    classification: "oneHandedSwords",
    group: "weapons",
  },
  {
    id: 8018,
    name: "Righteous Sword",
    iconId: 928,
    type: "equipment",
    classification: "oneHandedSwords",
    group: "weapons",
  },
  {
    id: 8144,
    name: "Bloody Axe",
    iconId: 1132,
    type: "equipment",
    classification: "axes",
    group: "weapons",
  },
  {
    id: 8145,
    name: "Collapse Axe",
    iconId: 1133,
    type: "equipment",
    classification: "axes",
    group: "weapons",
  },
  {
    id: 8443,
    name: "Spirits Dual Wield",
    iconId: 1430,
    type: "equipment",
    classification: "duals",
    group: "weapons",
  },
  {
    id: 8444,
    name: "Desperado Dual Wield",
    iconId: 1431,
    type: "equipment",
    classification: "duals",
    group: "weapons",
  },
  {
    id: 8415,
    name: "Fenrir's Tooth",
    iconId: 1393,
    type: "equipment",
    classification: "katars",
    group: "weapons",
  },
  {
    id: 8416,
    name: "Phantasma Knuckle",
    iconId: 1394,
    type: "equipment",
    classification: "katars",
    group: "weapons",
  },
  {
    id: 8176,
    name: "Dagan Spear",
    iconId: 1095,
    type: "equipment",
    classification: "spears",
    group: "weapons",
  },
  {
    id: 8177,
    name: "Longinus Spear",
    iconId: 1096,
    type: "equipment",
    classification: "spears",
    group: "weapons",
  },
  {
    id: 8115,
    name: "Great Sword",
    iconId: 1055,
    type: "equipment",
    classification: "twoHandedSwords",
    group: "weapons",
  },
  {
    id: 8116,
    name: "Giant Sword",
    iconId: 1056,
    type: "equipment",
    classification: "twoHandedSwords",
    group: "weapons",
  },
  {
    id: 8314,
    name: "Prayer Staff",
    iconId: 1301,
    type: "equipment",
    classification: "staffs",
    group: "weapons",
  },
  {
    id: 8315,
    name: "Cypress Pole",
    iconId: 1302,
    type: "equipment",
    classification: "staffs",
    group: "weapons",
  },
  {
    id: 8316,
    name: "Ikaness Staff",
    iconId: 1303,
    type: "equipment",
    classification: "staffs",
    group: "weapons",
  },
  {
    id: 8345,
    name: "Conjurer's Wand",
    iconId: 1356,
    type: "equipment",
    classification: "wands",
    group: "weapons",
  },
  {
    id: 8346,
    name: "Twister Wand",
    iconId: 1357,
    type: "equipment",
    classification: "wands",
    group: "weapons",
  },
  {
    id: 8216,
    name: "Mediator Bow",
    iconId: 1186,
    type: "equipment",
    classification: "bows",
    group: "weapons",
  },
  {
    id: 8217,
    name: "Lynx Bow",
    iconId: 1187,
    type: "equipment",
    classification: "bows",
    group: "weapons",
  },
  {
    id: 8070,
    name: "Steel Crossbow",
    iconId: 997,
    type: "equipment",
    classification: "crossbows",
    group: "weapons",
  },
  {
    id: 8071,
    name: "Mythril Crossbow",
    iconId: 998,
    type: "equipment",
    classification: "crossbows",
    group: "weapons",
  },
  {
    id: 8916,
    name: "Composite Crossbow",
    iconId: 1023,
    type: "equipment",
    classification: "crossbows",
    group: "weapons",
  },
  {
    id: 8917,
    name: "Knight Killer",
    iconId: 1024,
    type: "equipment",
    classification: "crossbows",
    group: "weapons",
  },
  {
    id: 8244,
    name: "Remington",
    iconId: 1223,
    type: "equipment",
    classification: "guns",
    group: "weapons",
  },
  {
    id: 8245,
    name: "Brave Gun",
    iconId: 1224,
    type: "equipment",
    classification: "guns",
    group: "weapons",
  },
  {
    id: 8246,
    name: "Bastard Gun",
    iconId: 1225,
    type: "equipment",
    classification: "guns",
    group: "weapons",
  },
  {
    id: 8272,
    name: "Particle Cannon",
    iconId: 1259,
    type: "equipment",
    classification: "launchers",
    group: "weapons",
  },
  {
    id: 8273,
    name: "Mana Cannon",
    iconId: 1261,
    type: "equipment",
    classification: "launchers",
    group: "weapons",
  },
  {
    id: 8274,
    name: "Ferrell Cannon",
    iconId: 1262,
    type: "equipment",
    classification: "launchers",
    group: "weapons",
  },
];

export const ALL_ITEMS = [
  ...CHEMICALS,
  ...MAGIC_ITEMS,
  ...MATERIALS,
  ...CLOTHS,
  ...LEATHERS,
  ...METALS,
  ...OTHERWORLDLY_METALS,
  ...STONE_MATERIALS,
  ...WOODEN_MATERIALS,
  ...POTIONS,
  ...REFINES,
  ...GEMS,
  ...ARMOR,
  ...WEAPONS,
];

export const ALL_ITEM_MAP = new Map<number, Item>(
  ALL_ITEMS.map((item) => [item.id, item])
);
