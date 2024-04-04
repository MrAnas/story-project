// import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full bg-[#E9E9E9]">
      <nav className=" flex items-center justify-between px-2 sm:px-4 pt-4  pb-6 mx-auto lg:justify-between lg:px-8">
      
        {/* mobile view  */}
        <div className="flex w-full items-center justify-between md:hidden">
          <a href="/">
            <img
              src="/story-logo.png"
              alt="Logo"
              className="w-[120px] md:w-[158px]"
            />
          </a>
          <Drawer
            position="top"
            opened={opened}
            onClose={close}
            title={<img
              src="/story-logo.png"
              alt="Logo"
              className="w-[100px] md:w-[158px]"
            />}
            transitionProps={{ duration: 600, transition: "slide-down" }}
            classNames={{
              close: "w-10 h-10",
              content: " h-max   ",
              body: "px-0 ",
            }}
            closeOnClickOutside
            closeOnEscape
          >
            {/* Drawer content */}
            <ul className="flex flex-col gap-4">
            {navigation.map((menu, index) => (
              <li className="" key={index}>
                <a
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none"
                >
                  {menu}
                </a>
                
              </li>
              
            ))}
              <button
            href="/"
            className="px-6 py-2 text-lg w-[70%] mx-auto font-semibold text-center text-white bg-[#4B5FFF] hover:bg-[#4a5ce4] rounded-xl shadow-md "
          >
            Get Started
          </button>
            </ul>
          </Drawer>

          <Group position="center" className="cursor-pointer">
            <svg
              onClick={open}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </Group>
        </div>

        {/* desktop menu  */}
        <div className="hidden w-full text-center md:flex md:items-center justify-between" >
        <img
              src="/story-logo.png"
              alt="Logo"
              className="w-[100px] md:w-[158px]"
            />
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((menu, index) => (
              <li className="" key={index}>
                <a
                  href="/"
                  className="inline-block text-lg font-normal text-gray-800 no-underline rounded-md hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
          <button
            href="/"
            className="px-6 py-2 text-lg font-semibold text-center text-white bg-[#4B5FFF] hover:bg-[#4a5ce4] rounded-xl shadow-md "
          >
            Get Started
          </button>
        </div>

    
      </nav>
    </div>
  );
};

export default Navbar;
