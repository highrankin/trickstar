import React from "react";
import ReactDOM from "react-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import PostForm from "./postForm";
import PostList from "./PostList";
import AdForm from "./adForm";
import AdsList from './adsList'


function App() {
  return (
    <div className="App">
      <h1>Trickstar Schedule</h1>
      
      <h3>Add a show...</h3>
      <p>Make sure show times are kept to the same format of 11:00 - 12:00 or it will look rubbish. </p>
     <p> You can not use quotation marks in the Show And Host input box. </p>
   
    <PostForm />
   <PostList />
   <h3>Add some ads... </h3>
   <p>The adID must be a number and accent upwards from 1. Do not leave spaces between numbers. So make sure it runs 1, 2, 3 4, 5, etc.</p>
   <AdForm />
   <AdsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
