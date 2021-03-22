import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DDate= new Date().toLocaleDateString();
const TTime= new Date().toLocaleTimeString();
const name="Talha";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/230/300";
const img3="https://picsum.photos/255/300";
const img4="https://picsum.photos/280/300";
const img5="https://picsum.photos/300/300";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <ol>
      <li>Titanic</li>
      <li>3 Idiots</li>
      <li>PK</li>
      <li>Kuch Kuch Hota Hay</li>
      <li>Bol</li>
    </ol>

    <p>Current Date : {DDate}</p>
    <p>Current Time : {TTime}</p>
    <hr></hr>
    <h1 contentEditable="true" className="heading">Hi my name is {name} and this is my image gallery</h1>
    <div className="Img_Div">
    <a href="https://picsum.photos/"><img src={img1} /></a>
    <img src={img2} />
    <img src={img3} />
    <img src={img4} />
    <img src={img5} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
