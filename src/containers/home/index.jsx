import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * This is the container for the home page
 */
const Home = () => {
  const navigate = useNavigate()
   
  useEffect(() => {
    navigate('/calculation')
  }, [navigate])

  return (
    <div className="home-page">
    </div>
  );
};

export default Home;
