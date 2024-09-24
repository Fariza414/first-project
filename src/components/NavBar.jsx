import "../index.css";
import Camera from '../../public/logos/cameraLogo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-[70px] bg-slate-300 bg-transparent flex justify-between items-center pl-10 pr-10 fixed">
      <Link to={"/"} >
      <img
        src={Camera}
        alt="Camera"
        height={60}
        width={60}
        className="w-[60px] h-[60px]"
      />
      </Link>
      <div className="flex text-center text-lg px-6 py-2 space-x-5 font-bold">
        <Link to={"/generation"}>Generation</Link>
        <Link to={"/"}>MainPage</Link>
      </div>
    </div>
  );
};

export default NavBar;
