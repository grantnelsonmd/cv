import React, {useState} from "react";
import Footer from "./Footer";
import Title from "./Title";
import Window from "./Window";
import Button from "./Button";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [state, setState] = useState("");

  function buttonClicked(button){
    setState(button.name);
  }

  function renderPage(currentState){
    switch(currentState){
      case "PROJECTS":
        console.log("switched to projects");
        return <Window />;
      case "ABOUT":
        console.log("switched to about");
        return <About />;
      case "CONTACT":
        console.log("switched to contact");
        return <Contact />;
      default:
        return;
    }
  }

  return (
    <div>
        <div className="position-absolute top-50 start-0 end-0 translate-middle-y" id="main-container">
          <div className="row row-cols-2 h-100">
            <div className="col-md-3 my-auto">
              <Title />
              <Button handleClick={buttonClicked} name="PROJECTS" />
              <Button handleClick={buttonClicked} name="ABOUT" />
              <Button handleClick={buttonClicked} name="CONTACT" />
            </div>
            <div className="col-md-9">
              {renderPage(state)}
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
