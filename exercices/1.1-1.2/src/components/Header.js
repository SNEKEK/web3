import vinci from "../logoVinci.png";

const Header = (props) => {
    return (<div><a href="https://www.vinci.be/fr"><img src = {vinci} alt = "logo vinci"/></a><h1>{props.courseName}</h1></div>)
}

export default Header;