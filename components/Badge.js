export default function Badge({ label = "Category", variant = "default", color }) {
  if (variant === "glass") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/85 backdrop-blur-md text-gray-850 shadow-xs border border-white/60">
        <span className="w-2 h-2 rounded-full bg-[#944327] shrink-0" />
        <span>{label}</span>
      </span>
    );
  }

  if (color === "indigo") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
        <span>{label}</span>
      </span>
    );
  }

  // Kiểu mặc định theo giao diện mẫu (chấm cam/nâu + viền pill bo tròn)
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f6eee7] text-gray-700 border border-[#ecdcd0]">
      <span className="w-2 h-2 rounded-full bg-[#944327] shrink-0" />
      <span>{label}</span>
    </span>
  );
}
