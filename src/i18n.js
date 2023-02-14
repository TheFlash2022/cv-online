import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  vi: {
    translation: {
      "ABOUT ME": "Sơ lược bản thân",
      SUMMARY: "Tóm tắt",
      "I am a IT Software Engineer, majored in Web Development. By utilizing and applying knowledge of UX/UI design, I aim to work as a a front-end solution provider and user experience creator. I am also eager to learn new technology and spend much time on practising to enhance my knowledge and skills.":
        "Tôi là một kĩ sư phần mềm, chuyên sâu về lập trình và phát triển ứng dụng trên trình duyệt web. Bằng cách sử dụng và áp dụng những kiến thức về thiết kế giao diện người dùng, tôi nhằm mục đích làm việc như một nhà cung cấp giải pháp giao diện ứng dụng và người tạo trải nghiệm người dùng. Tôi cũng mong muốn học công nghệ mới và dành nhiều thời gian để thực hành để nâng cao kiến thức và kỹ năng của mình.",
      "IT Software - Engineer": "Kĩ sư Phần mềm",
      "MY SKILLS": "Kĩ Năng",
      "Programming Languages": "Ngôn ngữ lập trình",
      "Frameworks/Library": "Thư viện",
      "Other skills": "Kĩ năng khác",
      Experiences: "Kinh nghiệm",
      Education: "Học vấn",
      "FPT TELECOM": "Công ty cổ phần viễn thông FPT Telecom",
      "Technical Support": "Hỗ trợ kĩ thuật",
      "E-WORLD E-COMMERCE AND TECHNOLOGY JOINT STOCK COMPANY":
        "Công ty cổ phần thương mại điện tử và công nghệ E-WORLD",
      "Business Development": "Phát triển kinh doanh",
      "Responsibilities: Inbound Contact Center Representative - Technical Support Collect clients' technical inquiries realated to internet, television stations and relevant services; Handle clients' complaints with clear explanations and solutions, especially for internet connection; Provide clear and detailed company's products, procedures and after sales services.":
        "Trách nhiệm: Tổng đài viên chăm sóc khách hàng - hỗ trợ khách hàng về các vấn đề kĩ thuật liên quan tới mạng internet, dịch vụ truyền hình và các dịch vụ liên quan, xử lý các khiếu nại của khách hàng với các giải thích và giải pháp rõ ràng, đặc biệt là đối với kết nối Internet; Cung cấp các sản phẩm, quy trình và dịch vụ sau khi bán hàng rõ ràng và chi tiết.",
      "Seek for potential retail customers who have demand for importing a varied range of consumer goods; Provide the package of importing goods from some Asia countries, for example, from China to Vietnam; Receive and give advice for clients' relevant inquiries.":
        "Tìm kiếm cho các khách hàng bán lẻ tiềm năng, những người có nhu cầu nhập khẩu một loạt các hàng tiêu dùng khác nhau; Cung cấp gói nhập khẩu hàng hóa từ một số quốc gia châu Á, ví dụ, từ Trung Quốc đến Việt Nam; Nhận và đưa ra lời khuyên cho các yêu cầu liên quan của khách hàng.",
      "Major: Faculty of Geology & Petroleum Engineering":
        "Chuyên ngành: Kĩ thuật Địa Chất và Dầu Khí",
      "Earth Resources and Environment": "Tài nguyên trái đất và môi trường",
      "Major: Information Technology": "Chuyên ngành: Công nghệ Thông Tin",
      "Completed Project: Analyze and design system of e-commerce website":
        "Dự án đã hoàn thành: Phân tích và thiết kế hệ thống trang thương mại điện tử",
      "MY PROJECT": "Một số dự án tiêu biểu",
      "Web-App: Booking Movie-Ticket": "Ứng dụng đặt vé xem phim",
      "App: taskify": "Ứng dụng ghi chú kế hoạch",
      "Ticket chair Angular": "Ứng dụng đặt ghế xe khách (Angular)",
      Description: "Mô tả",
      "I applied ReactJs for this project. As for the website interface: I utilized “ant design” library and some relevant kinds of library, after that, I used a combination of bootstraps, tailwindcss and scss to perform some nescessary adjustments to the interface. Afterwards, some codes were created to complete the website's functions, such as new ticket booking, adding/removing tickets, price calculation, and so on. As for web data: I applied ajax to call api from backend, after data collecting was in place, I continued to utilize redux store and hook to load data for users' interface. This is currently not a commercial project, but it plays an basic role for building up relevant websites which can offer to every single user more advantages as well as satisfied and convenient experiences.":
        "Tôi đã sử dụng ReactJs cho dự án này. Về giao diện ứng dụng tôi sử dụng thư viện ant design và một số thư viện liên quan khác, sau đó tôi đã kết hợp bootstraps, tailwindcss và scss để thiết kế và điều chỉnh cho giao diện. Tiếp theo là xây dựng các hàm tạo chức năng cho ứng dụng như là đặt mua vé, tính giá tiền, thêm, sửa hay xóa vé.... Về dữ liệu của ứng dụng tôi sử dụng ajax để gọi api từ backend về sau khi có được data tôi sử dụng redux store và một số hook để tải lên giao diện người dùng. Đây hiện không phải là một dự án thương mại, nhưng nó đóng một vai trò cơ bản để xây dựng các trang web có liên quan có thể cung cấp cho mọi người dùng một lợi thế hơn cũng như trải nghiệm hài lòng và thuận tiện.",
      "DOWNLOAD CV": "Tải xuống CV",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
