import React,{useEffect, useState} from "react";
import axios from 'axios';






const FavoriteListing = () => {
    
    const [favorite, setFavorite] = useState([]);
    const [favoritePlanets, setFavoritePlanets] = useState([]);

    const fetchFavorites = async () =>{
        let favPlanets = []
        let favPlanetsRequested = []
        let localStoragePeoples = localStorage.getItem('peoples')
        if(localStoragePeoples != "[]"){
            favPlanets = localStorage.getItem('peoples')
            const regex = /\[|\]/gm;
            favPlanets = favPlanets.replace(regex,"").trim().split(',')
            console.log("here",favPlanets)
            
            let i; 
            console.log(favPlanets.length)
            for(i=0;i<favPlanets.length;i++){
                let response = await axios.get(`http://localhost:4242/people/${favPlanets[i]}`).catch((err)=> {console.log(err)})
                favPlanetsRequested.push(response.data)
            }
            setFavorite(favPlanetsRequested)
            console.log("fav",favPlanetsRequested)
        }

       
    }


    const fetchFavoritesPlanets = async () =>{
        let favPlanets = []
        let favPlanetsRequested = []
        let localStoragePlanets = localStorage.getItem('planets')
        if(localStoragePlanets != "[]"){
            favPlanets = localStorage.getItem('planets')
            const regex = /\[|\]/gm;
            favPlanets = favPlanets.replace(regex,"").trim().split(',')
            console.log("here planet",favPlanets)
            
            let i; 
            console.log(favPlanets.length)
            for(i=0;i<favPlanets.length;i++){
                let response = await axios.get(`http://localhost:4242/planet/${favPlanets[i]}`).catch((err)=> {console.log(err)})
                favPlanetsRequested.push(response.data)
            }
            setFavoritePlanets(favPlanetsRequested)
            console.log("fav planet",favPlanetsRequested)
        }
    }

    const removeFav = (currentFavorite) => {
        let id = currentFavorite[0].id
        let favoriteFiltred = favorite.filter(element => element[0].id != id)
        setFavorite(favoriteFiltred)

        let peoples = []
        if(JSON.parse(localStorage.getItem('peoples') != null)){
         peoples = JSON.parse(localStorage.getItem('peoples'))
        }
        console.log("localstore",peoples)
        localStorage.setItem("peoples", JSON.stringify(peoples.filter(element => element != id)));
        console.log(localStorage.getItem("peoples"))
      }

      const removePlanetFav = (currentFavorite) => {
        let id = currentFavorite[0].id
        let favoriteFiltred = favoritePlanets.filter(element => element[0].id != id)
        setFavoritePlanets(favoriteFiltred)

        let planets = []
        if(JSON.parse(localStorage.getItem('planets') != null)){
         planets = JSON.parse(localStorage.getItem('planets'))
        }
        console.log("localstore",planets)
        localStorage.setItem("planets", JSON.stringify(planets.filter(element => element != id)));
        console.log(localStorage.getItem("planets"))
      }

    useEffect(()=>{
        fetchFavorites();
        fetchFavoritesPlanets();
    },[])

    return(
    <div class=" text-gray-700  font-sans h-full">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">StarWars Caracter</h2>
        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        {favorite.map((favorite, i) => (
          <div key={favorite._id} class="p-16">
                <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
                    <div class="m-2 text-justify text-sm">
                        <button onClick={() => removeFav(favorite)}>X</button>
                        <h2 class="font-bold text-lg h-2 mb-8">{favorite[0].name}</h2>
                        <h2 class="font-bold text-lg h-2 mb-8">Height : {favorite[0].height}</h2>
                        <h2 class="font-bold text-lg h-2 mb-8">Hair Color : {favorite[0].hair_color}</h2>
                    </div>
                </div>
          
          </div>
        
                      ) 
                  )}
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">StarWars Planet</h2>
        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        {favoritePlanets.map((favorite, i) => (
          <div key={favorite._id} class="p-16">
                <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
                    <div class="m-2 text-justify text-sm">
                        <button onClick={() => removePlanetFav(favorite)}>X</button>
                        <h2 class="font-bold text-lg h-2 mb-8">Name : {favorite[0].name}</h2>
                        <h2 class="font-bold text-lg h-2 mb-8">Climate : {favorite[0].climate}</h2>
                        <h2 class="font-bold text-lg h-2 mb-8">Population : {favorite[0].population}</h2>
                    </div>
                </div>
          
          </div>
        
                      ) 
                  )}
        </div>

</div>
    )
}

export default FavoriteListing