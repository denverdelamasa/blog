export default function FeaturedBlogPage() {
    return(
        <>
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-[8px] w-full min-h-[60vh] p-4">
            <h1 className="text-5xl md:text-7xl break-normal">Featured</h1>
            <div className="flex flex-row gap-4 w-full h-full">
              <div className="neo-brutalist w-full h-84"></div>
              <div className="w-full h-full flex flex-col gap-4">
                <div className="neo-brutalist w-full h-40"></div>
                <div className="neo-brutalist w-full h-40"></div>
              </div>
            </div>
          </div>
        </>
    );
}