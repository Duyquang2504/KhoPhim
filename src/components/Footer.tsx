// import React from "react";

// type FooterProps = {
//   companyName?: string;
//   year?: number;
// };

// const Footer: React.FC<FooterProps> = ({
//   companyName = "My Company",
//   year,
// }) => {
//   const currentYear = year || new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-200 py-6 ">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
//         {/* Logo hoặc tên công ty */}
//         <div className="text-lg font-semibold">{companyName}</div>

//         {/* Menu liên kết */}
//         <nav className="my-4 md:my-0">
//           <ul className="flex space-x-6">
//             <li>
//               <a href="/about" className="hover:text-white transition-colors">
//                 Giới thiệu
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/services"
//                 className="hover:text-white transition-colors"
//               >
//                 Dịch vụ
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-white transition-colors">
//                 Liên hệ
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Bản quyền */}
//         <div className="text-sm">
//           © {currentYear} {companyName}. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
