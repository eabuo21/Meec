// /** @format */

// // /** @format */

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const AccordionItem = ({ title, link1, link2 }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="border-b border-gray-200">
// //       <button
// //         className="flex justify-between w-full p-4 text-left focus:outline-none"
// //         onClick={() => setIsOpen(!isOpen)}
// //         // onMouseEnter={handleMouseEnter}

// //       >
// //         <span className="font-semibold">{title}</span>
// //         <span>{isOpen ? "-" : "+"}</span>
// //       </button>
// //       {isOpen && (
// //         <div className="p-4 text-gray-700">
// //           <Link to={link1} className="block">
// //             Link 1
// //           </Link>
// //           <Link to={link2} className="block">
// //             Link 2
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const Accordion = () => {
// //   return (
// //     <div className="max-w-md mx-auto my-10 bg-blue-950 ">
// //       <AccordionItem
// //         title="Products & Services"
// //         link1="/link1"
// //         link2="/link2"
// //       />
// //     </div>
// //   );
// // };

// // export default Accordion;
// import React from "react";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

// function Example() {
//   return (
//     <Menu>
//       <Menu.Button>My account</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`block px-4 py-2 ${active ? "bg-blue-100" : ""}`}
//               href="/settings"
//             >
//               Settings
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`block px-4 py-2 ${active ? "bg-blue-100" : ""}`}
//               href="/support"
//             >
//               Support
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`block px-4 py-2 ${active ? "bg-blue-100" : ""}`}
//               href="/license"
//             >
//               License
//             </a>
//           )}
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//   );
// }

// export default Example;
