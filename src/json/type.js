module.exports = {
  "normal": {
    "ch_name": "一般",
    "attack": {
      "effective": [],
      "weakness": ["steel", "rock"],
      "no_effect": ["ghost"]
    },
    "defend": {
      "effective": [],
      "weakness": ["fighting"],
      "no_effect": ["ghost"]
    },
    "icon": require("../images/Pokemon_Normal_Type_Icon.svg")
  },
  "fire": {
    "ch_name": "火",
    "attack": {
      "effective": ["bug", "steel", "grass", "ice"],
      "weakness": ["rock", "fire", "water", "dragon"],
      "no_effect": []
    },
    "defend": {
      "effective": ["bug", "steel", "fire", "grass", "ice", "fairy"],
      "weakness": ["ground", "rock", "water"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Fire_Type_Icon.svg")
  },
  "water": {
    "ch_name": "水",
    "attack": {
      "effective": ["ground", "rock", "fire"],
      "weakness": ["water", "grass", "dragon"],
      "no_effect": []
    },
    "defend": {
      "effective": ["steel", "fire", "water", "ice"],
      "weakness": ["grass", "electric"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Water_Type_Icon.svg")
  },
  "grass": {
    "ch_name": "草",
    "attack": {
      "effective": ["ground", "rock", "water"],
      "weakness": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
      "no_effect": []
    },
    "defend": {
      "effective": ["ground", "water", "grass", "electric"],
      "weakness": ["flying", "poison", "bug", "fire", "ice"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Grass_Type_Icon.svg")
  },
  "ice": {
    "ch_name": "冰",
    "attack": {
      "effective": ["flying", "ground", "grass", "dragon"],
      "weakness": ["steel", "fire", "water", "ice"],
      "no_effect": []
    },
    "defend": {
      "effective": ["ice"],
      "weakness": ["fighting", "rock", "steel", "fire"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Ice_Type_Icon.svg")
  },
  "electric": {
    "ch_name": "電",
    "attack": {
      "effective": ["flying", "water"],
      "weakness": ["grass", "electric", "dragon"],
      "no_effect": ["ground"]
    },
    "defend": {
      "effective": ["flying", "steel", "electric"],
      "weakness": ["ground"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Electric_Type_Icon.svg")
  },
  "fighting": {
    "ch_name": "格鬥",
    "attack": {
      "effective": ["normal", "rock", "steel", "ice", "dark"],
      "weakness": ["flying", "poison", "bug", "psychic", "fairy"],
      "no_effect": ["ghost"]
    },
    "defend": {
      "effective": ["rock", "bug", "dark"],
      "weakness": ["flying", "psychic", "fairy"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Fighting_Type_Icon.svg")
  },
  "poison": {
    "ch_name": "毒",
    "attack": {
      "effective": ["grass", "fairy"],
      "weakness": ["poison", "ground", "rock", "ghost"],
      "no_effect": ["steel"]
    },
    "defend": {
      "effective": ["fighting", "poison", "bug", "grass", "fairy"],
      "weakness": ["ground", "psychic"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Poison_Type_Icon.svg")
  },
  "ground": {
    "ch_name": "地面",
    "attack": {
      "effective": ["poison", "rock", "steel", "fire", "electric"],
      "weakness": ["bug", "grass"],
      "no_effect": ["flying"]
    },
    "defend": {
      "effective": ["poison", "rock"],
      "weakness": ["water", "grass", "ice"],
      "no_effect": ["electric"]
    },
    "icon": require("../images/Pokemon_Ground_Type_Icon.svg")
  },
  "flying": {
    "ch_name": "飛行",
    "attack": {
      "effective": ["fighting", "bug", "grass"],
      "weakness": ["rock", "steel", "electric"],
      "no_effect": []
    },
    "defend": {
      "effective": ["fighting", "bug", "grass"],
      "weakness": ["rock", "electric", "ice"],
      "no_effect": ["ground"]
    },
    "icon": require("../images/Pokemon_Flying_Type_Icon.svg")
  },
  "psychic": {
    "ch_name": "超能力",
    "attack": {
      "effective": ["fighting", "poison"],
      "weakness": ["steel", "psychic"],
      "no_effect": ["dark"]
    },
    "defend": {
      "effective": ["fighting", "psychic"],
      "weakness": ["bug", "ghost", "dark"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Psychic_Type_Icon.svg")
  },
  "bug": {
    "ch_name": "蟲",
    "attack": {
      "effective": ["grass", "psychic", "dark"],
      "weakness": ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
      "no_effect": []
    },
    "defend": {
      "effective": ["fighting", "ground", "grass"],
      "weakness": ["flying", "rock", "fire"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Bug_Type_Icon.svg")
  },
  "rock": {
    "ch_name": "岩石",
    "attack": {
      "effective": ["flying", "bug", "grass", "ice"],
      "weakness": ["fighting", "ground", "steel"],
      "no_effect": []
    },
    "defend": {
      "effective": ["normal", "flying", "poison", "fire"],
      "weakness": ["fighting", "ground", "steel", "water", "grass"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Rock_Type_Icon.svg")
  },
  "ghost": {
    "ch_name": "幽靈",
    "attack": {
      "effective": ["ghost", "psychic"],
      "weakness": ["dark"],
      "no_effect": ["normal"]
    },
    "defend": {
      "effective": ["poison", "bug"],
      "weakness": ["ghost", "dark"],
      "no_effect": ["normal", "fighting"]
    },
    "icon": require("../images/Pokemon_Ghost_Type_Icon.svg")
  },
  "dragon": {
    "ch_name": "龍",
    "attack": {
      "effective": ["dragon"],
      "weakness": ["steel"],
      "no_effect": ["fairy"]
    },
    "defend": {
      "effective": ["fire", "water", "grass", "electric"],
      "weakness": ["ice", "dragon", "fairy"],
      "no_effect": []
    },
    "icon": require("../images/Pokemon_Dragon_Type_Icon.svg")
  },
  "dark": {
    "ch_name": "惡",
    "attack": {
      "effective": ["ghost", "psychic"],
      "weakness": ["fighting", "dark", "fairy"],
      "no_effect": []
    },
    "defend": {
      "effective": ["ghost", "dark"],
      "weakness": ["fighting", "bug", "fairy"],
      "no_effect": ["psychic"]
    },
    "icon": require("../images/Pokemon_Dark_Type_Icon.svg")
  },
  "steel": {
    "ch_name": "鋼",
    "attack": {
      "effective": ["rock", "ice", "fairy"],
      "weakness": ["steel", "fire", "water", "electric"],
      "no_effect": []
    },
    "defend": {
      "effective": ["normal", "flying", "rock", "bug", "steel", "grass", "psychic", "ice", "dragon", "fairy"],
      "weakness": ["fighting", "ground", "fire"],
      "no_effect": ["poison"]
    },
    "icon": require("../images/Pokemon_Steel_Type_Icon.svg")
  },
  "fairy": {
    "ch_name": "妖精",
    "attack": {
      "effective": ["fighting", "dragon", "dark"],
      "weakness": ["poison", "steel", "fire"],
      "no_effect": []
    },
    "defend": {
      "effective": ["fighting", "bug", "dark"],
      "weakness": ["poison", "steel"],
      "no_effect": ["dragon"]
    },
    "icon": require("../images/Pokemon_Fairy_Type_Icon.svg")
  }
}