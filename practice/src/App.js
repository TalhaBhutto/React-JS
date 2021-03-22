import './App.css';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Card imgsrc="/images/CI1.jpg" SName="Sacred Games" link=""/>
      <Card imgsrc="/images/CI2.jpg" SName="Mirzapur" link=""/>
      <Card imgsrc="/images/CI3.jpg" SName="Money Heist" link=""/>
      <Card imgsrc="/images/CI4.jpg" SName="Dark" link=""/>
      <Card imgsrc="/images/CI5.jpg" SName="Ertugrul" link=""/>
    </div>
  );
}

export default App;
