import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";


export function Content() {
  const [plants, setPlants] = useState([]);

  const handlePlantsIndex = () => {
    console.log("handlePlantsIndex");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  }

  const handleCreatePlant = (params, successCallback) => {
    console.log("handleCreatePlant", params);
    axios.post("http://localhost:3000/plants.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
  };

  useEffect(handlePlantsIndex, []);

  return (
    <main>
      <h1>Welcome to Plants! Content.jsx</h1>
      <PlantsNew onCreatePlant={handleCreatePlant} />
      <PlantsIndex plants={plants}/>
    </main>
  )
}