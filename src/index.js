import {render} from "react-dom";
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {

    return (
        <>
            <Navbar></Navbar>
            <Body></Body>
        </>
    )
}

const root = document.querySelector(".root")

render( App(), root);
