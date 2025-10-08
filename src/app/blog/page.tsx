'use client';

import { useState } from "react";

import Featured from "@/app/blog/Featured";
import Popular from "@/app/blog/Popular";
import Recent from "@/app/blog/Recent";


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
          <Featured />
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
            <Popular />
          </div>
          <div className={`flex flex-col gap-8 w-full ${activeSection === "popular" ? "hidden" : ""}`}>
            <Recent />
          </div>
        </section>
      </main>
      <style jsx>{`
        .active {
          background-color: #3f3f3f36;
          color: #000;
        }
      `}</style>
    </>
  );
}