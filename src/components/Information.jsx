import React from 'react'
import Camera from "../../public/logos/photoguide.png";

const Information = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 gap-5">
      <div>
        <h1 className="font-bold text-lg">About Us</h1>
        <img
          src={Camera}
          alt="Photo guide"
          height={60}
          width={100}
          className="w-[180px] h-[40px]"
        />
      </div>
      <div className="w-[1000px] space-y-2">
        <p>
          At{" "}
          <span className="text-blue-950 font-bold text-base">Photo Guide</span>{" "}
          we believe in the power of capturing moments that tell a story.
          Whether it's a soft sunrise over a quiet field or the vibrant colors
          of a cityscape, every setting has a unique atmosphere waiting to be
          discovered. Our platform, powered by AI, is designed to inspire
          photographers and creatives alike by offering tailored suggestions for
          stunning photoshoot locations.
        </p>
        <p>
          With the help of cutting-edge AI technology, including ChatGPT, we
          provide more than just ideas — we bring you closer to your perfect
          shot. Simply describe the mood, theme, or vision you want for your
          next shoot, and we will generate vivid, inspiring images to guide your
          photography. You’ll see the scene before it unfolds and feel the
          creative spark.
        </p>
        <p>
          Photography is not just about pressing a button; it's about capturing
          life as it happens, and we’re here to help you frame it beautifully.
        </p>
      </div>
    </div>
  );
}

export default Information
