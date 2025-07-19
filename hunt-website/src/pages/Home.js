import React from 'react'

import GDSC_logo from '../components/GDSC_logo';
import Button from '../components/Button';

function Home() {
  return (
    <div className="column mobile-width">
      <GDSC_logo></GDSC_logo>

      <div className="title">
        Welcome
      </div>
      <p className="text-md center pb-md">
        Find all the GDG posters/markers around the campus, meeting all the iconic food that have made their way to ANU. Collect the most points and win prizes!
      </p>
      <Button  size={20} back_color="#4285F4" color="#FFFFFF" redirect={"https://gdganu-ar-hunt-camera.web.app/"}>Play Now</Button>
      <Button  size={15} redirect={"/Stats"}>Leaderboard</Button>
      <Button  size={15} redirect={"/Clues"}>Clues</Button>
      <Button  size={15} redirect={"/Rules"}>Rules / Tips</Button>
      <div className="pb-md"></div>

      <p className="text-sm center">
        © Google Developer Group on Campus - The Australian National University,<br/>
        with support from Google Developer Group on Campus - The University of Sydney.
      </p>

    </div>
  )
}

export default Home