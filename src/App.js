import './App.css';
import Header from "./containers/Header"
import space from "./assets/sw.jpg"
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import PeopleListing from './containers/people/PeopleListing';
import PeopleDetails from './containers/people/PeopleDetail';
import PlanetListing from './containers/planet/PlanetListing';
import StarshipListing from './containers/starship/StarshipListing';
import StarshipDetail from './containers/starship/StarshipDetail';
import PlanetDetail from './containers/planet/PlanetDetail'
import React, {useState, useEffect} from 'react'
import fire from './fire'
import Login from './Login'
import FavoriteListing from './containers/favorite/FavoriteListing'




function App() {

  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAcount] = useState('');

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  

  const handleLogin = () => {

      clearErrors();
      fire
          .auth()
          .signInWithEmailAndPassword(email,password)
          .catch(err => {
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message)
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
            }
          })
  }

  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
     
          setEmailError(err.message)
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })

  }

  const handleLogout = () => {
    fire.auth().signOut();
  } 

  const authListener = () => {
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs()
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

useEffect(()=>{
  authListener();
},[])

  return (
    
    <Router>
      <div >
        <div>
          {user ? (
            <>
              <Header handleLogout={handleLogout}/>
                <div className='' >    
                  <Switch>
                    <Route  path="/planet" exact component={PlanetListing}/>
                    <Route path="/planet/:planetId" exact component={PlanetDetail}/>               
                    <Route path="/" exact component={PeopleListing}/>
                    <Route path="/people/:peopleId" exact component={PeopleDetails}/>                
                    <Route path="/starship/:starshipId" exact component={StarshipDetail}/>
                    <Route path="/starship/" exact component={StarshipListing}/>
                    <Route path="/favorite/" exact component={FavoriteListing}/>
                    <Route>ERROR TEST</Route> 
                  </Switch>
                </div>
                
            </>
                  ): (

            <>
              <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}  handleLogin={handleLogin}  handleLogout={handleLogout} handleSignup={handleSignup} hasAccount={hasAccount} setHasAcount={setHasAcount} emailError={emailError} passwordError={passwordError}/>
            </>
                  )
            }
        </div>
      </div>
    </Router>
  
  );
}

export default App;
