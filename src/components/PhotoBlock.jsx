import React from 'react'
import Mountain from '../../public/mainpage/elleman.jpg'
import Paris1 from '../../public/mainpage/inparis.jpg'
import Nature from '../../public/mainpage/innature.jpg'


const PhotoBlock = () => {
  return (
    <div className="w-full h-[500px] flex justify-evenly p-20 mt-10">
      <div className="bg-no-repeat bg-left-top">
        <img src={Mountain} alt="In Mountain" className="h-[300px]" />
      </div>
      {/* <div className=''><img src={} alt="" className='h-[300px]' /></div> */}
      <div className="">
        <img src={Paris1} alt="In Paris" className="h-[300px]" />
      </div>
      <div className="">
        <img src={Nature} alt="In Nature" className="h-[300px]" />
      </div>
    </div>
  );
}

export default PhotoBlock
