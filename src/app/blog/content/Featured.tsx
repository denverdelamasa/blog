export default function FeaturedBlogPage() {
    return(
        <>
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-[8px] w-full h-auto p-4">
            <h1 className="text-6xl md:text-8xl break-normal">Featured</h1>
            <div className="flex flex-col md:flex-row gap-4 w-full h-full">
              <div className="neo-brutalist w-full h-62 md:h-128"></div>
                <div className="w-full h-full flex flex-col gap-4">
                  <div className="neo-brutalist w-full h-62"></div>
                  <div className="neo-brutalist w-full h-62"></div>
                </div>
            </div>
          </div>
        </>
    );
}