import { useState } from "react"
export default function ToolComponent() {    
    const [isLegendOpen, setIsLegendOpen] = useState(false);
    
    return(
        <section id="tool">
            {/* 툴바 */}
            <div className="toolBar">
                <ul className="toolItem space">
                    <li><button type="button" className="tool01">초기화</button></li>
                    <li><button type="button" className="tool02">선박통합</button></li>
                    <li><button type="button" className="tool03">구역설정</button></li>
                </ul>
                <ul className="toolItem mt30">
                    <li><button type="button" className="tool04">거리</button></li>
                    <li><button type="button" className="tool05">면적</button></li>
                    <li><button type="button" className="tool06">거리환</button></li>
                </ul>
                <ul className="toolItem space mt30">
                    <li><button type="button" className="tool07">인쇄</button></li>
                    <li><button type="button" className="tool08">다운로드</button></li>
                </ul>
            </div>
            {/* 맵컨트롤 툴바 */}
            <div className="control">
                <ul className="toolItem zoom">
                    <li><button type="button" className="zoomin" title="확대"><span className="blind">확대</span></button></li>
                    <li className="num">7</li>
                    <li><button type="button" className="zoomout" title="축소"><span className="blind">축소</span></button></li>
                </ul>
                <ul className="toolItem space mt30">
                    <li><button
                        type="button"
                        className={`legend ${isLegendOpen ? "active" : ""}`}
                        onClick={() => setIsLegendOpen(prev => !prev)}
                        >
                        범례</button>
                    </li>
                    <li><button type="button" className="minimap">미니맵</button></li>
                </ul>
            </div>
            {/* 범례 */}
            {isLegendOpen && (
                <div className="legendWrap">
                    <ul className="legendList">
                        <li className="legendItem">
                            <span className="legendLabel"><img src="/images/ico_legend_all.svg" alt="통합" />통합</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_china.svg" alt="중국어선" />중국어선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_china_permit.svg" alt="중국어선허가" />중국어선허가</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_japan.svg" alt="일본어선" />일본어선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_danger.svg" alt="위험물" />위험물</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_passenger.svg" alt="여객선" />여객선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_vessel.svg" alt="함정" />함정</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_vessel_radar.svg" alt="함정-RADAR" />함정-RADAR</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_general.svg" alt="일반" />일반</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_vts_general.svg" alt="VTS-일반" />VTS-일반</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_vts_radar.svg" alt="VTS-RADAR" />VTS-RADAR</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_vpass.svg" alt="VPASS일반" />VPASS일반</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_enav_fishing.svg" alt="ENAV어선" />ENAV어선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_enav_danger.svg" alt="ENAV위험물" />ENAV위험물</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_enav_cargo.svg" alt="ENAV화물선" />ENAV화물선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_enav_government.svg" alt="ENAV관공선" />ENAV관공선</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_enav_general.svg" alt="ENAV일반" />ENAV일반</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_dmfhf.svg" alt="D-MF/HF" />D-MF/HF</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_aircraft.svg" alt="항공기" />항공기</span>
                            <span className="legendValue">0</span>
                        </li>
                        <li>
                            <span className="legendLabel"><img src="/images/ico_legend_nll.svg" alt="NLL" />NLL</span>
                            <span className="legendValue">0</span>
                        </li>
                    </ul>
                </div>
            )}
        </section>
    )
}