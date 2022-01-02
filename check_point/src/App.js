import './App.css';
import img from "./imageInSrc.jpg"
import trailer from './myvideo.mp4'

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1px black", maxWidth:"100vw"}}>
         <h1 className="title red">Marwen</h1>
         <br />
         <h1> Drogo and Dany in src folder </h1>
         <img style = {{width: "1345px", height: "auto"}} src={img} />
         <br />
         <h1> Night king in public folder </h1>
         <img style = {{width: "1345px", height: "auto"}} src="/imageInPublic.jpg" />
      </div>
        <video width="1280" height="720">
          <source type="video/mp4" controls src={trailer} />
        </video>
    </div>
  );
}

export default App;
