import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MeecLogo from "../../assets/images/logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navigationLinks = [
    { name: "About Us", to: "#" },
    { name: "Services", to: "/services" },
    { name: "Blogs/News", to: "#" },
    { name: "FAQ", to: "#" },
    { name: "Careers", to: "#" },
    { name: "Contact", to: "#" },
  ];

  return (
    <Disclosure
      as="nav"
      className="p-2 bg-blue-950 transition-colors duration-1000 ease-in-out text-white text-xl sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src={MeecLogo}
                className="max-h-[120px]  max-w-[200px] object-fit"
                alt="Meec Logo"
              />
            </Link>

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
                className="text-white border-2 border-white p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                )}
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
            <Disclosure.Panel className="lg:hidden bg-blue-950 overflow-y-auto fixed inset-0 z-50 w-[250px] flex flex-col top-[90px]">
              <div className="flex flex-col space-y-4 p-4 pt-16 px-6 justify-start items-start gap-6 text-sm ">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-white hover:text-blue-700 text-xl w-full border-b border-b-black"
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
