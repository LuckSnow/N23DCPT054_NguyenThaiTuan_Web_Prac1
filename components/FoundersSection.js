"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { getPostImage } from "@/lib/blogImages";

export default function FoundersSection({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const postsPerPage = 3;
  const totalPages = Math.min(5, Math.ceil(posts.length / postsPerPage));

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 150);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      {/* Khối Founders Corner: Tiêu đề và 2 nút điều hướng mũi tên */}
      <section className="mt-14 sm:mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Founders corner
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition cursor-pointer ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-600"
              }`}
              aria-label="Previous founders page"
            >
              <span className="text-sm">←</span>
            </button>
            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition cursor-pointer ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-600"
              }`}
              aria-label="Next founders page"
            >
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Lưới 3 cột bài viết với hiệu ứng chuyển trang mượt mà */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              image={getPostImage(post.id)}
            />
          ))}
        </div>
      </section>

      {/* Phân trang (Pagination): Điều hướng trang 1, 2,... và nút mũi tên */}
      <section className="mt-14 sm:mt-16 pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between max-w-sm mx-auto text-sm font-medium text-gray-500">
          {/* Nút lùi */}
          <button
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 transition cursor-pointer ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-black"
            }`}
            aria-label="Previous page"
          >
            ←
          </button>

          {/* Dãy số trang */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => changePage(pageNum)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-semibold transition cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#1c1917] text-white shadow-xs"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          {/* Nút tiến */}
          <button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 transition cursor-pointer ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-black"
            }`}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}
