import Link from "next/link";
import Badge from "./Badge";

export default function BlogCard({ post, image }) {
  const fallbackImage =
    image ||
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="group flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
      {/* Top Section: Image & Content */}
      <div>
        {/* Card Thumbnail */}
        <Link href={`/blog/${post.id}`} className="block overflow-hidden rounded-2xl mb-4 shadow-xs">
          <img
            src={fallbackImage}
            alt={post.title}
            className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Category Badge */}
        <div className="mb-2.5">
          <Badge label={post.category || "Category"} />
        </div>

        {/* Title */}
        <Link href={`/blog/${post.id}`}>
          <h3 className="font-bold text-base md:text-lg text-gray-900 group-hover:text-[#944327] transition line-clamp-1 capitalize">
            {post.title}
          </h3>
        </Link>

        {/* Summary Description */}
        <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
          {post.body}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="mt-4 pt-2 flex items-center justify-between text-xs text-gray-400 font-medium">
        <span>
          {post.date || "Aug 10"} • {post.readTime || "10 min read"}
        </span>
        <Link
          href={`/blog/${post.id}`}
          className="text-[#944327] hover:underline font-semibold flex items-center gap-1"
        >
          <span>Xem chi tiết</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
