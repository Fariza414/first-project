import "../index.css";
import { Link } from "react-router-dom";
import Camera from "../../public/logos/photoguide.png"

const NavBar = () => {
  return (
    <div className="w-full h-[70px] flex justify-between items-center pl-10 pr-10 fixed ">
      <Link to={"/"}>
        <img
          src={Camera}
          alt="Photo guide"
          height={60}
          width={100}
          className="w-[180px] h-[40px]"
        />
      </Link>
      <div className="flex text-center px-6 py-2 space-x-5 font-bold ">
        <Link
          to={"/generation"}
          className="text-slate-900 hover:text-blue-400 hover:underline"
        >
          Generation
        </Link>
        <Link
          to={"/"}
          className="text-slate-900 hover:text-blue-400 hover:underline"
        >
          MainPage
        </Link>
        <Link
          to={"/about"}
          className="text-slate-900 hover:text-blue-400 hover:underline"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
