// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="item-cont">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1>{eachPlanet.name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
