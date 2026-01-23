import { Routes, Route } from "react-router-dom";
import TopComponent from "./main/TopComponent";  //메인 상단바

import ShipComponent from "./main/ShipComponent";               // 선박정보팝업
import Satellite1Component from "./main/Satellite1Component";   // 위성영상등록
import Satellite2Component from "./main/Satellite2Component";   // 위성사업자등록
import Satellite3Component from "./main/Satellite3Component";   // 위성관리등록
import Satellite4Component from "./main/Satellite4Component";   // 삭제
import WeatherComponent from "./main/WeatherComponent";         // 기상관측팝업
import Analysis1Component from "./main/Analysis1Component";     // 분석-관심해역설정
import Analysis2Component from "./main/Analysis2Component";     // 분석-관심해역설정입력
import Analysis3Component from "./main/Analysis3Component";     // 분석-관심해역분석등록
import Analysis4Component from "./main/Analysis4Component";     // 분석-해구도
import LayerComponent from "./main/LayerComponent";             // 레이어등록
import SignalComponent from "./main/Signal1Component";          // 신호설정
import Signal2Component from "./main/Signal2Component";         // 맞춤신호설정
import MyPageComponent from "./main/MyPageComponent";           // 마이페이지

export default function MainComponent() {
    return (
        <main id="main">
        <TopComponent />
        <Analysis4Component />
        
        <Routes>
            {/* 기본 화면 */}
            <Route path="*" element={<ShipComponent />} />
            <Route path="panel1/ship" element={<ShipComponent />} />

            <Route path="panel2/satellite/add" element={<Satellite1Component />} />
            <Route path="panel2/satellite/provider" element={<Satellite2Component />} />
            <Route path="panel2/satellite/manage" element={<Satellite3Component />} />
            <Route path="panel2/satellite/delete" element={<Satellite4Component />} />

            <Route path="panel3/weather" element={<WeatherComponent />} />

            <Route path="panel4/analysis/area" element={<Analysis1Component />} />
            <Route path="panel4/analysis/result" element={<Analysis2Component />} />
            <Route path="panel4/analysis/register" element={<Analysis3Component />} />
            <Route path="panel4/analysis/trench" element={<Analysis4Component />} />

            <Route path="display/layer/register" element={<LayerComponent />} />

            <Route path="signal" element={<SignalComponent />} />
            <Route path="signal/custom" element={<Signal2Component />} />

            <Route path="mypage" element={<MyPageComponent />} />
        </Routes>
        </main>
    );
}

