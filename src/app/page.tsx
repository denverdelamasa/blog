import HomepageHero from "./HomepageHero";
import RecentBlogs from "@/components/RecentBlogs";
import About from "./About";

export default function Home() {
  return (
    <>
      <main className="min-h-[88vh] flex flex-col gap-4 my-4">
        <section className="hero min-h-[70vh] md:min-h-[88vh] bg-white">
          <HomepageHero/>
        </section>
        <section className="min-h-[100vh] bg-[#1971c2]">

        </section>
        <section className="h-auto bg-white">
          <RecentBlogs/>
        </section>
        <section id="about" className="h-auto bg-[#ffd43b] rounded-[8px]">
          <About/>
        </section>
      </main>
    </>
  );
}
