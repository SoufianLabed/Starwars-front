import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import space from "../../assets/sw_detail.jpg"

import {
  selectedProduct
} from "../../redux/actions/productsActions";

const StarshipDetail = () => {
  
  const { starshipId } = useParams();
  let starship = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
     console.log("ici",`http://localhost:4242/starship/${id}`)
    const response = await axios
      .get(`http://localhost:4242/starship/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data)); 
  };

  useEffect(() => {
    if (starshipId && starshipId !== "") fetchProductDetail(starshipId);
  }, [starshipId]);


  return (
    <div className="h-screen">
      
      {Object.keys(starship).length === 0 ? (
        <div>...Loading</div>
      ) : (
          <div className="h-screen bg-auto bg-no-repeat bg-center  " style={{backgroundImage:`url(${space})`}}>                    
            <h1 className="font-bold text-white text-4xl text-center pt-10 ">{starship[0].name}</h1>
            <div className="md:w-4/12 h-auto bg-white ml-auto mr-auto rounded-xl mt-10 ">
              <div className="flex shadow-2xl pt-2 pb-2 "><div className="md:w-40 "><h1 className="md:ml-10  font-bold ">Planet ID</h1></div><h1 className="md:ml-48">{starship[0].id}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Model</h1> </div><h1 className="md:ml-48">{starship[0].name}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-40"><h1 className="md:ml-10 font-bold">Manufacturer</h1></div> <h1 className="md:ml-48">{starship[0].manufacturer}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Cost</h1> </div><h1 className="md:ml-48">{starship[0].cost_in_credits}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Length</h1> </div><h1 className="md:ml-48">{starship[0].length}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Starship Class</h1> </div><h1 className="md:ml-48">{starship[0].starship_class}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Crew</h1> </div><h1 className="md:ml-48">{starship[0].crew}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-40 "><h1 className="md:ml-10 font-bold">Cargo Capacity</h1> </div><h1 className="md:ml-48">{starship[0].cargo_capacity}</h1></div>
            </div>
          </div>
      )}
    </div>
  );
};

export default StarshipDetail;