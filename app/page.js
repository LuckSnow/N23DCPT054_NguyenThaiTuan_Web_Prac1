import Header from "@/components/Header";
import FeaturedCard from "@/components/FeaturedCard";
import LatestPostItem from "@/components/LatestPostItem";
import BlogCard from "@/components/BlogCard";

// Server Component fetch dữ liệu từ JSONPlaceholder theo yêu cầu bài học
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Không thể tải dữ liệu bài viết");
    }
    return res.json();
  } catch (error) {
    console.error("Lỗi khi fetch posts:", error);
    return [];
  }
}

export default async function HomePage() {
  const allPosts = await getPosts();

  // Hình ảnh chất lượng cao tương đồng giao diện mẫu
  const featuredImage =
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80";

  const latestImages = [
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=400&q=80",
  ];

  const foundersImages = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  ];

  // Phân bổ bài viết cho các khu vực
  const featuredPost = allPosts[0] || {
    id: 1,
    title: "Enhancing Team Collaboration with SaaS Products: A Game-Changer for Modern Workflows",
    body: "Explore how modern digital tools empower cross-functional teams to build faster, collaborate effectively, and streamline complex everyday workflows.",
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
  };

  const latestPosts = allPosts.slice(1, 5).map((post, idx) => ({
    ...post,
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
    image: latestImages[idx % latestImages.length],
  }));

  const foundersPosts = allPosts.slice(5, 8).map((post, idx) => ({
    ...post,
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
    image: foundersImages[idx % foundersImages.length],
  }));

  return (
    <main className="min-h-screen bg-[#f4ece4] py-4 px-2 sm:py-8 sm:px-6 lg:py-10 lg:px-8">
      {/* Khung chứa trung tâm bo góc lớn theo mẫu giao diện */}
      <div className="max-w-6xl mx-auto bg-white rounded-[28px] sm:rounded-[36px] shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* Thanh Header navigation */}
        <Header />

        {/* Khối chính 1: Featured Post & Latest Posts */}
        <section className="mt-8 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bài viết nổi bật (Featured Post) chiếm ~60% */}
            <div className="lg:col-span-7">
              <FeaturedCard
                post={{
                  ...featuredPost,
                  category: "Category",
                  date: "Aug 10",
                  readTime: "10 min read",
                }}
                image={featuredImage}
              />
            </div>

            {/* Danh sách bài viết mới (Latest post) chiếm ~40% */}
            <div className="lg:col-span-5 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Latest post
              </h2>
              <div className="divide-y divide-gray-100">
                {latestPosts.map((post) => (
                  <LatestPostItem key={post.id} post={post} image={post.image} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Khối chính 2: Founders Corner (Lưới 3 cột) */}
        <section className="mt-14 sm:mt-16">
          {/* Header khu vực Founders corner kèm 2 nút điều hướng tròn */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Founders corner
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-500 transition cursor-pointer"
                aria-label="Previous"
              >
                <span className="text-sm">←</span>
              </button>
              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-500 transition cursor-pointer"
                aria-label="Next"
              >
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Lưới 3 cột chuẩn Responsive (1 cột mobile, 3 cột desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {foundersPosts.map((post) => (
              <BlogCard key={post.id} post={post} image={post.image} />
            ))}
          </div>
        </section>

        {/* Phân trang (Pagination) theo mẫu giao diện */}
        <section className="mt-14 sm:mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between max-w-sm mx-auto text-sm font-medium text-gray-500">
            {/* Nút lùi */}
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-black transition cursor-pointer"
              aria-label="Previous page"
            >
              ←
            </button>

            {/* Dãy số trang */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                type="button"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1c1917] text-white flex items-center justify-center text-xs font-semibold cursor-pointer"
              >
                1
              </button>
              <button
                type="button"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs font-semibold transition cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs font-semibold transition cursor-pointer"
              >
                3
              </button>
              <button
                type="button"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs font-semibold transition cursor-pointer"
              >
                4
              </button>
              <button
                type="button"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs font-semibold transition cursor-pointer"
              >
                5
              </button>
            </div>

            {/* Nút tiến */}
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-black transition cursor-pointer"
              aria-label="Next page"
            >
              →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
