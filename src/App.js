import Home from "./Components/Home";
import {Routes,Route} from "react-router-dom";
import List from "./Components/List";
import Details from "./Components/Details";
import Transaction from "./Components/Transaction";
import Appintro from "./Components/intro/Appintro";
function App() {
  return (
  <div>
      <Routes>
        <Route path="/" element={<Appintro/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/lists/:source/:destination/:date" element={<List/>}/>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/transaction/:seatprice/:id" element={<Transaction/>} />
     </Routes>
      
  </div>
  );
}

export default App;
