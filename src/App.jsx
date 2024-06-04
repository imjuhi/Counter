import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/privacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="mybody">
      <center class="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div class="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Controls></Controls>
          </div>
        </Container>
      </center>
    </div>
  );
}

export default App;
