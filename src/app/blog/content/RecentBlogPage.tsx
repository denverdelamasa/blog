'use client';

import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { useState } from "react";

export default function RecentBlogs({ posts }: { posts: PostMeta[] }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerLoad = 3;

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Slice the filtered posts for display
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;
  const isSearching = searchQuery.length > 0;

  const loadMore = () => {
    setVisibleCount(prev => prev + postsPerLoad);
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  return (
    <div className="flex flex-col my-12 mx-4 align-middle">
      <div className="text-end mb-4">
        <div className="flex flex-row align-middle gap-4">
          <div className="my-auto w-[8vh] h-[8vh] neo-brutalist bg-white flex items-center justify-center">
            <i className="bi bi-newspaper text-black text-[5vh]"></i>
          </div>
          <h1 className="text-black text-6xl my-auto">
            All posts
          </h1>
        </div>
      </div>

      <div className="mt-4 mb-12 max-w-2xl justify-start w-full">
        <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="text"
            id="blog-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 bg-white neo-brutalist focus:ring-2 focus:ring-orange-300 focus:outline-none"
            placeholder="Search posts by title or excerpt..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(postsPerLoad); // Reset to initial count on new search
            }}
          />
        </div>
      </div>
      {/* --- End of Search Bar --- */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => (
          <div
            key={post.slug}
            className="neo-brutalist flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex h-16 bg-gray-200 mb-2 px-4 border-b-4 border-black">
              </div>
              <div className="p-4">
                <h3 className="text-black text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                {post.excerpt && (
                  <p className="mb-4 text-gray-900 line-clamp-3">{post.excerpt}</p>
                )}
              </div>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="m-4 neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit"
            >
              Read <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ))}
      </div>

      {/* Show "No results" message if searching and no posts are found */}
      {isSearching && filteredPosts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No posts found matching your search.</p>
        </div>
      )}

      <div className="flex my-4 justify-end">
        {/* Show More/Less buttons - hidden when searching */}
        {hasMorePosts && !isSearching && (
          <button
            onClick={loadMore}
            className="neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit"
            aria-label="Load more posts"
          >
            <i className="bi bi-chevron-down mr-2"></i>
            Show More
          </button>
        )}
        {visibleCount > 3 && !isSearching && (
          <button
            onClick={showLess}
            className="neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit ml-4"
            aria-label="Show fewer posts"
          >
            <i className="bi bi-chevron-up mr-2"></i>
            Collapse
          </button>
        )}
      </div>
    </div>
  );
}