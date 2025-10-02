import Link from "next/link";
import Spline3D from "@/components/Spline3D";

export default function HomepageHero() {
  return (
    <>
        <div className="hero-content flex flex-col lg:flex-row justify-evenly text-black w-full h-full m-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-6xl md:text-[7rem] break-all md:break-normal">
                    Welcome to my Blog!
                </h1>
                <p className="text-md md:text-xl">
                    ● a place where I jot stuff down.
                </p>
            </div>
            <div className="bg-white neo-brutalist w-full min-h-[300px] max-h-[400px] flex flex-col">
                <div className="w-full h-12 bg-[#e9ecef] border-black border-b-4 flex">
                    <span className="w-full text-start mx-4 my-auto h-auto">
                        <h2 className="text-2xl"></h2>
                    </span>
                </div>
                <Spline3D/>
            </div>
        </div>
    </>
  );
}
