import "../index.css";
import Camera from "../../public/logos/photoguide.png";

const Footer = () => {
  return (
    <div className="w-full h-[80px] md:h-[100px] flex items-center p-4 mt-10 mb-2">
      <div className="w-1/4 flex flex-col items-center">
        <h1 className="text-xs md:text-base font-semibold">
          Hi! Are you already here?
        </h1>
        <img
          src={Camera}
          alt="Photo guide"
          height={60}
          width={100}
          className="w-[180px] h-[40px]"
        />
      </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col items-center">
        <h2 className="text-xs md:text-sm lg:text-base font-semibold underline">
          Mail
        </h2>
        <p className="text-xs md:text-sm">smartcook@gmail.com</p>
      </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col items-center">
        <h2 className="text-xs md:text-sm lg:text-base  font-semibold underline">
          Call
        </h2>
        <p className="text-xs md:text-sm">+7(747) 414-14-04</p>
      </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col items-center">
        <h2 className="text-xs md:text-sm lg:text-base  font-semibold underline">
          Find Us
        </h2>
        <p className="text-xs md:text-sm">Almaty.KZ</p>
      </div>
    </div>
  );
};

export default Footer;
