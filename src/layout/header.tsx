import { FaQuestion, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../assets/newLogo.jpg";
export const Header = () => {
  return (
    <header className="max-w-screen bg-gray-100 h-[14dvh] font-serif text-[10px] text-gray-500">
      <div className="flex justify-between pt-2 mx-3">
        {/* logo */}
        <div className="flex items-baseline border">
          <img
            src={Logo}
            alt="Company Logo"
            className="border size-18  object-contain rounded-full"
          />
        </div>
        {/* </logo> */}
        {/* Account Help and Cart */}
        <div className="">
          <div className=" flex space-x-4 items-baseline pt-3 pl-[17dvw]">
            {/* <account> */}
            <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer ">
              <span>
                <FaUser size={20} className="" />
              </span>
              <span className="  pb-0"> Account</span>
            </div>
            {/* </account> */}

            {/* help */}
            <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer">
              <span className="border rounded-full px-[4px] pt-[4px] ">
                <FaQuestion size={15} className="" />
              </span>
              <span>Help</span> <ul />
            </div>
            {/* </help>  */}

            {/* <cart> */}
            <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer">
              <div>
                <FaShoppingCart />
              </div>
              <div>Cart</div>
            </div>
          </div>
          {/* </cart> */}

          {/* <search bar e.t.c> */}
          <div className="flex mt-2">
            <div><input placeholder="Search for Brand Category Or Name" className="focus:outline-none focus:ring-0 text-[16px] pl-2 rounded-l-md w-[55dvw] py-[8px] bg-white" /></div>
            <button className="cursor-pointer px-1 rounded-r-md bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 text-white font-semibold font-mono">search</button>
          </div>
         </div>
         {/* </search bar e.t.c> */}
      </div>
    </header>
  );
};

// text-transparent bg-clip-text  bg-gray-50

// <header className="max-w-screen bg-gray-100 h-[13dvh] font-serif text-[19px] text-gray-500">
//       <div className="flex justify-between pt-2 mx-3">
//         {/* logo */}
//         <div className="border">
//             <img src = {Logo} alt = "Company Logo" className="size-25 object-contain rounded-full" />
//         </div>
//         {/* Account Help and Cart */}
//         <div className="border flex space-x-4 items-baseline pt-3">
//           {/* account */}
//           <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer ">
//             <span>
//               <FaUser size={20} className="" />
//             </span>
//             <span className="  pb-0"> Account</span>
//           </div>
//           {/* help */}
//           <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer">
//             <span className="border rounded-full px-[4px] pt-[4px] ">
//               <FaQuestion size={15} className="" />
//             </span>
//             <span>Help</span> <ul />
//           </div>
//           {/* cart */}
//           <div className="transition-all duration-300 hover:scale-105 hover:text-blue-400 active:text-blue-400 flex items-baseline space-x-1 cursor-pointer">
//             <div>
//               <FaShoppingCart />
//             </div>
//             <div>Cart</div>
//           </div>
//         </div>
//       </div>
//       {/* search bar e.t.c */}
//       <div>

//       </div>
//     </header>
