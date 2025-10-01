import Link from "next/link";

export default function HomepageHero() {
  return (
    <>
        <div className="hero-content flex flex-col lg:flex-row justify-evenly text-black w-full h-full">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl md:text-[8rem] text-wrap">
                    Welcome to my Blog!
                </h1>
                <p className="text-md md:text-xl">
                    ● a place where I jot stuff down.
                </p>
            </div>
            <div className="bg-[#ffd43b] neo-brutalist w-full md:min-w-[500px] h-64 md:h-[500px]">
                3D spline here
            </div>
        </div>
    </>
  );
}
