import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meals from "./components/Meals";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meals/>
    </div>
  );
}

export default App;
