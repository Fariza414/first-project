import "../index.css";
import dish from "../../public/images/burger.png"

const InfoBlock = () => {
  return (
    <div className="w-full h-[400px] bg-blue-500 flex justify-evenly items-center pl-10 pr-10">
        <div className="w-[300px]">
            <div className="space-y-3">
                <h1 className="text-xl font-bold">Lorem ipsum dolor sit.</h1>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat architecto magnam obcaecati reprehenderit ea delectus odio dignissimos?</p>
                <button className="w-[150px] h-[40px] bg-green-500 rounded-full">Generate</button>
            </div>
        </div>
        <div>
            <img src={dish} alt="dish" width={400} height={400} />
        </div>
    </div>
  );
};

export default InfoBlock;
