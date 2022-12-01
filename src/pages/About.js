import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about grid-container">
      <h1>About App</h1>
      <p>DigiLoader is an app that contains some information about Digimon Card. This app was made as my Final Assignment of Mobile Device Programming. Twas created using React JS and a Digimon TCG API.</p>
      <h2>About Author</h2>
      <img src="foto.jpg" alt="author pic" />
      <p>The name's Luey, short for Aulya Thareeq Pravantawidya. By the time I made this app I am on my 5th semester</p>
    </div>
  );
}
