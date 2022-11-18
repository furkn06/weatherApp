import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";
import background from "./hvdrm.webp";

function App() {
  const key = "1637f541c2f8d22419494efd2643018d";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
   
    <div style={{height:"100vh", width:"100%",backgroundSize:"cover", backgroundImage: `url(${background})` }}>
    <div className="App">
    <h1 style={{fontSize:"50px",color:"red"}}>HAVA DURUMU</h1>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border-8 bg-slate-500 m-4"
          type="text"
          style={{borderRadios:"80px",width:"20%",height:"60px",marginTop:"80px",fontSize:"22px",color:"white"}}
        />
    
        <City city={city} />
      </div>
    </div>
 </div>
  );
}

export default App;
