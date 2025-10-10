import firstFeatured from "";
import secondFeatured from "";
import thirdFeatured from "";

export default function Featured() {
    return(
        <>
          <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-[8px] w-full min-h-[60vh] p-4">
            <h1 className="text-5xl md:text-7xl break-normal">Featured Blogs</h1>
            <div className="flex flex-row gap-2 w-full h-full">
              <div className="neo-brutalist w-full h-82"></div>
              <div className="w-full h-full flex flex-col gap-2">
                <div className="neo-brutalist w-full h-40"></div>
                <div className="neo-brutalist w-full h-40"></div>
              </div>
            </div>
          </div>
        </>
    );
}