"use client";

import { useState } from "react";
import { Header, CardCharacter } from "@/components";
import { CardType, cardsMap, CardConceptType } from "@/constants/cards";

export default function CardPage() {
  const cardTypes = [
    CardType.Value0, // Scout
    CardType.Value1, // Knight
    CardType.Value2, // Healer
    CardType.Value3, // Berserker
    CardType.Value4, // Cleric Ward
    CardType.Value5, // Wizard
    CardType.Value6, // Tactician
    CardType.Value7, // Paladin
    CardType.Value8, // Cursed Idol
    CardType.Value9, // Sacred Crystal
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Relic of Lies - Character Cards
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
          {cardTypes.map((cardType) => (
            <CardCharacter
              key={cardType}
              cardConcept={cardsMap[CardConceptType.RelicOfLies]}
              cardType={cardType}
              isFlip={true}
              className="hover:scale-105 transition-transform duration-200"
              height={384}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
