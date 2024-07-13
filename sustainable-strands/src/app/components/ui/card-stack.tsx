"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  image: string; // Optional image URL
  content: React.ReactNode;
};
export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 30000);
  };

  return (
    <div className="relative h-64 w-56 md:h-64 md:w-56">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-black  rounded-3xl p-4 shadow-xl border border-neutral-200  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-around"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="card w-96 bg-base-100 dark:bg-black">
              <figure><Image src={card.image} alt={card.name} className="w-3/6 object-cover flex items-center rounded-md" /></figure>
              <div className="card-body">
                <h2 className="card-title dark:text-white">{card.name}</h2>
                <p className="text-neutral-400 font-normal dark:text-neutral-200 pb-2">{card.designation}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

