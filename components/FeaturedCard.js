import Link from "next/link";
import Badge from "./Badge";

export default function FeaturedCard({ post, image }) {
  const fallbackImage =
    image ||
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="relative group rounded-3xl overflow-hidden min-h-[380px] md:min-h-[440px] flex flex-col justify-end p-6 md:p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
      {/* Background Image */}
      <img
        src={fallbackImage}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mb-3">
          <Badge label={post.category || "Category"} variant="glass" />
        </div>

        <Link href={`/blog/${post.id}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight hover:text-amber-150 transition line-clamp-2 capitalize">
            {post.title}
          </h2>
        </Link>

        <div className="mt-3 flex items-center text-xs text-stone-300 font-medium">
          <span>{post.date || "Aug 10"}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime || "10 min read"}</span>
        </div>
      </div>
    </div>
  );
}
