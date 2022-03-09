import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import storm from '../assets/storm.png';
import planet from '../assets/planet.png';
import out from '../assets/out.png';
import starship from '../assets/starship.png';
import coeur from '../assets/coeur.png'


const Header = ({handleLogout}) =>{

    return(
      <div
          style={{       
          background: "#4c5265"          
          }}
          className="shadow-xl font-dosis fixed left-0 mt-12 w-16 h-auto z-40  rounded-r-lg border-solid border-2 border-black   " >
        <div className="mx-auto  text-center">
          <div className="text-white text-xl    ">
            <span className="cursor-pointer block border-b border-black mt-auto mb-auto  " >
              <Link to={`/`}>
                <LazyLoadImage width={50} className="mt-3 mb-3"  effect="blur" src={storm} alt={"link.alt"} />
              </Link>

              <Link to="/planet">
                <LazyLoadImage width={35} className="mt-3 mb-3"  effect="blur" src={planet} alt={"link.alt"} />
              </Link>
                      
              <Link to="/starship">
                <LazyLoadImage width={40} className="mt-3 mb-3"  effect="blur" src={starship} alt={"link.alt"} />
              </Link> 

              <Link to="/favorite">
                <LazyLoadImage width={40} className="mt-3 mb-3"  effect="blur" src={coeur} alt={"link.alt"} />
              </Link> 
                      
              <LazyLoadImage onClick={handleLogout} width={35} className="mt-3 mb-3"  effect="blur" src={out} alt={"link.alt"} />
              </span>      
          </div>
        </div>
      </div>
  
    )
};

export default Header;