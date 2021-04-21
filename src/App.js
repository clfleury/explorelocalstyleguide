import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
      <div className="col-lg-5 App-header" style={{display: 'flex'}}>
      <header style={{height: '20%'}}>
        <p>
          EXPLORE<strong>LOCAL</strong>
        </p>
        <i style={{fontSize: '40px', lineHeight: '1', fontWeight: '600'}}>style guide</i>
      </header>
      <h1 style={{fontSize: '25px', fontWeight: 'bold', height: '5%'}}>PHILOSOPHY</h1>
      <hr />
      <h2><i>Explore localites are intrepid adventurers, learners, and teachers.</i></h2>
      <p>We are passionate about bringing otherwise disparate, obscured information about specific locations to prospective travelers from around the globe. In our stories, we relate our personal experiences, discuss local history, impart practical wayfinding information, and pursue the nuances of local ecosystems.</p>
      </div>
      </div>
      <div className="" style={{position: 'absolute', right: '0px', top: '0px', width: '40%'}}>
        <img src="/nature1.jpg" style={{maxWidth: '100%'}} />
      </div>
      <div className="" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', position: 'absolute', right: '0px', top: '0px', width: '50%', maxHeight: '100vh'}}>
        <img src="/nature2.jpg" style={{maxWidth: '100%', gridColumn: '1',
  gridRow: '2', marginTop: '-50px'}} />
        <img src="/nature3.jpg" style={{maxWidth: '100%', gridColumn: '2',
  gridRow: '2'}} />
      </div>
    </div>
  );
}

export default App;
