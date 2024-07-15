export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants - PlantsIndex.jsx</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
        <h2>{plant.name}</h2>
        <p>Species: {plant.species}</p>
        {/* <p>image: {plant.plant_image}</p> */}
        {/* <img src="https://plants.sc.egov.usda.gov/ImageLibrary/standard/alstr_001_svp.jpg"></img> */}
        <img src ={plant.plant_image} />
        <p>Sun: {plant.sun_amount}</p>
        <p>Water Per Week: {plant.days_water}</p>
        <p>Description: {plant.description}</p>
        <button onClick={() => props.onShowPlant(plant)}>More Info</button>
        </div>
      ))}
    </div>
  );
}