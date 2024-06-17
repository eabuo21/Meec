/** @format */

/** @format */

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Herobg from "../../assets/images/herobg.jpg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "About Us", to: "#" },
    { name: "Services", to: "#" },
    { name: "Blogs/News", to: "#" },
    { name: "FAQ", to: "#" },
    { name: "Careers", to: "#" },
    { name: "Contact", to: "#" },
  ];

  return (
    <Disclosure
      as="nav"
      className="p-4 bg-[#000456] transition-colors duration-1000 ease-in-out text-white text-xl"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex-shrink-0 text-white">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <div className="my-logo font-bold text-[32px] font-dm text-white hover:bg-gradient-to-br">
                  <span className="text-[#cc5500]  font-bold text-2xl  font-cur">
                    M
                  </span>{" "}
                  <span className="  ">E</span> <span className="  ">E</span>{" "}
                  <span className="text-[#cc5500]  font-bold text-2xl  font-cur  ">
                    C
                  </span>
                </div>
              </Link>
            </div>

            <div className="desktop-navigation lg:flex lg:flex-row space-x-4 gap-8 border-0 border-b border-white lg:border-0">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="hover:text-blue-700 font-passion text-xl text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="lg:hidden">
              <Disclosure.Button
                className="text-white border-2 border-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6 transform origin-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Disclosure.Button>
            </div>
          </div>

          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition duration-300 ease-in-out transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-200 ease-in transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel className="lg:hidden bg-blue-950 fixed inset-0 z-50 w-[250px] flex flex-col top-[63px]">
              <div className="flex flex-col space-y-4 p-4 pt-16 px-6 justify-start items-start gap-6 text-sm ">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-white hover:text-red text-xl w-full border-b border-b-black"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;

// import React from "react";
// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   Button,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"; // Correct import for icons
// import { Link } from "react-router-dom";

// const Links = ["About Us", "Blogs/News", "FAQ", "Contact"];

// const NavLink = ({ children }) => (
//   <Link
//     to={`/${children.toLowerCase().replace(/ /g, "-")}`}
//     style={{ padding: "8px 16px", display: "block" }}
//   >
//     {children}
//   </Link>
// );

// const Navigation = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg={useColorModeValue("blue.500", "blue.900")} px={4}>
//       <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//         <IconButton
//           size={"md"}
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={"Open Menu"}
//           display={{ md: "none" }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems={"center"}>
//           <Box color="white" fontWeight="bold">
//             OSCAR
//           </Box>
//           <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
//             {Links.map((link) => (
//               <NavLink key={link}>{link}</NavLink>
//             ))}
//           </HStack>
//         </HStack>
//         <Flex alignItems={"center"}>
//           <Button
//             as={Link}
//             to={"/login"}
//             colorScheme={"teal"}
//             size={"sm"}
//             mr={4}
//           >
//             Login
//           </Button>
//           <Button as={Link} to={"/signup"} colorScheme={"teal"} size={"sm"}>
//             Signup
//           </Button>
//         </Flex>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ md: "none" }}>
//           <Stack as={"nav"} spacing={4}>
//             {Links.map((link) => (
//               <NavLink key={link}>{link}</NavLink>
//             ))}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navigation;
