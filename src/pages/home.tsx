import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem("name", "saif");
    }
  }, [location.pathname]);
  return (
    <div>Home</div>
  )
}

export default Home