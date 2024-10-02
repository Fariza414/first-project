import Choose from "./Choose";
import Options from "./Options";

const GptPage = () => {
  return (
    <div className="w-full pt-20 min-h-[100vh] mt-[50px]" >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold">Photoshoot Ai</h1>
        <p>
          
        </p>
        <h3 className="font-bold">Selecte:</h3>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full  flex flex-col justify-center items-center">
          <Choose />
        </div>
      </div>
    </div>
  );
};

export default GptPage;
