import { useState, useEffect } from "react";

const Options = ({setPrompt}) => {

  const [season, setSeason] = useState("");
  const [weather, setWeather] = useState("");
  const [typeOfWeather, setTypeOfWeather] = useState("");
  const [filters, setFilters] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");


  const handleGenerate = () => {
    const promptToGpt = `Сгенерируй мне фото для того чтоб я могла сделать красивое фото на этом месте и с такими условиями: сезон года должен быть: ${season}, погода должна быть: ${weather}, еще следующая погода: ${typeOfWeather}. Страна фотографии должна быть:  ${country}, используй этот фильтер: ${filters}`;
    setPrompt(promptToGpt);
  } 

  useEffect(()=>{
    handleGenerate(); 
  }, [season, weather, typeOfWeather, filters, country, gender]);

  return (
    <div className="w-full flex flex-col items-center p-5 bg-slate-600">
      <div className="w-[900px] h-[400px] flex flex-col items-center justify-center rounded-xl border-4 border-red bg-slate-400">
        <div className="space-y-4 ">
          <h3 className="pl-16 text-lg font-bold">Options</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-[1000px] h-[200px] flex flex-wrap justify-center items-center gap-20 mt-5">
          <div>
            <label For="season">Season</label>
            <select
              name="season"
              id="season"
              onChange={(e) => setSeason(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5"
            >
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
            </select>
          </div>
          <div>
            <p>Weather</p>
            <input
              type="text"
              placeholder="Weather" onChange={(e) => setWeather(e.target.value)}
              className="h-[30px] rounded-md pl-5"
            />
          </div>
          <div>
            <label For="weather">Type Of Weather</label>
            <select
              name="weather"
              id="weather"
              onChange={(e) => setTypeOfWeather(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5"
            >
              <option value="Sun and Rain">Sun & Rain</option>
              <option value="Sun and Snow">Sun & Snow</option>
              <option value="Rain and Snow">Rain & Snow</option>
            </select>
          </div>
          <div>
            <p>Country</p>
            <input
              type="text"
              placeholder="Country" onChange={(e) => setCountry(e.target.value)}
              className="h-[30px] rounded-md pl-5"
            />
          </div>
          <div>
            <label For="filters">Filters</label>
            <select
              name="filters"
              id="filters"
              onChange={(e) => setFilters(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5"
            >
              <option value="Black & White">Black & White</option>
              <option value="Retro">Retro</option>
              <option value="Anime">Anime</option>
              <option value="Cinematic">Cinematic</option>
            </select>
          </div>
          <div>
            <label For="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5"
            >
              <option value="Female">Female</option>
              <option value="Man">Man</option>
            </select>
          </div>
        </div>
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <p>Season: {season}</p>
      <p>Type of weather: {typeOfWeather}</p>
      <p>Filters: {filters}</p>
      <p>Gender: {gender}</p>
      <p>Weather: {weather} </p>
      <p>Country: {country}</p>
    </div>
  );
};

export default Options;


