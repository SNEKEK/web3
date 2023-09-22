import vinci from "../logoVinci.png";

const Header = (props) => {
    return (<header><a href="https://www.vinci.be/fr"><img src = {vinci} alt = "logo vinci"/></a><h1>{props.courseName}</h1></header>)
}

export default Header;