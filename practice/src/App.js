import './App.css';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Card imgsrc="/images/CI1.jpg" SName="Sacred Games" link="https://www.netflix.com/pk/title/80115328"/>
      <Card imgsrc="/images/CI2.jpg" SName="Mirzapur" link="https://www.amazon.com/Mirzapur-Season-1/dp/B086VXR733"/>
      <Card imgsrc="/images/CI3.jpg" SName="Money Heist" link="https://www.netflix.com/pk/title/80192098"/>
      <Card imgsrc="/images/CI4.jpg" SName="Dark" link="https://www.netflix.com/pk/title/80100172"/>
      <Card imgsrc="/images/CI5.jpg" SName="Ertugrul" link=""/>
    </div>
  );
}

export default App;
