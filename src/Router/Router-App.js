import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import Login from "../components/Pages/LoginPage"
import SearchingPage from "../components/Pages/SearchPage"

function RouterApp(){
    const isLogIn = localStorage.getItem("isLogIn")
    console.log(isLogIn)
    return (
        <Router>
            <Switch>
                <Route path="/searchsong">
                    {isLogIn ? (
                        <SearchingPage/> 
                    ) : (
                        <Redirect exact from="/searchsong" to="/" />
                    )}
                </Route>
                <Route exact path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterApp