import "./styles.css";
import Button from "./components/CustomButtonComponent";
import SearchBar from "./components/SearchBar";
import Jumbotron from "./components/Jumbotron";
export default function App() {
  return (
    <div className="App">
      <Jumbotron nest="4" title="hello" />
      <Button
        border="none"
        color="pink"
        height="30px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius="10%"
        width="60px"
        children="Hi"
      />
      <SearchBar />
    </div>
  );
}
