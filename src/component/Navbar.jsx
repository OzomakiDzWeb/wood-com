import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Links = [
  { id: 1, name: "HOME", link: "" },
  { id: 2, name: "features", link: "features" },
  { id: 3, name: "shop", link: "shop" },
  { id: 4, name: "blog", link: "blog" },
  { id: 5, name: "contact", link: "contact" },
];
const Navbar = () => {
  const [actiMobil, setactvMobil] = useState(false);
  const [scroll,setscroll]=useState(true)
  useEffect(() => {
  const handelScroll=()=>{
     if (window.scrollY > 100) {
       console.log(window.scrollY);
       setscroll(true);
     } else {
       console.log(window.scrollY);
       setscroll(false);
     }
  }
  window.addEventListener("scroll",handelScroll)
  return () => {
    window.addEventListener("scroll", handelScroll);
  }; 
    

  }, [scroll]);
  return (
    <div className=" sticky top-0 left-0 z-20 w-full ">
      <div
        className={`flex justify-between items-center px-5 py-5 transition-all duration-300 ${
          scroll ? "bg-white " : "shadow-lg bg-permry  shadow-therd"
        }   `}
      >
        {/* logo */}
        <div className="font-bold text-xl sm:text-2xl">
          <span>WOOD</span>
          <span className="text-secondary"> COM</span>
        </div>
        {/* linkes  */}
        <div className="hidden md:flex list-none uppercase gap-4 font-semibold">
          {Links.map((itm) => (
            <li className="font-bold text-secondary" key={itm.id}>
              <Link
                className="cursor-pointer hover:text-therd transition-all duration-300"
                to={itm.link}
              >
                {itm.name}
              </Link>
            </li>
          ))}
        </div>
        {/* cart */}
        <div className=" flex   gap-2">
          <Link
            to="cartshop"
            className="relative cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <FaHeart className="text-secondary" size={30} />
            <span className="bg-therd rounded-full w-4 h-4 flex items-center justify-center font-bold  p-2 absolute -top-1  right-0">
              1
            </span>
          </Link>
          <Link
            to="favoritlist"
            className="relative cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <FaShoppingCart className="text-secondary" size={30} />
            <span className="bg-therd rounded-full w-4 h-4 flex items-center justify-center font-bold  p-2 absolute -top-1  right-0">
              1
            </span>
          </Link>
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
            <Link
              className="cursor-pointer hover:text-therd transition-all duration-300"
              to={itm.link}
            >
              {itm.name}
            </Link>
          </li>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
