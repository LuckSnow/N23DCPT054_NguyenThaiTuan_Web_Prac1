import Link from "next/link";

export default function LatestPostItem({ post, image }) {
  const fallbackImage =
    image ||
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=300&q=80";

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex items-center gap-4 py-2 transition-transform duration-200 hover:translate-x-1"
    >
      {/* Thumbnail */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-stone-200 shadow-xs">
        <img
          src={fallbackImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#944327] transition line-clamp-2 leading-snug capitalize">
          {post.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1 font-medium">
          <span>{post.date || "Aug 10"}</span>
          <span className="mx-1.5">•</span>
          <span>{post.readTime || "10 min read"}</span>
        </p>
      </div>
    </Link>
  );
}
