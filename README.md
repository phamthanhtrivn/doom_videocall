# Doom (Zoom Clone) – Video Conferencing App

## 📌 Giới thiệu
Dự án này được xây dựng bằng **Next.js** (phiên bản mới nhất) kết hợp với **TypeScript**, mô phỏng lại ứng dụng Zoom – một nền tảng họp trực tuyến phổ biến. Ứng dụng cho phép người dùng đăng nhập, tạo cuộc họp, tham gia các cuộc họp và sử dụng đầy đủ các chức năng cần thiết như ghi hình, chia sẻ màn hình, quản lý người tham gia,...

👉 Truy cập website tại đây: (https://doom-videocall.vercel.app)

---

## 🚀 Công nghệ sử dụng
- **Next.js** – Framework React hiện đại cho SSR/SSG
- **TypeScript** – Tăng tính an toàn và dễ bảo trì code
- **Clerk** – Xác thực người dùng (social login & email/password)
- **GetStream** – Quản lý và phát triển tính năng họp trực tuyến real-time
- **Shadcn/ui** – Bộ UI components hiện đại
- **Tailwind CSS** – Thiết kế giao diện responsive, nhanh chóng

---

## ✨ Tính năng nổi bật
### 🔑 Authentication
- Đăng nhập/đăng ký an toàn với **Clerk**  
- Hỗ trợ social sign-on (Google, GitHub, …) hoặc email & mật khẩu  
- Quản lý phân quyền và mức độ truy cập trong ứng dụng  

### 📅 Cuộc họp
- **New Meeting**: Tạo cuộc họp nhanh, cấu hình camera/mic trước khi vào phòng  
- **Meeting Controls**: Quản lý toàn bộ chức năng trong cuộc họp  
  - Ghi hình  
  - Chia sẻ màn hình  
  - Thả reaction bằng emoji  
  - Bật/tắt mic, điều chỉnh âm thanh  
  - Chế độ lưới, danh sách người tham gia  
  - Quản lý từng người tham gia: pin, mute/unmute, chặn, cho phép bật video  
- **Exit Meeting**: Người tham gia có thể rời phòng, host có thể kết thúc cho tất cả  

### 📆 Quản lý cuộc họp
- **Schedule Future Meetings**: Đặt lịch họp theo ngày/giờ, lưu trên trang *Upcoming Meetings*  
- **Past Meetings**: Xem lại danh sách các cuộc họp đã tham gia, có metadata chi tiết  
- **View Recordings**: Truy cập bản ghi hình để xem lại  

### 🏠 Cá nhân
- **Personal Room**: Mỗi người dùng có phòng họp riêng với link cố định, dễ dàng chia sẻ  
- **Join via Link**: Tham gia phòng họp bằng đường link được chia sẻ  

### 🔒 Bảo mật & real-time
- Tất cả tương tác được xử lý **thời gian thực (real-time)**  
- Đảm bảo tính riêng tư và toàn vẹn dữ liệu người dùng  

### 📱 Responsive Design
- Thiết kế UI linh hoạt với **Tailwind CSS**  
- Hiển thị tối ưu trên mọi thiết bị: PC, tablet, mobile  