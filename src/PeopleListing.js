import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import PeopleComponent from "./PeopleComponent";
import axios from 'axios';
import {setProducts} from "../../redux/actions/productsActions"
import space from "../../assets/sw_detail.jpg"



const PeopleListing = () => {
    
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
            const response = await axios.get("http://localhost:4242/people").catch((err)=> {console.log(err)})
            console.log("IOC",response)
            dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return(
        <div className="h-full ">
            <PeopleComponent className=""/>
        </div>
    )
}

export default PeopleListing