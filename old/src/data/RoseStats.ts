export const ROSE_STATS = ['STR', 'DEX', 'INT', 'CON', 'CHA', 'SEN', 'ATK PWR', 'HIT RATE', 'CRIT', 'MAX HP', 'MAX MP', 'HP REC', 'MP REC', 'MP RED', 'DEF', 'MGC RES', 'DODGE'];

export type Stat = typeof ROSE_STATS[number];

export type Appraisal = {
    primary: Stat,
    primaryValue: number,
    secondary?: Stat,
    secondaryValue?: number,
};

export type AppraisalInfo =  Appraisal & {
    isGood: boolean,
    index: number
};

export const ROSE_APPRAISALS: AppraisalInfo[] = [
    {
      primary: "MAX HP",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 1
    },
    {
      primary: "MAX MP",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 2
    },
    {
      primary: "STR",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 3
    },
    {
      primary: "DEX",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 4
    },
    {
      primary: "INT",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 5
    },
    {
      primary: "CON",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 6
    },
    {
      primary: "CHA",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 7
    },
    {
      primary: "SEN",
      primaryValue: 1,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 8
    },
    {
      primary: "MAX HP",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 9
    },
    {
      primary: "MAX MP",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 10
    },
    {
      primary: "ATK PWR",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 11
    },
    {
      primary: "STR",
      primaryValue: 1,
      secondary: "MAX HP",
      secondaryValue: 5,
      isGood: false,
      index: 12
    },
    {
      primary: "DEX",
      primaryValue: 1,
      secondary: "MAX HP",
      secondaryValue: 5,
      isGood: false,
      index: 13
    },
    {
      primary: "INT",
      primaryValue: 1,
      secondary: "MAX MP",
      secondaryValue: 5,
      isGood: false,
      index: 14
    },
    {
      primary: "CON",
      primaryValue: 1,
      secondary: "MAX HP",
      secondaryValue: 5,
      isGood: false,
      index: 15
    },
    {
      primary: "DEF",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 16
    },
    {
      primary: "HIT RATE",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 17
    },
    {
      primary: "MAX HP",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 18
    },
    {
      primary: "MAX MP",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 19
    },
    {
      primary: "STR",
      primaryValue: 1,
      secondary: "SEN",
      secondaryValue: 1,
      isGood: false,
      index: 20
    },
    {
      primary: "STR",
      primaryValue: 1,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 21
    },
    {
      primary: "DEX",
      primaryValue: 1,
      secondary: "SEN",
      secondaryValue: 1,
      isGood: false,
      index: 22
    },
    {
      primary: "DEX",
      primaryValue: 1,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 23
    },
    {
      primary: "INT",
      primaryValue: 1,
      secondary: "SEN",
      secondaryValue: 1,
      isGood: false,
      index: 24
    },
    {
      primary: "INT",
      primaryValue: 1,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 25
    },
    {
      primary: "CON",
      primaryValue: 6,
      secondary: "SEN",
      secondaryValue: 5,
      isGood: true,
      index: 26
    },
    {
      primary: "CHA",
      primaryValue: 1,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 27
    },
    {
      primary: "CHA",
      primaryValue: 1,
      secondary: "INT",
      secondaryValue: 1,
      isGood: false,
      index: 28
    },
    {
      primary: "STR",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 29
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 30
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 31
    },
    {
      primary: "CON",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 32
    },
    {
      primary: "CHA",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 33
    },
    {
      primary: "SEN",
      primaryValue: 2,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 34
    },
    {
      primary: "ATK PWR",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 35
    },
    {
      primary: "STR",
      primaryValue: 1,
      secondary: "ATK PWR",
      secondaryValue: 2,
      isGood: false,
      index: 36
    },
    {
      primary: "DEX",
      primaryValue: 1,
      secondary: "ATK PWR",
      secondaryValue: 2,
      isGood: false,
      index: 37
    },
    {
      primary: "INT",
      primaryValue: 1,
      secondary: "ATK PWR",
      secondaryValue: 2,
      isGood: false,
      index: 38
    },
    {
      primary: "CON",
      primaryValue: 1,
      secondary: "ATK PWR",
      secondaryValue: 2,
      isGood: false,
      index: 39
    },
    {
      primary: "DEF",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 40
    },
    {
      primary: "HIT RATE",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 41
    },
    {
      primary: "MGC RES",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 42
    },
    {
      primary: "DODGE",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 43
    },
    {
      primary: "ATK PWR",
      primaryValue: 2,
      secondary: "DEF",
      secondaryValue: 2,
      isGood: false,
      index: 44
    },
    {
      primary: "CON",
      primaryValue: 1,
      secondary: "HP REC",
      secondaryValue: 1,
      isGood: false,
      index: 45
    },
    {
      primary: "SEN",
      primaryValue: 1,
      secondary: "HP REC",
      secondaryValue: 1,
      isGood: false,
      index: 46
    },
    {
      primary: "STR",
      primaryValue: 7,
      secondary: "DEX",
      secondaryValue: 7,
      isGood: true,
      index: 47
    },
    {
      primary: "STR",
      primaryValue: 2,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 48
    },
    {
      primary: "STR",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 49
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 50
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 51
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: "CON",
      secondaryValue: 1,
      isGood: false,
      index: 52
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 53
    },
    {
      primary: "CON",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 54
    },
    {
      primary: "SEN",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 55
    },
    {
      primary: "ATK PWR",
      primaryValue: 3,
      secondary: "MAX HP",
      secondaryValue: 30,
      isGood: false,
      index: 56
    },
    {
      primary: "MAX HP",
      primaryValue: 20,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 57
    },
    {
      primary: "MAX MP",
      primaryValue: 20,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 58
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 59
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 60
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 61
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 62
    },
    {
      primary: "CHA",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 63
    },
    {
      primary: "SEN",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 64
    },
    {
      primary: "DEF",
      primaryValue: 2,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 65
    },
    {
      primary: "CRIT",
      primaryValue: 3,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 66
    },
    {
      primary: "SEN",
      primaryValue: 2,
      secondary: "DODGE",
      secondaryValue: 2,
      isGood: false,
      index: 67
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: "HP REC",
      secondaryValue: 1,
      isGood: false,
      index: 68
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: "MP REC",
      secondaryValue: 1,
      isGood: false,
      index: 69
    },
    {
      primary: "CON",
      primaryValue: 2,
      secondary: "MP REC",
      secondaryValue: 1,
      isGood: false,
      index: 70
    },
    {
      primary: "CHA",
      primaryValue: 2,
      secondary: "HP REC",
      secondaryValue: 1,
      isGood: false,
      index: 71
    },
    {
      primary: "ATK PWR",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 72
    },
    {
      primary: "STR",
      primaryValue: 2,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 73
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 74
    },
    {
      primary: "CON",
      primaryValue: 2,
      secondary: "ATK PWR",
      secondaryValue: 15,
      isGood: true,
      index: 75
    },
    {
      primary: "SEN",
      primaryValue: 2,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 76
    },
    {
      primary: "STR",
      primaryValue: 2,
      secondary: "CRIT",
      secondaryValue: 2,
      isGood: false,
      index: 77
    },
    {
      primary: "DEX",
      primaryValue: 2,
      secondary: "CRIT",
      secondaryValue: 2,
      isGood: false,
      index: 78
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: "CRIT",
      secondaryValue: 2,
      isGood: false,
      index: 79
    },
    {
      primary: "CON",
      primaryValue: 2,
      secondary: "CRIT",
      secondaryValue: 2,
      isGood: false,
      index: 80
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 81
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 82
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: "MAX MP",
      secondaryValue: 10,
      isGood: false,
      index: 83
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: "MAX MP",
      secondaryValue: 30,
      isGood: false,
      index: 84
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: "MAX HP",
      secondaryValue: 10,
      isGood: false,
      index: 85
    },
    {
      primary: "MAX HP",
      primaryValue: 25,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 86
    },
    {
      primary: "MAX MP",
      primaryValue: 25,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 87
    },
    {
      primary: "DEF",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 88
    },
    {
      primary: "HIT RATE",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 89
    },
    {
      primary: "MGC RES",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 90
    },
    {
      primary: "DODGE",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 91
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 92
    },
    {
      primary: "DEX",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 93
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 94
    },
    {
      primary: "CON",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 95
    },
    {
      primary: "CHA",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 96
    },
    {
      primary: "SEN",
      primaryValue: 4,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 97
    },
    {
      primary: "SEN",
      primaryValue: 3,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 98
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: "SEN",
      secondaryValue: 2,
      isGood: false,
      index: 99
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: "CON",
      secondaryValue: 2,
      isGood: false,
      index: 100
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: "ATK PWR",
      secondaryValue: 15,
      isGood: true,
      index: 101
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: "SEN",
      secondaryValue: 2,
      isGood: false,
      index: 102
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: "CON",
      secondaryValue: 2,
      isGood: false,
      index: 103
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 104
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: "SEN",
      secondaryValue: 2,
      isGood: false,
      index: 105
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: "CON",
      secondaryValue: 2,
      isGood: false,
      index: 106
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 107
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: "SEN",
      secondaryValue: 2,
      isGood: false,
      index: 108
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: "ATK PWR",
      secondaryValue: 3,
      isGood: false,
      index: 109
    },
    {
      primary: "CHA",
      primaryValue: 3,
      secondary: "INT",
      secondaryValue: 2,
      isGood: false,
      index: 110
    },
    {
      primary: "SEN",
      primaryValue: 2,
      secondary: "HIT RATE",
      secondaryValue: 4,
      isGood: false,
      index: 111
    },
    {
      primary: "MAX HP",
      primaryValue: 30,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 112
    },
    {
      primary: "MAX MP",
      primaryValue: 30,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 113
    },
    {
      primary: "DEX",
      primaryValue: 4,
      secondary: "DODGE",
      secondaryValue: 2,
      isGood: false,
      index: 114
    },
    {
      primary: "INT",
      primaryValue: 2,
      secondary: "MP RED",
      secondaryValue: 5,
      isGood: false,
      index: 115
    },
    {
      primary: "CON",
      primaryValue: 4,
      secondary: "DODGE",
      secondaryValue: 2,
      isGood: false,
      index: 116
    },
    {
      primary: "SEN",
      primaryValue: 4,
      secondary: "DODGE",
      secondaryValue: 2,
      isGood: false,
      index: 117
    },
    {
      primary: "ATK PWR",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 118
    },
    {
      primary: "STR",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 119
    },
    {
      primary: "DEX",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 120
    },
    {
      primary: "INT",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 121
    },
    {
      primary: "CON",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 122
    },
    {
      primary: "CHA",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 123
    },
    {
      primary: "SEN",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 124
    },
    {
      primary: "CRIT",
      primaryValue: 5,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 125
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 126
    },
    {
      primary: "DEX",
      primaryValue: 4,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 127
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: "MAX MP",
      secondaryValue: 15,
      isGood: false,
      index: 128
    },
    {
      primary: "CON",
      primaryValue: 4,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 129
    },
    {
      primary: "SEN",
      primaryValue: 4,
      secondary: "MAX HP",
      secondaryValue: 15,
      isGood: false,
      index: 130
    },
    {
      primary: "CHA",
      primaryValue: 3,
      secondary: "SEN",
      secondaryValue: 3,
      isGood: false,
      index: 131
    },
    {
      primary: "CHA",
      primaryValue: 2,
      secondary: "MGC RES",
      secondaryValue: 5,
      isGood: false,
      index: 132
    },
    {
      primary: "SEN",
      primaryValue: 3,
      secondary: "HIT RATE",
      secondaryValue: 4,
      isGood: false,
      index: 133
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: "DEX",
      secondaryValue: 2,
      isGood: false,
      index: 134
    },
    {
      primary: "ATK PWR",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 135
    },
    {
      primary: "DEF",
      primaryValue: 7,
      secondary: "MGC RES",
      secondaryValue: 14,
      isGood: true,
      index: 136
    },
    {
      primary: "DEF",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 137
    },
    {
      primary: "HIT RATE",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 138
    },
    {
      primary: "MGC RES",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 139
    },
    {
      primary: "DODGE",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 140
    },
    {
      primary: "ATK PWR",
      primaryValue: 5,
      secondary: "HIT RATE",
      secondaryValue: 4,
      isGood: false,
      index: 141
    },
    {
      primary: "CON",
      primaryValue: 3,
      secondary: "MP RED",
      secondaryValue: 2,
      isGood: false,
      index: 142
    },
    {
      primary: "SEN",
      primaryValue: 3,
      secondary: "MP RED",
      secondaryValue: 2,
      isGood: false,
      index: 143
    },
    {
      primary: "DEF",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 144
    },
    {
      primary: "MGC RES",
      primaryValue: 5,
      secondary: "MAX MP",
      secondaryValue: 20,
      isGood: false,
      index: 145
    },
    {
      primary: "DODGE",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 146
    },
    {
      primary: "DEF",
      primaryValue: 7,
      secondary: "MAX HP",
      secondaryValue: 5,
      isGood: false,
      index: 147
    },
    {
      primary: "ATK PWR",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 148
    },
    {
      primary: "CHA",
      primaryValue: 4,
      secondary: "ATK PWR",
      secondaryValue: 4,
      isGood: false,
      index: 149
    },
    {
      primary: "MAX HP",
      primaryValue: 35,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 150
    },
    {
      primary: "MAX MP",
      primaryValue: 35,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 151
    },
    {
      primary: "STR",
      primaryValue: 3,
      secondary: "HIT RATE",
      secondaryValue: 5,
      isGood: false,
      index: 152
    },
    {
      primary: "DEX",
      primaryValue: 3,
      secondary: "HIT RATE",
      secondaryValue: 20,
      isGood: true,
      index: 153
    },
    {
      primary: "INT",
      primaryValue: 3,
      secondary: "HIT RATE",
      secondaryValue: 5,
      isGood: false,
      index: 154
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: "CRIT",
      secondaryValue: 3,
      isGood: false,
      index: 155
    },
    {
      primary: "DEX",
      primaryValue: 4,
      secondary: "CRIT",
      secondaryValue: 3,
      isGood: false,
      index: 156
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: "CRIT",
      secondaryValue: 3,
      isGood: false,
      index: 157
    },
    {
      primary: "CON",
      primaryValue: 4,
      secondary: "CRIT",
      secondaryValue: 3,
      isGood: false,
      index: 158
    },
    {
      primary: "CHA",
      primaryValue: 4,
      secondary: "CRIT",
      secondaryValue: 3,
      isGood: false,
      index: 159
    },
    {
      primary: "STR",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 160
    },
    {
      primary: "DEX",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 161
    },
    {
      primary: "INT",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 162
    },
    {
      primary: "CON",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 163
    },
    {
      primary: "CHA",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 164
    },
    {
      primary: "SEN",
      primaryValue: 6,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 165
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 166
    },
    {
      primary: "DEX",
      primaryValue: 4,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 167
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: "ATK PWR",
      secondaryValue: 15,
      isGood: true,
      index: 168
    },
    {
      primary: "CON",
      primaryValue: 4,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 169
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: "MP RED",
      secondaryValue: 2,
      isGood: false,
      index: 170
    },
    {
      primary: "DEF",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 171
    },
    {
      primary: "HIT RATE",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 172
    },
    {
      primary: "MGC RES",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 173
    },
    {
      primary: "DODGE",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 174
    },
    {
      primary: "DEF",
      primaryValue: 5,
      secondary: "DODGE",
      secondaryValue: 5,
      isGood: false,
      index: 175
    },
    {
      primary: "STR",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 176
    },
    {
      primary: "DEX",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 177
    },
    {
      primary: "INT",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 178
    },
    {
      primary: "CON",
      primaryValue: 5,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 179
    },
    {
      primary: "STR",
      primaryValue: 4,
      secondary: "HIT RATE",
      secondaryValue: 5,
      isGood: false,
      index: 180
    },
    {
      primary: "INT",
      primaryValue: 4,
      secondary: "HIT RATE",
      secondaryValue: 5,
      isGood: false,
      index: 181
    },
    {
      primary: "CHA",
      primaryValue: 4,
      secondary: "DEF",
      secondaryValue: 5,
      isGood: false,
      index: 182
    },
    {
      primary: "SEN",
      primaryValue: 4,
      secondary: "MGC RES",
      secondaryValue: 5,
      isGood: false,
      index: 183
    },
    {
      primary: "MAX HP",
      primaryValue: 40,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 184
    },
    {
      primary: "MAX MP",
      primaryValue: 40,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 185
    },
    {
      primary: "STR",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 186
    },
    {
      primary: "DEX",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 187
    },
    {
      primary: "INT",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 188
    },
    {
      primary: "CON",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 189
    },
    {
      primary: "CHA",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 190
    },
    {
      primary: "SEN",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 191
    },
    {
      primary: "CRIT",
      primaryValue: 7,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 192
    },
    {
      primary: "STR",
      primaryValue: 5,
      secondary: "ATK PWR",
      secondaryValue: 20,
      isGood: true,
      index: 193
    },
    {
      primary: "DEX",
      primaryValue: 5,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 194
    },
    {
      primary: "INT",
      primaryValue: 5,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 195
    },
    {
      primary: "CON",
      primaryValue: 5,
      secondary: "ATK PWR",
      secondaryValue: 5,
      isGood: false,
      index: 196
    },
    {
      primary: "STR",
      primaryValue: 5,
      secondary: "HP REC",
      secondaryValue: 2,
      isGood: false,
      index: 197
    },
    {
      primary: "DEX",
      primaryValue: 5,
      secondary: "HP REC",
      secondaryValue: 2,
      isGood: false,
      index: 198
    },
    {
      primary: "INT",
      primaryValue: 5,
      secondary: "MP REC",
      secondaryValue: 2,
      isGood: false,
      index: 199
    },
    {
      primary: "CON",
      primaryValue: 5,
      secondary: "HP REC",
      secondaryValue: 2,
      isGood: false,
      index: 200
    },
    {
      primary: "HIT RATE",
      primaryValue: 9,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 201
    },
    {
      primary: "MGC RES",
      primaryValue: 9,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 202
    },
    {
      primary: "ATK PWR",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 203
    },
    {
      primary: "ATK PWR",
      primaryValue: 7,
      secondary: "DEF",
      secondaryValue: 5,
      isGood: false,
      index: 204
    },
    {
      primary: "STR",
      primaryValue: 5,
      secondary: "DEF",
      secondaryValue: 5,
      isGood: false,
      index: 205
    },
    {
      primary: "DEX",
      primaryValue: 5,
      secondary: "DODGE",
      secondaryValue: 5,
      isGood: false,
      index: 206
    },
    {
      primary: "CON",
      primaryValue: 5,
      secondary: "DODGE",
      secondaryValue: 5,
      isGood: false,
      index: 207
    },
    {
      primary: "ATK PWR",
      primaryValue: 8,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 208
    },
    {
      primary: "DEX",
      primaryValue: 7,
      secondary: "MAX MP",
      secondaryValue: 15,
      isGood: false,
      index: 209
    },
    {
      primary: "INT",
      primaryValue: 7,
      secondary: "MAX MP",
      secondaryValue: 50,
      isGood: false,
      index: 210
    },
    {
      primary: "CON",
      primaryValue: 7,
      secondary: "MAX MP",
      secondaryValue: 15,
      isGood: false,
      index: 211
    },
    {
      primary: "MAX HP",
      primaryValue: 45,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 212
    },
    {
      primary: "MAX MP",
      primaryValue: 45,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 213
    },
    {
      primary: "SEN",
      primaryValue: 4,
      secondary: "HIT RATE",
      secondaryValue: 7,
      isGood: false,
      index: 214
    },
    {
      primary: "ATK PWR",
      primaryValue: 7,
      secondary: "HIT RATE",
      secondaryValue: 6,
      isGood: false,
      index: 215
    },
    {
      primary: "SEN",
      primaryValue: 5,
      secondary: "DODGE",
      secondaryValue: 6,
      isGood: false,
      index: 216
    },
    {
      primary: "DEF",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 217
    },
    {
      primary: "HIT RATE",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 218
    },
    {
      primary: "MGC RES",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 219
    },
    {
      primary: "DODGE",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 220
    },
    {
      primary: "STR",
      primaryValue: 6,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 221
    },
    {
      primary: "DEX",
      primaryValue: 6,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 222
    },
    {
      primary: "INT",
      primaryValue: 6,
      secondary: "MAX MP",
      secondaryValue: 25,
      isGood: false,
      index: 223
    },
    {
      primary: "CON",
      primaryValue: 6,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 224
    },
    {
      primary: "STR",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 225
    },
    {
      primary: "DEX",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 226
    },
    {
      primary: "INT",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 227
    },
    {
      primary: "CON",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 228
    },
    {
      primary: "SEN",
      primaryValue: 8,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 229
    },
    {
      primary: "DEF",
      primaryValue: 10,
      secondary: "MAX HP",
      secondaryValue: 6,
      isGood: false,
      index: 230
    },
    {
      primary: "STR",
      primaryValue: 6,
      secondary: "DEF",
      secondaryValue: 5,
      isGood: false,
      index: 231
    },
    {
      primary: "SEN",
      primaryValue: 6,
      secondary: "HIT RATE",
      secondaryValue: 5,
      isGood: false,
      index: 232
    },
    {
      primary: "ATK PWR",
      primaryValue: 7,
      secondary: "CRIT",
      secondaryValue: 5,
      isGood: false,
      index: 233
    },
    {
      primary: "DEF",
      primaryValue: 8,
      secondary: "MAX HP",
      secondaryValue: 50,
      isGood: false,
      index: 234
    },
    {
      primary: "HIT RATE",
      primaryValue: 8,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 235
    },
    {
      primary: "MGC RES",
      primaryValue: 8,
      secondary: "MAX MP",
      secondaryValue: 25,
      isGood: false,
      index: 236
    },
    {
      primary: "STR",
      primaryValue: 7,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 237
    },
    {
      primary: "DEX",
      primaryValue: 7,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 238
    },
    {
      primary: "INT",
      primaryValue: 7,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 239
    },
    {
      primary: "CHA",
      primaryValue: 5,
      secondary: "HP REC",
      secondaryValue: 3,
      isGood: false,
      index: 240
    },
    {
      primary: "SEN",
      primaryValue: 7,
      secondary: "MAX MP",
      secondaryValue: 20,
      isGood: false,
      index: 241
    },
    {
      primary: "ATK PWR",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 242
    },
    {
      primary: "SEN",
      primaryValue: 7,
      secondary: "MAX HP",
      secondaryValue: 25,
      isGood: false,
      index: 243
    },
    {
      primary: "DEF",
      primaryValue: 7,
      secondary: "MGC RES",
      secondaryValue: 7,
      isGood: false,
      index: 244
    },
    {
      primary: "MAX HP",
      primaryValue: 50,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 245
    },
    {
      primary: "MAX MP",
      primaryValue: 50,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 246
    },
    {
      primary: "STR",
      primaryValue: 6,
      secondary: "CRIT",
      secondaryValue: 5,
      isGood: false,
      index: 247
    },
    {
      primary: "DEX",
      primaryValue: 6,
      secondary: "CRIT",
      secondaryValue: 5,
      isGood: false,
      index: 248
    },
    {
      primary: "DEX",
      primaryValue: 6,
      secondary: "CON",
      secondaryValue: 5,
      isGood: false,
      index: 249
    },
    {
      primary: "INT",
      primaryValue: 6,
      secondary: "CON",
      secondaryValue: 5,
      isGood: false,
      index: 250
    },
    {
      primary: "CON",
      primaryValue: 6,
      secondary: "CRIT",
      secondaryValue: 5,
      isGood: false,
      index: 251
    },
    {
      primary: "STR",
      primaryValue: 9,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 252
    },
    {
      primary: "INT",
      primaryValue: 9,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 253
    },
    {
      primary: "CON",
      primaryValue: 9,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 254
    },
    {
      primary: "SEN",
      primaryValue: 6,
      secondary: "MP RED",
      secondaryValue: 3,
      isGood: false,
      index: 255
    },
    {
      primary: "ATK PWR",
      primaryValue: 10,
      secondary: "DEF",
      secondaryValue: 5,
      isGood: false,
      index: 256
    },
    {
      primary: "INT",
      primaryValue: 5,
      secondary: "MP RED",
      secondaryValue: 4,
      isGood: false,
      index: 257
    },
    {
      primary: "CHA",
      primaryValue: 5,
      secondary: "MP RED",
      secondaryValue: 4,
      isGood: false,
      index: 258
    },
    {
      primary: "DEF",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 259
    },
    {
      primary: "HIT RATE",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 260
    },
    {
      primary: "MGC RES",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 261
    },
    {
      primary: "DODGE",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 262
    },
    {
      primary: "ATK PWR",
      primaryValue: 8,
      secondary: "HIT RATE",
      secondaryValue: 8,
      isGood: false,
      index: 263
    },
    {
      primary: "ATK PWR",
      primaryValue: 12,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 264
    },
    {
      primary: "HIT RATE",
      primaryValue: 10,
      secondary: "DODGE",
      secondaryValue: 5,
      isGood: false,
      index: 265
    },
    {
      primary: "MGC RES",
      primaryValue: 10,
      secondary: "DODGE",
      secondaryValue: 5,
      isGood: false,
      index: 266
    },
    {
      primary: "STR",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 267
    },
    {
      primary: "DEX",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 268
    },
    {
      primary: "INT",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 269
    },
    {
      primary: "CON",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 270
    },
    {
      primary: "SEN",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 271
    },
    {
      primary: "CRIT",
      primaryValue: 10,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 272
    },
    {
      primary: "DEF",
      primaryValue: 8,
      secondary: "MGC RES",
      secondaryValue: 8,
      isGood: false,
      index: 273
    },
    {
      primary: "CON",
      primaryValue: 6,
      secondary: "MP RED",
      secondaryValue: 4,
      isGood: false,
      index: 274
    },
    {
      primary: "ATK PWR",
      primaryValue: 10,
      secondary: "HIT RATE",
      secondaryValue: 7,
      isGood: false,
      index: 275
    },
    {
      primary: "ATK PWR",
      primaryValue: 14,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 276
    },
    {
      primary: "DEF",
      primaryValue: 13,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 277
    },
    {
      primary: "HIT RATE",
      primaryValue: 10,
      secondary: "CRIT",
      secondaryValue: 5,
      isGood: false,
      index: 278
    },
    {
      primary: "ATK PWR",
      primaryValue: 10,
      secondary: "CRIT",
      secondaryValue: 20,
      isGood: true,
      index: 279
    },
    {
      primary: "DEF",
      primaryValue: 12,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 280
    },
    {
      primary: "HIT RATE",
      primaryValue: 12,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 281
    },
    {
      primary: "MGC RES",
      primaryValue: 12,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 282
    },
    {
      primary: "DODGE",
      primaryValue: 12,
      secondary: "MAX HP",
      secondaryValue: 20,
      isGood: false,
      index: 283
    },
    {
      primary: "DEF",
      primaryValue: 10,
      secondary: "DODGE",
      secondaryValue: 7,
      isGood: false,
      index: 284
    },
    {
      primary: "ATK PWR",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 285
    },
    {
      primary: "MAX HP",
      primaryValue: 60,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 286
    },
    {
      primary: "SEN",
      primaryValue: 8,
      secondary: "HIT RATE",
      secondaryValue: 8,
      isGood: false,
      index: 287
    },
    {
      primary: "CON",
      primaryValue: 8,
      secondary: "ATK PWR",
      secondaryValue: 10,
      isGood: false,
      index: 288
    },
    {
      primary: "CRIT",
      primaryValue: 12,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 289
    },
    {
      primary: "DEF",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 290
    },
    {
      primary: "HIT RATE",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 291
    },
    {
      primary: "MGC RES",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 292
    },
    {
      primary: "DODGE",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: true,
      index: 293
    },
    {
      primary: "STR",
      primaryValue: 8,
      secondary: "HIT RATE",
      secondaryValue: 10,
      isGood: false,
      index: 294
    },
    {
      primary: "DEX",
      primaryValue: 8,
      secondary: "HIT RATE",
      secondaryValue: 10,
      isGood: false,
      index: 295
    },
    {
      primary: "INT",
      primaryValue: 8,
      secondary: "MP RED",
      secondaryValue: 5,
      isGood: false,
      index: 296
    },
    {
      primary: "MAX HP",
      primaryValue: 70,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 297
    },
    {
      primary: "CRIT",
      primaryValue: 15,
      secondary: null,
      secondaryValue: null,
      isGood: false,
      index: 298
    },
    {
      primary: "ATK PWR",
      primaryValue: 15,
      secondary: "HIT RATE",
      secondaryValue: 15,
      isGood: true,
      index: 299
    },
    {
      primary: "ATK PWR",
      primaryValue: 15,
      secondary: "CRIT",
      secondaryValue: 15,
      isGood: true,
      index: 300
    }
];

