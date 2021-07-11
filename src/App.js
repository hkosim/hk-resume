import React, { useRef, useState, useEffect } from "react";

import './App.css';
// import en_flag from './img/uk.png';
// import de_flag from './img/ger.png';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

//COMPONENTS
import Body from './components/Body';
import input_data from './components/Data';

function App() {

  const [sideNavWidth, setSideNavWidth] = useState(["4em", "0em"]);
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState(input_data.title);
  const [bodyData, setBodyData] = useState([]);
  const [language, setLanguage] = useState("en");

  const changeLanguage_ = (e) => {
    setLanguage(e.target.value);
    toggleNav()
  }

  const node = useRef();
  const toggleNav = () => {
    let newState = sideNavWidth[0]==="4em"? ["8em", "4em"]:["4em", "0"];
    setIsOpen(!isOpen)
    setSideNavWidth(newState);
  };
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click: close navbar
    toggleNav();
  };
  
  //will run only once!!!
  useEffect(() => {
    // SET BODY DATA
    setBodyData(input_data.en.data);
  }, [])

  // CLICK OUTSIDE NAVBAR
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  //updates everytime the language changes
  useEffect(()=>{
    setBodyData(input_data[language]["data"])
    setTitle(input_data[language]['title'])
  }, [language])

  return (
    <div>
      {/* test sidenav */}
      <div className="sidenav"
        ref={node}
        style={{
          width:sideNavWidth[0],
        }}
      >
        <div
          className="sidenav-button"
        >
          <button type="button"
            className="btn btn-primary"
            onClick={e => toggleNav()}
          > &#9776; </button>
        </div>
        <div
          className="sidenav-content"
          style={{
            width:sideNavWidth[1],
          }}
        >
          <select
            onChange={changeLanguage_}
            style={{
              fontSize:'1.3em',
            }}
            value={language}
          >
            <option onClick={e => toggleNav()} value="en">EN</option>
            <option onClick={e => toggleNav()} value="de">DE</option>
          </select>
        </div>
      </div>
      {/* NAVBAR */}
      
      {/* end of navbar */}
      <Container className="bg">
          {/* MAIN TITLE */}
        <div className="main-title">
          {title}
        </div>
        {/* <Header 
          headerData={headerData}
        /> */}

        {/* multiple content */}
        {
          bodyData.map((box, idx)=>{
            //if it's a body (content)
              return(
                <Body
                  key={idx}
                  subtitle={box.subtitle}
                  boxData = {box.contents}
                />
              );
          })
        }
      </Container>
    </div>
  );
}

export default App;
