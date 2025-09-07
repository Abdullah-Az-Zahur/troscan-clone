import ButtonSecondary from "@/ui/ButtonSecondary";
import React from "react";
import NewsCard from "./NewsCard/NewsCard";


const News = () => {
  const news = [
    {
      imageUrl:
        "https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg",
      date: "February 5, 2022",
      title: "The Art of Minimalist Interiors",
      subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg",
      date: "February 22, 2022",
      title: "Timeless Furniture Pieces Every Home Needs",
      subtitle: "Building a Home That Never Goes Out of Style",
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
      date: "January 21, 2023",
      title: "Psychology in Interior Design",
      subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    },
  ];

  return (
    <div className="p-2 md:p-5 lg:p-10 mt-20">
      {/* Header */}
      <div className="md:flex md:my-10 items-end justify-between">
        <div className="flex-1">
          <h3>• About us</h3>
          <p className="text-4xl md:text-4xl lg:text-6xl my-5 md:w-1/2">
            Stay Inspired with Interior Trends
          </p>
        </div>
        <div className="mt-4 md:mt-0 mb-5 md:mb-0">
          <ButtonSecondary>View All News</ButtonSecondary>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            {...item}
            className={index === 2 ? "md:hidden lg:block" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
