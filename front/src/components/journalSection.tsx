import React from "react";
import JournalCard from "./journalCard";

const JournalSection = () => {
  return (
    <div className="w-[1360px] flex flex-col justify-center items-center py-[50px] border-b-solid border-b-[1px] border-b-gray-200">
      <h2 className="text-[40px] text-[#222]">Read Journal</h2>
      <p className="text-[#555] text-[20px] py-[5px]">
        Latest trends and inspirations in fashion design.
      </p>
      <div className="flex gap-[30px]">
        <JournalCard
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533"
          title="Selective Styles Help Your Look"
        />
        <JournalCard
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=533"
          title="How to Style Quiff"
        />
        <JournalCard
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533"
          title="Christmas Gift Ideas"
        />
      </div>
    </div>
  );
};

export default JournalSection;
