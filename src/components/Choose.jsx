import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY
  const apiurl = import.meta.env.VITE_API_URL

  const [generatedText, setGeneratedText] = useState();

  const [urlOfImage, setUrlOfImage] = useState("");

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

  const [promptText, setPromptText] = useState('');

  const [gtpPromptText, setGtpPromptText] = useState([]);
  
  const setPrompt = (prompt) => {
    setPromptText(prompt);
    generateImage(promptText);
  }
  // const [imageUrl, setImageUrl] = useState('');

  const handleIngredientClick = (ingredient) => {
    setGtpPromptText([...gtpPromptText, ingredient.name]);
  };

  const generateText = async () => {
    console.log('generating text');
    let promptText = `generate me fairytail about nature`;

    try{
      const response = await fetch(apiurl,  {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: promptText,
            max_tokens: 350,
          }),
        });
        const data = await response.json();
        console.log("data:", data);

        const text = data.choices[0].text;
        setGeneratedText();
        console.log(text);
    }catch (error) {
      console.error(error.response?.data ?? error.toJSON?.() ?? error);
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
    <div className="min-h-[100vh] ">
      <div className="flex flex-wrap">
        {ingredientsData.map((ingredient, index) => (
          <Ingredient
            key={index}
            imageSrc={ingredient.imageSrc}
            // isSelected={selectedIngredients.includes(ingredient)}
            onClick={() => handleIngredientClick(ingredient)}
          />
        ))}
        <div>
          <ul>
            {gtpPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <img src={urlOfImage} alt="Generate Image" width={400} />
        <button
          onClick={() => generateText()}
          className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
        >
          Generate Idea
        </button>
      </div>
      <Options setPrompt={setPrompt} />
      <h1>Generated text</h1>
      <p>text: {generatedText} </p>
    </div>
  );
};

export default Choose;
