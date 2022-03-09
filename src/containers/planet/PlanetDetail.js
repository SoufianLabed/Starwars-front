import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import space from "../../assets/sw_detail.jpg"

import {
  selectedProduct,

} from "../../redux/actions/productsActions";



const PlanetDetail = () => {
  
  const { planetId } = useParams();
  let planet = useSelector((state) => state.product);
  
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:4242/planet/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (planetId && planetId !== "") fetchProductDetail(planetId);
   
  }, [planetId]);
  return (
    <div  className="h-screen bg-auto bg-no-repeat bg-center  " style={{backgroundImage:`url(${space})`}}>
      {Object.keys(planet).length === 0 ? (
        <div>...Loading</div>
      ) : (
          <div>         
            <h1 className="font-bold text-white text-4xl text-center pt-10 ">{planet[0].name}</h1>
            <div className="w-4/12 h-auto bg-white ml-auto mr-auto rounded-xl mt-10 ">
              <div className="flex shadow-2xl pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Planet ID</h1></div><h1 className="md:ml-60">{planet[0].id}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Name</h1> </div><h1 className="md:ml-60">{planet[0].name}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32"><h1 className="md:ml-10 font-bold">Population</h1></div> <h1 className="md:ml-60">{planet[0].population}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Diameter</h1> </div><h1 className="md:ml-60">{planet[0].diameter}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Climate</h1> </div><h1 className="md:ml-60">{planet[0].climate}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Terrain</h1> </div><h1 className="md:ml-60">{planet[0].terrain}</h1></div>
              <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Rotation Period</h1> </div><h1 className="md:ml-60">{planet[0].orbital_period}</h1></div>
            </div>
        </div>
      )}
    </div>
  );
};

export default PlanetDetail;