import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const Links = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "features", link: "/features" },
  { id: 3, name: "shop", link: "/shop" },
  { id: 4, name: "blog", link: "/blog" },
  { id: 5, name: "contact", link: "/contact" },
];
const Navbar = () => {
  const [actiMobil, setactvMobil] = useState(true);
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5 bg-permry  shadow-lg shadow-therd">
        {/* logo */}
        <div className="font-bold text-xl sm:text-2xl">
          <span>WOOD</span>
          <span className="text-secondary"> COM</span>
        </div>
        {/* linkes  */}
        <div className="hidden md:flex list-none uppercase gap-4 font-semibold">
          {Links.map((itm) => (
            <li className="font-bold text-secondary" key={itm.id}>
              <a
                className="cursor-pointer hover:text-therd transition-all duration-300"
                href={itm.href}
              >
                {itm.name}
              </a>
            </li>
          ))}
        </div>
        {/* cart */}
        <div className="hidden md:flex gap-2">
          <div className="relative cursor-pointer hover:scale-110 transition-all duration-300">
            <FaHeart className="text-secondary" size={30} />
            <span className="bg-therd rounded-full w-4 h-4 flex items-center justify-center font-bold  p-2 absolute -top-1  right-0">
              1
            </span>
          </div>
          <div className="relative cursor-pointer hover:scale-110 transition-all duration-300">
            <FaShoppingCart className="text-secondary" size={30} />
            <span className="bg-therd rounded-full w-4 h-4 flex items-center justify-center font-bold  p-2 absolute -top-1  right-0">
              1
            </span>
          </div>
        </div>
        {/* menu icon */}
        <div className="md:hidden cursor-pointer hover:scale-110 transition-all duration-300">
          <IoMdMenu
            onClick={() => setactvMobil(!actiMobil)}
            className={`${actiMobil ? "hidden" : "flex"} text-secondary`}
            size={30}
          />
          <IoMdClose
            onClick={() => setactvMobil(!actiMobil)}
            className={`${actiMobil ? "flex" : "hidden"} text-secondary`}
            size={30}
          />
        </div>
      </div>
      {/* menu Mobil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={`${
          actiMobil ? "flex" : "hidden"
        } list-none  flex-col justify-center items-center bg-permry`}
      >
        {Links.map((itm) => (
          <li className="font-bold text-secondary" key={itm.id}>
            <a
              className="cursor-pointer hover:text-therd transition-all duration-300"
              href={itm.href}
            >
              {itm.name}
            </a>
          </li>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
