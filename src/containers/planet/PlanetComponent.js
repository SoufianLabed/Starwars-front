import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Button from '@material-ui/core/Button';



const PlanetComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const planets = useSelector((state)=> state.allProducts.products);

    const addFav = (planet) => {
      let planets = []
      if(JSON.parse(localStorage.getItem('planets') != null)){
        planets = JSON.parse(localStorage.getItem('planets'))
      }
      if(!planets.includes(planet.id)){
        localStorage.setItem("planets", JSON.stringify([...planets,planet.id]));
      }
      console.log(localStorage.getItem('planets'))
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = planets.filter(planet =>
            planet.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm,planets]);

    return (
      <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">StarWars Planet</h2>
        <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200    rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" type="text" placeholder="Add planet" value={searchTerm} onChange={handleChange}/>
        {searchTerm !== '' ? 
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {searchResults.map((planet, i) => (
            <div class="group relative">
              <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none text-center">
                <div className=" bg-white rounded-3xl border-solid border-4 border-blue-900">
                  <div className=""><h1 className="mt-3 font-bold text-3xl">{planet.name}</h1></div>
                  <div className=" border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium ">Population</p><h1 className="ml-1/5 mx-16">{planet.population}</h1></div>
                  <div className="border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium">Terrain</p><h1 className="ml-1/5 mx-16">{planet.terrain}</h1></div>
                  <div className="text-xl mt-1  text-xl"><p className="text-2xl font-medium">Climate</p><h1 className="ml-1/5 mx-16">{planet.climate}</h1></div>
                  <Button onClick={() => addFav(planet)}>Add to Favorite</Button> 
                </div>
              </div>
            </div>
              ) 
          )}
          </div>
          :
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {planets.map((planet, i) => (
            <div class="group relative">
              <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none text-center">
                <div className="h-full  bg-white rounded-3xl border-solid border-4 border-blue-900">
                  <div className=""><h1 className="mt-3 font-bold text-3xl">{planet.name}</h1></div>
                  <div className=" border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium ">Population</p><h1 className="ml-1/5 mx-16">{planet.population}</h1></div>
                  <div className="border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium">Terrain</p><h1 className="ml-1/5 mx-16">{planet.terrain}</h1></div>
                  <div className="text-xl mt-1  text-xl"><p className="text-2xl font-medium">Climate</p><h1 className="ml-1/5 mx-16">{planet.climate}</h1></div>
                  <Button onClick={() => addFav(planet)}>Add to Favorite</Button>  
                </div>
                </div>
            </div>
                    ) 
                )}
                </div>            
          }
       
      </div>
    </div>
    )
}

export default PlanetComponent