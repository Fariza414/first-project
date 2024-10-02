import "../index.css";

const Footer = () => {
  return (
    <div className="w-full h-[80px] md:h-[100px] bg-orange-300 flex items-center p-4 mt-10 mb-2">
        <div className="w-1/4">
          <h1 className="text-xs md:text-base">Lorem, ipsum.</h1>
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col bg-slate-400">
        <span class="material-icons">gmail</span>
        <h2 className="text-xs md:text-sm">Mail</h2>
        <p className="text-xs md:text-sm">smartcook@gmail.com</p>
      </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col bg-slate-600">
        <span class="material-icons">call</span>
        <h2 className="text-xs md:text-sm">Call</h2>
        <p className="text-xs md:text-sm">+7(747) 414-14-04</p>
      </div>

      <div className="w-[1px] h-[100px] bg-black hidden md:block"></div>

      <div className="w-1/4 flex flex-col bg-slate-800">
        <span class="material-icons">place</span>
        <h2 className="text-xs md:text-sm">Find Us</h2>
        <p className="text-xs md:text-sm">Almaty.KZ</p>
      </div>
    </div>
  );
};

export default Footer;
