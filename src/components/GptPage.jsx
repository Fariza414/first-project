import Choose from "./Choose";
import Options from "./Options";

const GptPage = () => {
  return (
    <div className="w-full pt-20 min-h-[100vh] mt-[50px]">
      <div className="flex flex-col items-center space-y-4">
        <h1>Photoshoot Ai</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          recusandae quae molestiae corporis id provident inventore blanditiis
          in quibusdam illo.
        </p>
        <h3>Selected Ingredients:</h3>
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
