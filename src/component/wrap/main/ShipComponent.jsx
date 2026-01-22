import { useState } from "react";
export default function ShipComponent() {  
    //progress bar value 선언
    const [value, setValue] = useState(60);

    // 갤러리 이미지
    const images = [
        { src: "/images/photo_ship_001.png", alt: "1511함A-05" },
        { src: "/images/photo_ship_002.png", alt: "1511함A-05" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(prev => prev - 1);
    };

    const handleNext = () => {
        if (currentIndex === images.length - 1) return;
        setCurrentIndex(prev => prev + 1);
    };

    return(
        <section id="shipComponent">

            {/* 배정보 팝업 */}
            <div className="popupMap shipInfo">
                {/* header */}
                <div className="pmHeader">
                    <div className="rowL">
                        <i className="shipType"></i>
                        <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                        <span className="shipName">1511함A-05</span>
                        <span className="shipNum">13450135</span>
                    </div>
                    <button type="button" className="pmClose" aria-label="닫기"></button>
                </div>

                <div className="pmGallery">
                    <button
                        type="button"
                        className="navBtn prev"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <span className="blind">이전</span>
                    </button>
                    <button
                        type="button"
                        className="navBtn next"
                        onClick={handleNext}
                        disabled={currentIndex === images.length - 1}
                    >
                        <span className="blind">다음</span>
                    </button>

                    {/* 이미지 영역 */}
                    <div className="galleryView">
                        <img
                        className="galleryImg"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        />
                    </div>
                </div>
                {/* body */}
                <div className="pmBody">
                    <div className="shipAction">
                        <div className="rowL">
                            <button type="button" className="detailBtn">상세정보</button>
                            <ul className="shipTypeIco">
                                <li>A</li>
                                <li>V</li>
                                <li>E</li>
                                <li>T</li>
                                <li>D</li>
                                <li>R</li>
                            </ul>
                        </div>
                        <button type="button" className="favBtn" aria-label="즐겨찾기"></button>
                    </div>

                    <div className="shipRoute">
                        <div
                            className="routeProgress"
                            style={{ "--progress": value }}
                        >
                            <progress max="100" value={value}>{value}%</progress>
                            <span className="routeShip"></span>
                        </div>
                    </div>

                    <ul className="shipStatus">
                        <li className="port">
                            <div className="rowL">
                                <span className="portLabel">출항지</span>
                                <span className="portName">서귀포해양경찰서</span>
                            </div>
                            <div className="rowR">
                                <span className="portLabel">입항지</span>
                                <span className="portName">하태도</span>
                            </div>
                        </li>
                        <li className="schedule">
                            <div className="rowL">
                                <span className="depart">출항일시</span>
                                <span className="scheduleDate">2024-11-23 11:23:00</span>
                            </div>
                            <div className="rowR">
                                <span className="arrive">입항일시</span>
                                <span className="scheduleDate">2024-11-23 11:23:00</span>
                            </div>
                        </li>
                        <li className="status">
                            <div className="statusItem">
                                <span className="statusLabel">선박상태</span>
                                <span className="statusValue">정박</span>
                            </div>
                            <div className="statusItem w13r">
                                <span className="statusLabel">속도/항로</span>
                                <span className="statusValue">4.2 kn / 13.3˚</span>
                            </div>
                            <div className="statusItem">
                                <span className="statusLabel">흘수</span>
                                <span className="statusValue">1.1m</span>
                            </div>
                        </li>
                    </ul>
                    
                    {/* <ul className="shipSensor">
                        <li>
                            <span className="sensorLabel">AIS</span>
                            <span className="sensorValue"><i className="isNomal"></i>정상</span>
                        </li>
                        <li>
                            <span className="sensorLabel">RF</span>
                            <span className="sensorValue"><i className="isNomal"></i>정상</span>
                        </li>
                        <li>
                            <span className="sensorLabel">EO</span>
                            <span className="sensorValue"><i className="isNomal"></i>정상</span>
                        </li>
                        <li>
                            <span className="sensorLabel">SAR</span>
                            <span className="sensorValue"><i className="isOff"></i>비활성</span>
                        </li>
                    </ul> */}
                    <div className="btnWrap">
                        <button type="button" className="trackBtn">항적조회</button>
                        <button type="button" className="trackBtn">항로예측</button>
                    </div>
                </div>
                {/* footer */}
                <div className="pmFooter">데이터 수신시간 : 2024-11-23 11:23:00</div>
            </div>
        </section>
    )
}