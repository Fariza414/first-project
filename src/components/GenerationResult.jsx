import React from 'react'
import { FaSpinner } from "react-icons/fa";


const GenerationResult = ({ generatedText, generateText, loading, urlOfImage, showResult = true }) => {
  return (
    <div className="w-[800px]">
      <div className="w-[800px] flex flex-col justify-center items-center border-4 border-spacing-6 rounded-xl gap-10">
        <h2 className="mt-5 font-semibold">Generation Result</h2>
        {urlOfImage ? (
          <div className="w-[350px] h-[350px] my-4">
            <img src={urlOfImage} alt="Generated" width={400} />
          </div>
        ) : (
          <div className="mt-4">
            {" "}
            <p>Здесь появится ваше изображение...</p>
          </div>
        )}
        <div className=" ">{generatedText}</div>
        <div>
          <button
            onClick={() => generateText()}
            className="px-4 w-[150px] h-[50px] m-4 rounded-2xl  bg-black hover:bg-slate-600 text-white flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Generate Idea"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerationResult;

