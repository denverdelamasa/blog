import HomepageHero from "./HomepageHero";
import About from "./About";
export default function Home() {
  return (
    <>
      <main className="min-h-[88vh] flex flex-col gap-4 my-4">
        <section className="hero min-h-[88vh] bg-white">
          <HomepageHero/>
        </section>
        <section className="min-h-[100vh] bg-[#1971c2] neo-brutalist">

        </section>
        <section className="min-h-[100vh] bg-white neo-brutalist">

        </section>
        <section id="about" className="min-h-[100vh] bg-[#ffd43b] neo-brutalist">
          <About/>
        </section>
      </main>
    </>
  );
}
