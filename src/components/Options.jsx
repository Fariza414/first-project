import { useState, useEffect } from "react";

const Options = () => {

  const [season, setSeason] = useState("");
  const [weather, setWeather] = useState("");
  const [typeOfWeather, setTypeOfWeather] = useState("");
  const [filters, setFilters] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");


  const handleGenerate = () => {
    const promptToGpt = `Найди фотографию из интернета или же из pinterest азиатских людей, на которой изображен человек и пол человека должен быть ${gender} на фоне ${country} с такими погодными условиями ${weather} и с таким сезоном года ${season} и добавь еще такие сочетание погод ${typeOfWeather} и используй такой фильтр для фото ${filters}. Фотография должна быть красивой и соответствовать стилю фотосессии. Например, если выбранное место - это пляж, а погода солнечная, опиши, как человек взаимодействует на этом фоне.`;
  } 

  useEffect(()=>{
    handleGenerate(); 
  }, [season, weather, typeOfWeather, filters, country, gender]);

  return (
    <div className="w-full flex flex-col items-center p-5">
      <div className="w-[900px] h-[400px] flex flex-col items-center justify-center rounded-xl border-4 border-red">
        <div className="space-y-4 ">
          <h3 className="pl-16 text-lg font-bold">Options</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-[1000px] h-[200px] flex flex-wrap justify-center items-center gap-20 mt-5">
          <div>
            <label For="season">Season</label>
            <select
              value={season}
              name="season"
              id="season"
              onChange={(e) => setSeason(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 bg-white focus:bg-gray-400"
            >
              <option value="" disabled>
                Select a season
              </option>
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
              placeholder="Weather"
              onChange={(e) => setWeather(e.target.value)}
              className="h-[30px] rounded-md pl-5 bg-white focus:bg-gray-400"
            />
          </div>
          <div>
            <label For="weather">Type Of Weather</label>
            <select
              name="weather"
              id="weather"
              onChange={(e) => setTypeOfWeather(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 bg-white focus:bg-gray-400"
            >
              <option value="" disabled>
                Select weather type
              </option>
              <option value="Sun and Rain">Sun & Rain</option>
              <option value="Sun and Snow">Sun & Snow</option>
              <option value="Rain and Snow">Rain & Snow</option>
            </select>
          </div>
          <div>
            <p>Country</p>
            <input
              type="text"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              className="h-[30px] rounded-md pl-5 bg-white focus:bg-gray-400"
            />
          </div>
          <div>
            <label For="filters">Filters</label>
            <select
              name="filters"
              id="filters"
              onChange={(e) => setFilters(e.target.value)}
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 bg-white focus:bg-gray-400"
            >
              <option value="" disabled>
                Select a filter
              </option>
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
              className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 bg-white focus:bg-gray-400"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Female">Female</option>
              <option value="Man">Man</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;


