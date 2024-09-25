import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";
import { FaSpinner } from "react-icons/fa";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY
  const apiurl = import.meta.env.VITE_API_URL

  const [generatedText, setGeneratedText] = useState();
  const [urlOfImage, setUrlOfImage] = useState("");
  const [promptText, setPromptText] = useState("");
  const [gtpPromptText, setGtpPromptText] = useState([]);
  const [loading, setLoading] = useState(false);

  const ingredientsData = [
    { name: "Mountain", imageSrc: "/images/mountain.png" },
    { name: "Street", imageSrc: "/images/street.png" },
    { name: "Beach", imageSrc: "/images/beach.png" },
    { name: "Car", imageSrc: "/images/car.webp" },
    { name: "Ocean", imageSrc: "/images/ocean.png" },
    { name: "Forest", imageSrc: "/images/forest.png" },
    { name: "Winter", imageSrc: "/images/winter.png" },
    { name: "Spring", imageSrc: "/images/spring.png" },
    { name: "Summer", imageSrc: "/images/summer.webp" },
    { name: "Autumn", imageSrc: "/images/autumn.png" },
  ];
  const setPrompt = (prompt) => {
    setPromptText(prompt);
    generateImage(prompt);
  }
  // const [imageUrl, setImageUrl] = useState('');

  const handleIngredientClick = (ingredient) => {
    setGtpPromptText([...gtpPromptText, ingredient.name]);
  };

  const generateText = async () => {
    setLoading(true);
    console.log('generating text');
    let generationtext = `Также напиши пошаговую инструкцию, как сделать похожее фото, включая:
Как выбрать угол съемки.
Как правильно настроить освещение в зависимости от погоды.
Какие позы лучше всего подходят для фотосессии.
Какие дополнительные детали учесть для создания красивого кадра.`;

    try{
      const response = await fetch(apiurl,  {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: generationtext,
            max_tokens: 320,
          }),
        });
        const data = await response.json();
        console.log("data:", data);

        const text = data.choices[0].text;
        setGeneratedText(text);
        console.log(text);
    }catch (error) {
      console.error(error.response?.data ?? error.toJSON?.() ?? error);
      console.error("API error", error);
    }finally{
      setLoading(false);
    }
  }

  const generateImage = async (promptTextForImage) => {
    console.log('started image generation')
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptTextForImage,
        n: 1,
        size: "512x512",
      }),
    };

    try{
      const response  = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log("data of generationImage is below:", data);
      setUrlOfImage(data.data[0].url)
      console.log("urlOfImage" + urlOfImage);

    } catch (error){
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          {ingredientsData.map((ingredient, index) => (
            <Ingredient
              key={index}
              imageSrc={ingredient.imageSrc}
              // isSelected={selectedIngredients.includes(ingredient)}
              onClick={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
        <div >
          <ul>
            {gtpPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {/* <div className="w-[350px] h-[350px] my-4">
          <img src={urlOfImage} alt="Generate Image" width={400} />
        </div> */}
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
        <button
          onClick={() => generateText()}
          className="px-4 w-[150px] h-[50px] m-4 rounded-2xl bg-indigo-400 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            "Generate Idea"
          )}
        </button>
      </div>
      <Options setPrompt={setPrompt} />
      <div className="w-[400px] h-[80px] md:w-[600px] lg:w-[1000px] lg:h-[500px] flex flex-col items-center  mt-10 ml-52 md:ml-52 lg:ml-0 pt-2 pl-5 pr-5">
        <h1 className="font-bold">Generated text</h1>
        <p> {generatedText} </p>
      </div>
    </div>
  );
};

export default Choose;
