export default function WeatherComponent() {  
    return(
        <section id="WeatherComponent">

            {/* 지도위 팝업 */}
            <div className="popupMap osbInfo">
                {/* header */}
                <div className="pmHeader">
                    <div className="rowL">
                        <span className="title">해양관측소</span>
                    </div>
                    <button type="button" className="pmClose" aria-label="닫기"></button>
                </div>
                {/* body */}
                <div className="pmBody">

                    <ul className="osbStatus">
                        <li className="date">
                            2023.10.16    20:54
                        </li>
                        <li>
                            <span className="label">조위</span>
                            <span className="value">251(cm)</span>
                        </li>
                        <li>
                            <span className="label">수온</span>
                            <span className="value">19.6(°C)</span>
                        </li>
                        <li>
                            <span className="label">염분</span>
                            <span className="value">31.8(PSU)</span>
                        </li>
                        <li>
                            <span className="label">기온</span>
                            <span className="value">16.9(°C)</span>
                        </li>
                        <li>
                            <span className="label">기압</span>
                            <span className="value">1016.6(hPa)</span>
                        </li>
                        <li>
                            <span className="label">풍향</span>
                            <span className="value">315(deg)</span>
                        </li>
                        <li>
                            <span className="label">풍속</span>
                            <span className="value">7.1(m/s)</span>
                        </li>
                        <li>
                            <span className="label">유속방향</span>
                            <span className="value">-(deg)</span>
                        </li>
                        <li>
                            <span className="label">유속</span>
                            <span className="value">-(m/s)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}