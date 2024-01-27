import "./App.scss";
import Title from "./components/Title/Title";
import Carousel from "./components/Carousel";

function App() {
   return (
      <div className="App">
         <Title>Our Reviews</Title>

         <Carousel />
      </div>
   );
}

export default App;
