import "./App.sass";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogPost from "./views/BlogView/BlogPost";
import {Provider} from 'react-redux'
import store from "./redux/store";
import Error from "./views/Error/Error";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <div className={"inner-wrapper"}>
                    <Router>
                        <Navbar/>
                        <div className={"content-wrapper"}>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/blog-post/:id">
                                    <BlogPost/>
                                </Route>
                                <Route path="/error">
                                    <Error/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </Provider>
    );
}

export default App;
