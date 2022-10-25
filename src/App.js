import './App.css';
import LinkBox from './containers/LinkBox';

function App() {
  return (
    <div className="App"> 

    <h1>Upcoming Film Releases for UK</h1>

    <hr></hr>
    
    <LinkBox/>
    
    <hr></hr>
    <a href="https://www.imdb.com/calendar/?region=gb">
    <input className="releases" type="url" id="upcoming_releases" value="View more upcoming releases>>"></input>
    </a>
    
    </div>
  );
}

export default App;
