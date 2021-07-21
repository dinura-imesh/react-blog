import "./App.sass";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <div className={"router-wrapper"}>
                <Navbar/>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                        <Route path="/Blog:id">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
