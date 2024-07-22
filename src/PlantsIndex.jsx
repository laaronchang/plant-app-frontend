export function PlantsIndex(props) {
  return (
    <div id="plants-index">
      <br />
      <br />
      <br />
      <h1>PLANTS</h1>
      <div className="containers">
      {props.plants.map(plant => (
        <div key={plant.id} className="plants container">
          <h2>{plant.name}</h2>
          <p>Species: {plant.species}</p>
          <img src ={plant.plant_image} />
          {/* <p>Sun: {plant.sun_amount}</p>
          <p>Water Per Week: {plant.days_water}</p>
          <p>Description: {plant.description}</p> */}
          <br />
          
          <button className="btn" onClick={() => props.onShowPlant(plant)}>More Info</button>
        </div>
      ))}
      </div>


    </div>
  );
}