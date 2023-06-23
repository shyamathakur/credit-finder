import React from 'react';
import Login from './Loging-form-div/Login';
import Aboutus from './About-Us/Aboutus';
import TodayCard from './today-card/TodayCard';
import Featured from './Featured-Credit/Featured';
import Credite from './Credit-Journey/Credite';
import Categories from './Categories/Categories';
import First from "./First-Div/First"
import  Footer  from "./Footer/Footer"

function Home() {

  return (
    <div>
      <First />
      <Categories />
      <Credite />
      <Featured />
      <TodayCard/>
      <Aboutus/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default Home;