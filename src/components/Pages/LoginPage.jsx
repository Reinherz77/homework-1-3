import auth from "../../auth/auth";
import './LoginPage.css'

function Login() {
    return(
        <div className="login">
            <p className="title-login">Silahkan Login terlebih dahulu</p>
            <button className="btn-login" onClick={auth}>LOGIN</button>
        </div>
    )
}

export default Login