export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants - PlantsIndex.jsx</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
        <h2>{plant.name}</h2>
        <p>species: {plant.species}</p>
        {/* <p>image: {plant.plant_image}</p> */}
        <img src="https://plants.sc.egov.usda.gov/ImageLibrary/standard/alstr_001_svp.jpg"></img>
        <p>Sun: {plant.sun_amount}</p>
        <p>Water: {plant.days_water}</p>
        <p>Description: {plant.description}</p>
        </div>
      ))}
    </div>
  );
}