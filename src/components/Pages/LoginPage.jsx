// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { saveMyToken } from "../../redux/tokenAction";
import auth from "../../auth/auth";

function Login() {
    return(
        <div className="Login">
            <p>Silahkan Login terlebih dahulu</p>
            <button onClick={auth}>LOGIN</button>
        </div>
    )
}

export default Login