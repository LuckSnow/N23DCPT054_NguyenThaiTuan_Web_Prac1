import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Badge from "@/components/Badge";

// Fetch chi tiết bài viết từ JSONPlaceholder theo id
async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Lỗi khi fetch chi tiết bài viết:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    return { title: "Bài viết không tìm thấy" };
  }
  return {
    title: `${post.title} - MyBlog`,
    description: post.body.slice(0, 150),
  };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  // Danh sách hình ảnh minh họa chất lượng cao
  const sampleImages = [
    "/images/hero.jpg",
    "/images/founder-1.jpg",
    "/images/founder-2.jpg",
    "/images/founder-3.jpg",
    "/images/latest-2.jpg",
  ];


  const heroImage = sampleImages[(Number(id) - 1) % sampleImages.length];

  return (
    <main className="min-h-screen bg-[#f4ece4] py-4 px-2 sm:py-8 sm:px-6 lg:py-10 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-[28px] sm:rounded-[36px] shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* Header navigation */}
        <Header />

        {/* Nút quay lại danh sách bài viết (Back to Blog) theo yêu cầu PDF */}
        <div className="mt-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#944327] transition px-3 py-1.5 rounded-full hover:bg-stone-100"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Thẻ danh mục */}
        <div className="mb-4">
          <Badge label="Category" />
        </div>

        {/* Tiêu đề bài viết */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight capitalize mb-4">
          {post.title}
        </h1>

        {/* Tác giả & Ngày đăng */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
          <div className="w-9 h-9 rounded-full bg-[#944327] text-white flex items-center justify-center font-bold text-xs">
            U{post.userId}
          </div>
          <div>
            <p className="font-semibold text-gray-900">User #{post.userId}</p>
            <p className="text-xs text-gray-400">Published on Aug 10, 2026 • 10 min read</p>
          </div>
        </div>

        {/* Ảnh đại diện bài viết */}
        <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 shadow-xs">
          <img
            src={heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nội dung chi tiết bài viết (Full body content) */}
        <article className="prose prose-stone max-w-none text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left">
            {post.body}
          </p>
          <p>
            Bài viết này được phân tích chi tiết nhằm cung cấp góc nhìn toàn diện về sản phẩm, thiết kế giao diện người dùng và tối ưu hóa trải nghiệm tương tác trong các hệ thống hiện đại.
          </p>
          <blockquote className="p-4 my-4 border-l-4 border-[#944327] bg-[#f9f5f0] rounded-r-xl italic text-gray-800 font-medium">
            "Sự đơn giản trong thiết kế và khả năng đáp ứng nhanh nhạy của ứng dụng là chìa khóa để giữ chân người dùng trong kỷ nguyên số."
          </blockquote>
          <p>
            Với cấu trúc Next.js App Router kết hợp Tailwind CSS, việc xây dựng các khối giao diện tái sử dụng và xử lý dữ liệu động trở nên vô cùng linh hoạt và hiệu quả.
          </p>
        </article>

        {/* Chân trang bài viết với nút Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#944327] hover:bg-[#7e3820] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-xs"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>

          <span className="text-xs text-gray-400">Mã bài viết: #{post.id}</span>
        </div>
      </div>
    </main>
  );
}
