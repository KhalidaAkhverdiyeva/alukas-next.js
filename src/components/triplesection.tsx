"use client";
import React, { useEffect, useState } from "react";
import HeroCard from "../components/herotriplecard";
import { Hero } from "../type/herotype";

const TripleSection: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch(
          "https://alukas-back.onrender.com/api/hero/all"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Hero[] = await response.json();
        setHeroes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  if (loading)
    return (
      <div className="w-full flex justify-center items-center min-h-[200px]">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-full flex justify-center items-center min-h-[200px] text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row justify-center mt-[20px] md:mt-[30px] gap-[20px] md:gap-[30px] px-4 md:px-0">
      {heroes.map((hero) => (
        <HeroCard
          key={hero._id}
          imageUrl={hero.imageUrl}
          title={hero.title}
          subtitle={hero.subtitle}
          buttonText="SHOP NOW"
        />
      ))}
    </div>
  );
};

export default TripleSection;
