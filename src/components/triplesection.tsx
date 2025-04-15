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
        const response = await fetch("http://localhost:3001/api/hero/all");
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-[1360px] flex justify-center mt-[30px] gap-[30px] ">
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
