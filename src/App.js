import "./App.css";
import { useState } from "react";
import { Data } from "./components/Movies/Data";
import MoviesList from "./components/Movies/MoviesList";
import AddMovie from "./components/Movies/AddMovie";
import Filter from "./components/Movies/Navbar";
import { Route} from "react-router";
import { Switch } from "react-router";
import Trailler from "./components/Trailler";


function App() {
  const [movies, setMovies] = useState(Data);
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);

  const handleRate = (x) => {
    setRate(x);
  };

  const handleName = (e) => {
    // e.preventDefault()
    setName(e.target.value);
  };

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      
        <Switch>
          <Route
            exact
            path="/"
            render={() => 
              <div>
                
                <Filter handleName={handleName} handleRate={handleRate} />
                <MoviesList movies={movies} name={name} rate={rate} />
                <AddMovie add={add} />
                </div>} />
                <Route path="/Movie/:id" render={(props)=><Trailler movies ={movies} {...props}/>}/>
        </Switch>
     
    </div>
  );
}

export default App;
