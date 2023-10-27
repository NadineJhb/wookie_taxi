import axios from "axios";
import { useEffect, useState } from "react";

function DriversCard() {
  const [peoples, setPeoples] = useState([]);
  const array = [
    "https://swapi.dev/api/people",
    "https://swapi.dev/api/people/?page=2",
    //  "https://swapi.dev/api/people/?page=3",
    //  "https://swapi.dev/api/people/?page=4",
    //  "https://swapi.dev/api/people/?page=5",
    //  "https://swapi.dev/api/people/?page=6",
    //  "https://swapi.dev/api/people/?page=7",
    //  "https://swapi.dev/api/people/?page=8",
    //  "https://swapi.dev/api/people/?page=9",
  ];

  useEffect(() => {
    axios
      .all(array.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        // console.log(data[0]);

        const characters = [];
        for (let i = 0; i < data.length; i += 1) {
          // console.log(data[i].data.results[1].name);
          for (let k = 0; k < 10; k += 1) {
            console.info(data[i].data.results[k]);
            // console.log(data[i].data.results[k]);
            characters.push(data[i].data.results[k]);

            setPeoples(characters);
          }
        }
      })
      .catch((err) => console.info(err));
  }, []);
  return (
    <div>
      {peoples.length === 0 ? (
        <p>Tableau vide</p>
      ) : (
        peoples.map((people) => {
          return (
            <div key={people.name} className="body">
              <div className="peoples">
                <div className="name"> name: {people.name}</div>
                <div className="genre"> genre: {people.gender}</div>
                <div className="taille"> taille: {people.height}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DriversCard;
