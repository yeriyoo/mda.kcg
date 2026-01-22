import ToastComponent from "./main/ToastComponent";
import ShipComponent from "./main/ShipComponent";
import TopComponent from "./main/TopComponent";
import WeatherComponent from "./main/WeatherComponent";
import LayerComponent from "./main/LayerComponent";
import SignalComponent from "./main/Signal1Component"; //
import MyPageComponent from "./main/MyPageComponent";
import Signal2Component from "./main/Signal2Component";

export default function MainComponent() {    
    return(
        <main id="main">
            <TopComponent />
            <ShipComponent /> 
            {/* <WeatherComponent />  */}
            {/* <LayerComponent /> */}
            {/* <Signal1Component /> */}
            {/* <Signal2Component /> */}
            {/* <MyPageComponent /> */}
            {/* <ToastComponent />  추후개발 */}
        </main>
    )
}