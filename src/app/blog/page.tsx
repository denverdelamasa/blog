'use client';

import { useState } from "react";

export default function Blog() {
  const [activeSection, setActiveSection] = useState("popular");

  const handlePopularBlogsClick = () => {
    setActiveSection("popular");
  };

  const handleRecentBlogsClick = () => {
    setActiveSection("recent");
  };

  return (
    <>
      <main className="hero flex flex-col gap-8 my-8 text-black">
        <section className="hero-content gap-4 items-start w-full">
          <div className="flex border-2 border-gray-300 rounded-[8px] w-full min-h-[60vh] p-4">
          <h1 className="text-5xl md:text-7xl break-normal">Featured Blogs</h1>
          
          </div>
        </section>

        <section className="hero-content flex flex-col gap-8 w-full justify-left items-start ">
          <div className="flex flex-row gap-4 align-middle">
            <button
              className={`neo-brutalist hover:bg-purple-800 bg-purple-700 px-4 py-2 text-white w-fit ${
                activeSection === "popular" ? "active" : ""
              }`}
              onClick={handlePopularBlogsClick}
            >
              <i className="bi bi-fire mr-2"></i>
              Popular Blogs
            </button>
            <button
              className={`neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit ${
                activeSection === "recent" ? "active" : ""
              }`}
              onClick={handleRecentBlogsClick}
            >
              <i className="bi bi-clock-history mr-2"></i>
              Recent Blogs
            </button>
          </div>
        </section>

        <section className="hero-content flex flex-col gap-8 w-full">
          <div className={`flex flex-col gap-8 w-full ${activeSection === "recent" ? "hidden" : ""}`}>
            <div className="text-white bg-purple-700 rounded-[8px] w-full min-h-[50vh]">
            this is popular blog
            </div>
          </div>
          <div className={`flex flex-col gap-8 w-full ${activeSection === "popular" ? "hidden" : ""}`}>
            <div className="grainy-bg bg-white border-2 border-gray-300 rounded-[8px] w-full min-h-[50vh]">
            this is recent blog
            </div>
          </div>
        </section>
      </main>
    </>
  );
}