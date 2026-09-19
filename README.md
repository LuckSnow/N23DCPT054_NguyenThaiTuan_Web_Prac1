# BÀI THỰC HÀNH 1: XÂY DỰNG BLOG LISTING PAGE VỚI NEXTJS & TAILWIND

## Thông tin sinh viên
- **Họ và tên:** Nguyễn Thái Tuấn
- **Mã sinh viên:** N23DCPT054
- **Lớp:** D23CQPTUD01-N
- **Tên Repository:** N23DCPT054_NguyenThaiTuan_Web_Prac1

---

## Mô tả ngắn về bài làm
Dự án được xây dựng dựa trên yêu cầu của buổi Thực hành 1 môn Lập trình Web:
1. **Next.js & App Router:** Khởi tạo và tổ chức mã nguồn theo kiến trúc Next.js App Router hiện đại, tách biệt rõ ràng các component tái sử dụng (`Header`, `Badge`, `BlogCard`,...).
2. **Tailwind CSS & Responsive Design:**
   - Dựng giao diện chuẩn theo bố cục mẫu với tông màu thanh lịch, bo góc mềm mại.
   - Bố cục lưới (Grid) linh hoạt hỗ trợ đa màn hình: Mobile (1 cột), Tablet (2 cột) và Desktop (3 cột / 2 cột chia tỉ lệ 60-40).
   - Tận dụng `line-clamp` để giới hạn số dòng tiêu đề và tóm tắt bài viết.
3. **Fetch REST API:**
   - Gọi trực tiếp dữ liệu bài viết từ API JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts`) trong Server Component.
4. **Trang chi tiết bài viết (Blog Detail):**
   - Xây dựng dynamic route `/blog/[id]` theo chuẩn App Router.
   - Fetch chi tiết bài viết tương ứng qua ID và hiển thị đầy đủ thông tin kèm nút quay lại ("Back to Blog").

---

## Hướng dẫn cài đặt và chạy dự án

### 1. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 3. Build kiểm tra phiên bản Production
```bash
npm run build
```

