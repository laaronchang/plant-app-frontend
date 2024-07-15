export function PlantsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FOrmData(event.target);
    props.onUpdatePlant(props.plant.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPlant(props.plant.id);
  };

  return (
    <div>
      <h1>Plant information</h1>
      <p>Name: {props.plant.name}</p>
      <p>Species: {props.plant.species}</p>
      <img src ={props.plant.plant_image} />
      <p>Sun: {props.plant.sun_amount}</p>
      <p>Water Per Week: {props.plant.days_water}</p>
      <p>Description: {props.plant.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.plant.name} name="name" type="text" />
        </div>
        <div>
          Species: <input name="species" type="text" />
        </div>
        <div>
          Image Url: <input name="plant_image" type="text" />
        </div>
        <div>
          Amount of Sun: <input name="sun_amount" type="text" />
        </div>
        <div>
          Days to Water: <input name="days_water" type="integer" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Update Plant</button>
      </form>
      <button onClick={handleClick}>Delete Plant</button>
    </div>
  );
}