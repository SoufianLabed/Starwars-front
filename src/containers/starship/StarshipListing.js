import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from 'axios';
import {setProducts} from "../../redux/actions/productsActions"
import StarshipComponent from './StarshipComponent'


const StarshipListing = () => {
    
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
            const response = await axios.get("https://back-starwars.herokuapp.com/starship").catch((err)=> {console.log(err)})
            console.log("IOC",response)
            dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return(
        <div className="">
            <StarshipComponent/>
        </div>
    )
}

export default StarshipListing