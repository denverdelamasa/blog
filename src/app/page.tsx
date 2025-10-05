import HomepageHero from "./HomepageHero";
import PopularBlogs from "@/components/blog-components/PopularBlogs"
import RecentBlogs from "@/components/blog-components/RecentBlogs";
import About from "./About";

export default function Home() {
  return (
    <>
      <main className="hero flex flex-col gap-8 my-8">
        <section className="hero-content flex flex-row gap-4 items-stretch">
          <aside className="neo-brutalist aside-pattern hidden md:block w-32"></aside>
          <div className="flex grainy-bg border-2 border-gray-300 rounded-[8px]">
            <HomepageHero/>
          </div>
        </section>
        <section className="hero-content flex flex-col gap-8">
          <div className="flex flex-row h-auto gap-4">
            <div className="bg-purple-700 rounded-[8px] w-full md:w-9/10">
              <PopularBlogs/>
            </div>
            <aside className="neo-brutalist aside-pattern hidden md:block m-2 w-1/10"></aside>
          </div>
          <div className="flex flex-row h-auto gap-4">
            <aside className="neo-brutalist aside-pattern hidden md:block w-1/10"></aside>
            <div className="grainy-bg bg-white border-2 border-gray-300 rounded-[8px] w-full md:w-9/10">
              <RecentBlogs/>
            </div>
          </div>
          <div id="about" className="flex flex-row h-auto gap-4 w-full">
            <div className="flex bg-orange-400 rounded-[8px] justify-between w-full md:w-9/10">
              <About/>
            </div>
            <aside className="neo-brutalist aside-pattern hidden md:block w-1/10"></aside>
          </div>
        </section>
      </main>
    </>
  );
}
