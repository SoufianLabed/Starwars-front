import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import space from "../../assets/sw_detail.jpg"



import {
  selectedProduct,
} from "../../redux/actions/productsActions";


const PeopleDetails = () => {
  
  const { peopleId } = useParams();
  let people = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
     console.log("ici",`http://localhost:4242/people/${id}`)
    const response = await axios
      .get(`http://localhost:4242/people/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (peopleId && peopleId !== "") fetchProductDetail(peopleId);
  }, [peopleId]);

 
  
  return (
    <div className="h-screen bg-auto bg-no-repeat bg-center  " style={{backgroundImage:`url(${space})`}} > 
      
      {Object.keys(people).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className=" ">
          <h1 className="font-bold text-white text-4xl text-center pt-10 ">{people[0].name}</h1>
          <div className="w-4/12 h-auto bg-white ml-auto mr-auto rounded-xl mt-20  ">
            <div className="flex shadow-2xl pt-2 pb-2  "><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Soldat ID</h1></div><h1 className="md:ml-60">{people[0].id}</h1></div>
            <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Height</h1> </div><h1 className="md:ml-60">{people[0].height}</h1></div>
            <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32"><h1 className="md:ml-10 font-bold">Mass</h1></div> <h1 className="md:ml-60">{people[0].mass}</h1></div>
            <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Birth Year</h1> </div><h1 className="md:ml-60">{people[0].birth_year}</h1></div>
            <div className="flex shadow-2xl  pt-2 pb-2 "><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Hair Color</h1> </div><h1 className="md:ml-60">{people[0].hair_color}</h1></div>
            <div className="flex shadow-2xl  pt-2 pb-2"><div className="md:w-32 "><h1 className="md:ml-10 font-bold">Skin Color</h1> </div><h1 className="md:ml-60">{people[0].skin_color}</h1></div>
          </div>
      
        </div>
      )}
    </div>
  );
};

export default PeopleDetails;