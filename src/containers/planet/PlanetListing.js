import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import PlanetComponent from "./PlanetComponent";
import axios from 'axios';
import {setProducts} from "../../redux/actions/productsActions"

const PlanetListing = () => {
    
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
            const response = await axios.get("http://localhost:4242/planet").catch((err)=> {console.log(err)})
            console.log("IOC",response)
            dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])
  
    return(
        <div>
            <PlanetComponent/>    
        </div>
    )
}

export default PlanetListing