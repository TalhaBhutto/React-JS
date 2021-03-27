import './App.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <h1 className="text-center"> Welcome to my website</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="card m-2" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200/150" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card m-2" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200/150" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm">
    <div className="card m-2" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200/150" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  </div>
</div>
    </div>
  );
}

export default App;
