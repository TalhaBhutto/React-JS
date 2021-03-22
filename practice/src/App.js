import './App.css';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Card imgsrc="/images/CI1.jpg" title="A Netflix Original Series" SName="Sacred Games" link="https://www.netflix.com/pk/title/80115328"/>
      <Card imgsrc="/images/CI2.jpg" title="An Amazon Prime Series" SName="Mirzapur" link="https://www.amazon.com/Mirzapur-Season-1/dp/B086VXR733"/>
      <Card imgsrc="/images/CI3.jpg" title="A Netflix Original Series" SName="Money Heist" link="https://www.netflix.com/pk/title/80192098"/>
      <Card imgsrc="/images/CI4.jpg" title="A Netflix Original Series" SName="Dark" link="https://www.netflix.com/pk/title/80100172"/>
      <Card imgsrc="/images/CI5.jpg" title="A Netflix Original Series" SName="Ertugrul" link="https://www.netflix.com/pk/title/80127001"/>
    </div>
  );
}

export default App;
