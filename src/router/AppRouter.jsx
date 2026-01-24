import { Routes, Route, Navigate } from "react-router-dom";

import WrapComponent from "../component/WrapComponent";
import MainComponent from "../component/wrap/MainComponent";

/* main pages */
import EmptyMain from "../component/wrap/main/EmptyMain";
import ShipComponent from "../component/wrap/main/ShipComponent";
import Satellite1Component from "../component/wrap/main/Satellite1Component";
import Satellite2Component from "../component/wrap/main/Satellite2Component";
import Satellite3Component from "../component/wrap/main/Satellite3Component";
import Satellite4Component from "../component/wrap/main/Satellite4Component";
import WeatherComponent from "../component/wrap/main/WeatherComponent";
import Analysis1Component from "../component/wrap/main/Analysis1Component";
import Analysis2Component from "../component/wrap/main/Analysis2Component";
import Analysis3Component from "../component/wrap/main/Analysis3Component";
import Analysis4Component from "../component/wrap/main/Analysis4Component";
import LayerComponent from "../component/wrap/main/LayerComponent";
import SignalComponent from "../component/wrap/main/Signal1Component";
import Signal2Component from "../component/wrap/main/Signal2Component";
import MyPageComponent from "../component/wrap/main/MyPageComponent";

export default function AppRouter() {
  return (
    <Routes>
      {/* App Layout */}
      <Route path="/" element={<WrapComponent />}>
        {/* Main Layout */}
        <Route element={<MainComponent />}>

          {/* 기본진입 */}
          <Route index element={<EmptyMain />} />
          {/* /main - EmptyMain */}
          <Route path="main" element={<EmptyMain />} />
          
          {/* 선박 */}
          <Route path="ship" element={<ShipComponent />} />

          {/* 위성 */}
          <Route path="satellite">
            <Route path="add" element={<Satellite1Component />} />
            <Route path="provider" element={<Satellite2Component />} />
            <Route path="manage" element={<Satellite3Component />} />
            <Route path="delete" element={<Satellite4Component />} />
          </Route>

          {/* 기상 */}
          <Route path="weather" element={<WeatherComponent />} />

          {/* 분석 */}
          <Route path="analysis">
            <Route path="area" element={<Analysis1Component />} />
            <Route path="result" element={<Analysis2Component />} />
            <Route path="register" element={<Analysis3Component />} />
            <Route path="trench" element={<Analysis4Component />} />
          </Route>

          {/* 레이어 */}
          <Route path="layer/register" element={<LayerComponent />} />

          {/* 신호 */}
          <Route path="signal" element={<SignalComponent />} />
          <Route path="signal/custom" element={<Signal2Component />} />

          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPageComponent />} />
        </Route>
      </Route>
    </Routes>
  );
}
