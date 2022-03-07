import { useEffect, useState } from "react";
import FetchGetSample from "./fethSample/FetchGetSample";
import FetchPostSample from "./fethSample/FetchPostSample";
import MemoSample from "./Memohook/MemoSample";
import RefHookSample from "./RefHook/RefHookSample";
import StateSample from "./stateSample/StateSample";

function App() {

  const [cities, setCities] = useState(['İzmir', 'İstanbul']);
  const [city, setCity] = useState('')

  console.log('App component rendered!');

  const addCity = () => {

    setCities([...cities, city])

  }



  return (
    <>
      <FetchPostSample></FetchPostSample>
      {/* <StateSample></StateSample> */}
      {/* <RefHookSample></RefHookSample> */}
      {/* <MemoSample></MemoSample> */}
      {/* <FetchGetSample></FetchGetSample> */}
      {/* <ul>
        {
          cities && cities.map((item, key) => {
            return (<li>{item}</li>)
          })
        }
        <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />

        <button onClick={() => addCity()}>Add City</button>
      </ul> */}

    </>
  );
}

export default App;
