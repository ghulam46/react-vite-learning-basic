import "../App.css";

function Planets() {
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true}
    ];

    return(
        <div className="App">
            {planets.map((planet, key) => {
                if(planet.isGasPlanet) return <h1 key={key}>{planet.name}</h1>
            })}
        </div>
    );
}

export default Planets;