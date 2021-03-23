import './App.css';
import Card from "./card";
import S_data from "./S_data";

function App() {
  return (
    <div>
      <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>
      <Card imgsrc={S_data[0].imgsrc} title={S_data[0].title} SName={S_data[0].SName} link={S_data[0].link}/>
      <Card imgsrc={S_data[1].imgsrc} title={S_data[1].title} SName={S_data[1].SName} link={S_data[1].link}/>
      <Card imgsrc={S_data[2].imgsrc} title={S_data[2].title} SName={S_data[2].SName} link={S_data[2].link}/>
      <Card imgsrc={S_data[3].imgsrc} title={S_data[3].title} SName={S_data[3].SName} link={S_data[3].link}/>
      <Card imgsrc={S_data[4].imgsrc} title={S_data[4].title} SName={S_data[4].SName} link={S_data[4].link}/>
    </div>
  );
}

export default App;
