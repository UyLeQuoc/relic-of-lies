"use client";

import { useState } from "react";
import { CardType, CardConceptValue } from "@/constants/cards";
import { cn } from "@/lib/utils";

interface CardCharacterProps {
  cardConcept: CardConceptValue;
  cardType: CardType;
  className?: string;
  isFlip?: boolean;
  height?: number | string;
}

export function CardCharacter({
  cardConcept,
  cardType,
  className,
  isFlip = false,
  height = 384,
}: CardCharacterProps) {
  const card = cardConcept.cards[cardType];
  const h =
    typeof height === "number" ? height : parseInt(height as string, 10);
  const w = Math.round((h * 2) / 3);

  const [flipped, setFlipped] = useState(false);
  const canFlip = Boolean(isFlip);
  const handleClick = () => {
    if (canFlip) setFlipped((f) => !f);
  };

  return (
    <div
      className={cn(
        "relative cursor-pointer transition-transform duration-500 transform-style-preserve-3d",
        canFlip && flipped && "rotate-y-180",
        className
      )}
      style={{ width: w, height: h }}
      onClick={handleClick}
    >
      {/* Card Front */}
      <div className="absolute w-full h-full backface-hidden">
        {/* Character Image dưới cùng */}
        <img
          src={card.image}
          alt={card.name}
          className="absolute inset-0 w-full h-full object-contain z-0"
        />

        {/* Frame nằm trên character */}
        <img
          src={cardConcept.frame}
          alt="Card Frame"
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        />

        {/* Value, Name, Description dùng style từ constant và fontSize động */}
        <span
          className={cn(cardConcept.valueStyle, "absolute z-20")}
          style={{ fontSize: `${h * (cardConcept.valueFontSize ?? 0.1)}px` }}
        >
          {card.value}
        </span>
        <h3
          className={cn(cardConcept.nameStyle, "absolute z-20")}
          style={{ fontSize: `${h * (cardConcept.nameFontSize ?? 0.045)}px` }}
        >
          {card.name}
        </h3>
        {card.description && (
          <p
            className={cn(
              cardConcept.descriptionStyle,
              card.style,
              "absolute z-20"
            )}
            style={{
              fontSize: `${h * (cardConcept.descriptionFontSize ?? 0.04)}px`,
            }}
          >
            {card.description}
          </p>
        )}
      </div>

      {/* Card Back */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180">
        <img
          src={cardConcept.cardBack}
          alt="Card Back"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
