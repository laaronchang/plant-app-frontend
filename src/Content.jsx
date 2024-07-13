import { PlantsIndex  } from "./PlantsIndex";
import axios from "axios";
import { useState, useEffect } from "react";


export function Content() {
  const [plants, setPlants] = useState([]);

  const handlePlantsIndex = () => {
    console.log("handlePlantsIndex");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  }

  useEffect(handlePlantsIndex, []);

  return (
    <main>
      <h1>Welcome to Plants! Content.jsx</h1>
      <PlantsIndex plants={plants}/>
    </main>
  )
}