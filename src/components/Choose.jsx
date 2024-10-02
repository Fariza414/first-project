import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";
import GenerationResult from "./GenerationResult";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY
  const apiurl = import.meta.env.VITE_API_URL

  const [generatedText, setGeneratedText] = useState();
  const [urlOfImage, setUrlOfImage] = useState("");
  const [promptText, setPromptText] = useState("");
  const [gtpPromptText, setGtpPromptText] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showResult, setShowResult] = useState(false);

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
        await generateImage(text);
        setLoading(false);
    }catch (error) {
      setLoading(false);
      alert("sorry, generation feiled");
      console.error("API error", error);
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
      <div className=" flex flex-col items-center justify-center ml-24 md:ml-5">
        <div className="w-[400px] md:w-[600px] lg:w-[1400px] flex flex-wrap justify-center">
          {ingredientsData.map((ingredient, index) => (
            <Ingredient
              key={index}
              imageSrc={ingredient.imageSrc}
              onClick={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
        <div>
          <ul>
            {gtpPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <Options />
      <GenerationResult
        generatedText={generatedText}
        urlOfImage={urlOfImage}
        showResult={showResult}
        generateText={generateText}
        loading={loading}
      />
    </div>
  );
};

export default Choose;
