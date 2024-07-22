export function PlantsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlant(props.plant.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.onDestroyPlant(props.plant.id);
  }

  return (
    <div>
      <h1>Plant information</h1>
      <p>Name: {props.plant.name}</p>
      <p>Species: {props.plant.species}</p>
      <br />
      <img src ={props.plant.plant_image} />
      <p>Amount of Sun: {props.plant.sun_amount}</p>
      <p>Days A Week To Water: {props.plant.days_water}</p>
      <br />
      <p>Description: {props.plant.description}</p>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.plant.name} name="name" type="text" />
        </div>
        <div>
          Species: <input defaultValue={props.plant.species} name="species" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.plant.plant_image} name="plant_image" type="text" />
        </div>
        <div>
          Amount of Sun: <input defaultValue={props.plant.sun_amount} name="sun_amount" type="text" />
        </div>
        <div>
          Days to Water: <input defaultValue={props.plant.days_water} name="days_water" type="integer" />
        </div>
        <div>
          Description: <input defaultValue={props.plant.description} name="description" type="text" />
        </div>
        <br />
        <button type="submit">Update Plant</button>
      </form>
      <br />
      <button onClick={handleClick}>Delete Plant</button>
    </div>
  )
}