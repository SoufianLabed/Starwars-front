import React, {useEffect, useState} from "react";
//import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import storm from '../../assets/storm.png';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import space from "../../assets/sw.jpg"


const PeopleComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const peoples = useSelector((state)=> state.allProducts.products);

    const addFav = (people) => {
      let peoples = []
      if(JSON.parse(localStorage.getItem('peoples') != null)){
       peoples = JSON.parse(localStorage.getItem('peoples'))
      }
      if(!peoples.includes(people.id)){
        localStorage.setItem("peoples", JSON.stringify([...peoples,people.id]));
      }
      console.log(localStorage.getItem('peoples'))
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = peoples.filter(people =>
            people.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm,peoples]);

    return (  
            <div className="bg-white">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">StarWars Caracter</h2>
                <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200    rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" type="text" placeholder="Add people" value={searchTerm} onChange={handleChange}/>
                {searchTerm !== '' ? 
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {searchResults.map((people, i) => (
                    <div key={people._id} className="group relative">
                      <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none text-center">
                        <div className="h-full  bg-white rounded-3xl border-solid border-4 border-blue-900">
                          <div className=""><h1 className="mt-3 font-bold text-3xl">{people.name}</h1></div>
                          <div className=" border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium ">Gender</p><h1 className="ml-1/5 mx-16">{people.gender}</h1></div>
                          <div className="border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium">Hair Color</p><h1 className="ml-1/5 mx-16">{people.hair_color}</h1></div>
                          <div className="text-xl mt-1  text-xl"><p className="text-2xl font-medium">Eye Color</p><h1 className="ml-1/5 mx-16">{people.eye_color}</h1></div>
                          <Button onClick={() => addFav(people)}>Add to Favorite</Button>
                        </div>
                      </div>
                    </div>
                      ) 
                  )}
                  </div>
                  :
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {peoples.map((people, i) => (
                    <div key={people._id} className="group relative">
                      <div className ="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none text-center">
                        <div className="h-full  bg-white rounded-3xl border-solid border-4 border-blue-900">
                        <div className=""><h1 className="mt-3 font-bold text-3xl">{people.name}</h1></div>
                        <div className=" border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium ">Gender</p><h1 className="ml-1/5 mx-16">{people.gender}</h1></div>
                        <div className="border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium">Hair Color</p><h1 className="ml-1/5 mx-16">{people.hair_color}</h1></div>
                        <div className="text-xl mt-1  text-xl"><p className="text-2xl font-medium">Eye Color</p><h1 className="ml-1/5 mx-16">{people.eye_color}</h1></div>
                        <Button onClick={() => addFav(people)}>Add to Favorite</Button>
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

export default PeopleComponent