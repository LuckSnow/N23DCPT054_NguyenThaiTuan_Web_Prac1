import Header from "@/components/Header";
import FeaturedCard from "@/components/FeaturedCard";
import LatestPostItem from "@/components/LatestPostItem";
import FoundersSection from "@/components/FoundersSection";
import { getPostImage } from "@/lib/blogImages";

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

  // Phân bổ bài viết cho các khu vực
  const featuredPost = allPosts[0] || {
    id: 1,
    title: "Enhancing Team Collaboration with SaaS Products: A Game-Changer for Modern Workflows",
    body: "Explore how modern digital tools empower cross-functional teams to build faster, collaborate effectively, and streamline complex everyday workflows.",
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
  };

  const latestPosts = allPosts.slice(1, 5).map((post) => ({
    ...post,
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
    image: getPostImage(post.id),
  }));

  // Lấy các bài viết cho Founders corner (bao gồm cả trang 1, 2,...)
  const foundersPosts = allPosts.slice(5, 20).map((post) => ({
    ...post,
    category: "Category",
    date: "Aug 10",
    readTime: "10 min read",
    image: getPostImage(post.id),
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
                image={getPostImage(featuredPost.id)}
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

        {/* Khối chính 2: Founders Corner kèm phân trang tương tác (trang 1, trang 2,...) */}
        <FoundersSection posts={foundersPosts} />
      </div>
    </main>
  );
}
