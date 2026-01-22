import HeaderComponent from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import SideComponent from "./wrap/SideComponent";
import ToolComponent from "./wrap/ToolComponent";
import { Routes, Route} from 'react-router-dom';

export default function WrapComponent(){
    return(
        <div id="wrap" className="wrap">
            <HeaderComponent />
            <SideComponent />
            <MainComponent />
            <ToolComponent />
        </div>
    )
}