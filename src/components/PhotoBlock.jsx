import React from "react";
import Mountain from "../../public/mainpage/elleman.jpg";
import Forest from "../../public/mainpage/forest.jpg";
import Building from "../../public/mainpage/building.jpg";
import Street from "../../public/mainpage/street.jpg";
import Littleboy from "../../public/mainpage/littleboy.jpg";
import Boys from "../../public/mainpage/boys.jpg";

const PhotoBlock = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-52 p-8 mt-20">
      <div className="w-full flex justify-between">
        <div className="">
          <img src={Mountain} alt="In Mountain" className="h-[350px]" />
        </div>
        <div className="">
          <img src={Boys} alt="Boys" className="h-[350px]" />
        </div>
        <div className="">
          <img src={Building} alt="Building" className="h-[350px]" />
        </div>
      </div>

      <div className="w-full flex justify-center space-x-24">
        <div className="">
          <img src={Street} alt="Street" className="h-[350px]" />
        </div>
        <div className="">
          <img src={Littleboy} alt="Little Boy" className="h-[350px]" />
        </div>
        <div>
          <img src={Forest} alt="Forest" className="h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default PhotoBlock;
