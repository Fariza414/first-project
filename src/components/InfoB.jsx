import "../index.css";
import Logo from "../../public/logos/Logocamera.png";
import BackImage from "../../public/logos/backimage.jpg"
import { Link } from "react-router-dom";

const InfoB = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-center pt-32 pb-10">
      <div className="w-[250px] md:w-[300px] lg:w-[400px] mt-20 md:mt-30 lg:mt-10">
        <div className="space-y-4 ">
          <h1 className="text-xl md:text-2xl font-bold relative z-40">
            Hello! I am a creative photographer!
          </h1>
          <p className="text-indigo-950 text-xs md:text-sm lg:text-base relative z-40">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus assumenda at quisquam ea obcaecati corrupti, deserunt
            dolorum minima cum!
          </p>
          <div>
            <Link to={"/generation"}>
              <button className="w-[50px] md:w-[80px] lg:w-[130px] h-[30px] bg-black hover:bg-slate-600 text-white relative z-40 rounded-full text-xs md:text-sm lg:text-base">
                Generation
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[200px] md:w-[300px] lg:w-[500px] relative z-40 md:mt-20 lg:mt-10">
        <img src={Logo} alt="Logo" width={600} />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={BackImage}
          alt="Background"
          className="w-full h-[660px] object-cover mt-16"
        />
      </div>
    </div>
  );
};

export default InfoB;
