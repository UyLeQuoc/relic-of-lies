export enum CardConceptType {
  RelicOfLies = "RelicOfLies",
}

export enum CardType {
  Value0 = "Value0",
  Value1 = "Value1",
  Value2 = "Value2",
  Value3 = "Value3",
  Value4 = "Value4",
  Value5 = "Value5",
  Value6 = "Value6",
  Value7 = "Value7",
  Value8 = "Value8",
  Value9 = "Value9",
}

export interface CardConceptValue {
  name: string;
  description: string;
  cards: Record<CardType, CardValue>;
}

export interface CardValue {
  name: string;
  description: string;
  image: string;
}

export const cardsMap: Record<CardConceptType, CardConceptValue> = {
  [CardConceptType.RelicOfLies]: {
    name: "Relic of Lies",
    description: "A dark dungeon with a lot of things",
    cards: {
      [CardType.Value0]: {
        name: "Scout",
        description: "",
        image: "/images/cards/relic-of-lies/characters/0-scout.png",
      },
      [CardType.Value1]: {
        name: "Knight",
        description: "",
        image: "/images/cards/relic-of-lies/characters/1-knight.png",
      },
      [CardType.Value2]: {
        name: "Healer",
        description: "",
        image: "/images/cards/relic-of-lies/characters/2-healer.png",
      },
      [CardType.Value3]: {
        name: "Berserker",
        description: "",
        image: "/images/cards/relic-of-lies/characters/3-berserker.png",
      },
      [CardType.Value4]: {
        name: "Cleric Ward",
        description: "",
        image: "/images/cards/relic-of-lies/characters/4-cleric-ward.png",
      },
      [CardType.Value5]: {
        name: "Wizard",
        description: "",
        image: "/images/cards/relic-of-lies/characters/5-wizard.png",
      },
      [CardType.Value6]: {
        name: "Tactician",
        description: "",
        image: "/images/cards/relic-of-lies/characters/6-tactician.png",
      },
      [CardType.Value7]: {
        name: "Paladin",
        description: "",
        image: "/images/cards/relic-of-lies/characters/7-paladin.png",
      },
      [CardType.Value8]: {
        name: "Cursed Idol",
        description: "",
        image: "/images/cards/relic-of-lies/characters/8-cursed-idol.png",
      },
      [CardType.Value9]: {
        name: "Sacred Crystal",
        description: "",
        image: "/images/cards/relic-of-lies/characters/9-sacred-crystal.png",
      },
    },
  },
};
