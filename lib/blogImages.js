// Bảng ánh xạ ảnh đồng bộ tuyệt đối giữa trang chủ và trang chi tiết bài viết
const postImageMap = {
  1: "/images/hero.jpg",
  2: "/images/latest-1.jpg",
  3: "/images/latest-2.jpg",
  4: "/images/latest-3.jpg",
  5: "/images/latest-4.jpg",
  6: "/images/founder-1.jpg",
  7: "/images/founder-2.jpg",
  8: "/images/founder-3.jpg",
  9: "/images/founder-4.jpg",
  10: "/images/founder-5.jpg",
  11: "/images/founder-6.jpg",
};

const allFallbackImages = [
  "/images/hero.jpg",
  "/images/latest-1.jpg",
  "/images/latest-2.jpg",
  "/images/latest-3.jpg",
  "/images/latest-4.jpg",
  "/images/founder-1.jpg",
  "/images/founder-2.jpg",
  "/images/founder-3.jpg",
  "/images/founder-4.jpg",
  "/images/founder-5.jpg",
  "/images/founder-6.jpg",
];

export function getPostImage(id) {
  const numId = Number(id);
  if (postImageMap[numId]) {
    return postImageMap[numId];
  }
  return allFallbackImages[(numId - 1) % allFallbackImages.length];
}
