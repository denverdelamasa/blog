import Link from "next/link";
import Spline3D from "@/components/Spline3D";

export default function HomepageHero() {
  return (
    <>
        <div className="hero-content flex flex-col lg:flex-row justify-evenly text-black w-full h-full m-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl md:text-7xl break-normal">
                    Welcome to my Blog!
                </h1>
                <p className="text-sm md:text-xl text-gray-600">
                    ● a place where I jot stuff down.
                </p>
            </div>
            <div className="bg-white neo-brutalist w-full flex flex-col">
                <div className="w-full h-16 bg-[#e9ecef] border-black border-b-4 flex">
                    <span className="flex w-full justify-end mx-4 my-auto h-auto">
                        <Link href="https://app.spline.design/file/231390a6-afb6-47eb-b015-b4914e1bdc0f" target="_blank">
                            <div className="neo-brutalist w-fit bg-green-400">
                                <h2 className="text-xs m-2">Open in Spline</h2>
                            </div>
                        </Link>
                    </span>
                </div>
                <div className="min-h-[250px] max-h-[250px] md:max-h-[600px] ">
                    <Spline3D/>
                </div>
            </div>
        </div>
    </>
  );
}
