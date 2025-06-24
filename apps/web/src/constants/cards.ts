export enum CardConceptType {
  RelicOfLies = "RelicOfLies",
}

export enum CardType {
  Value0 = "Value0",
  Value1 = "Value1",
//   Value2 = "Value2",
//   Value3 = "Value3",
//   Value4 = "Value4",
//   Value5 = "Value5",
//   Value6 = "Value6",
//   Value7 = "Value7",
//   Value8 = "Value8",
//   Value9 = "Value9",
}

export interface CardConceptValue {
  name: string;
  description: string;
  cards: Record<CardType, CardValue>
}

export interface CardValue {
  name: string;
  description: string;
  image: string;
}


export const cardsMap: Record<CardConceptType, CardConceptValue> = {
  [CardConceptType.RelicOfLies]: {
    name: "Dark Dungeon",
    description: "A dark dungeon with a lot of monsters",
    cards: {
      [CardType.Value0]: {
        name: "Relic of Lies",
        description: "A dark dungeon with a lot of monsters",
        image: "/cards/relic-of-lies/0.png",
      },
      [CardType.Value1]: {
        name: "Dark Dungeon",
        description: "A dark dungeon with a lot of monsters",
        image: "/cards/dark-dungeon/1.png",
      },
      
    },
  },
};