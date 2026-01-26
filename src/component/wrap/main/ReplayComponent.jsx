
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReplayComponent() {  
    const navigate = useNavigate();

    const max = 100;
    const [value, setValue] = useState(30);

    const percent = (value / max) * 100;

    return(
        <section className="ReplayComponent">

            <div className="replayWrap">
                <button 
                type="button" 
                className="barCloseBtn"  
                aria-label="닫기"
                onClick={() => navigate("/main")}
                ></button>

                <div className="replayControlBar">
                    {/* 재생상태 컨트롤 */}
                    <div className="control">
                        <div className="ctrL">
                            <button
                                type="button"
                                className="playBtn"
                                aria-label="플레이"
                            ></button>
                            <select className="controlSelect w8r" aria-label="재생속도 선택">
                                <option value="">2.0X</option>
                            </select>
                        </div>

                        <div className="playProgress">
                            <input
                                type="range"
                                className="playRange"
                                min="0"
                                max={max}
                                aria-label="재생 위치"
                                value={value}
                                onChange={(e) => setValue(Number(e.target.value))}
                                style={{
                                background: `linear-gradient(
                                    to right,
                                    #FF0000 0%,
                                    #FF0000 ${percent}%,
                                    #D7DBEC ${percent}%,
                                    #D7DBEC 100%
                                )`
                                }}
                            />
                            <div className="timeLabel">
                                2023-08-20&nbsp;&nbsp;10:15:30
                            </div>
                        </div>

                        <div className="ctrR">
                            <button
                                type="button"
                                className="captureBtn"
                                aria-label="캡쳐"
                            ></button>
                            <button
                                type="button"
                                className="stopBtn"
                                aria-label="정지"
                            ></button>
                        </div>

                    </div>
                    {/* 재생옵션 영역 */}
                    <div className="option">
                        <label>
                            <span>재생기간</span>
                            <select className="controlSelect w8r">
                                <option value="">어제</option>
                            </select>
                            <input placeholder="" type="text" className="controlInput w14r" /> ~
                            <input placeholder="" type="text" className="controlInput w14r" />
                        </label>
                        <label>
                            <span>표출정보</span>
                            <button
                                type="button"
                                className="trackRndBtn"
                            >항적</button>
                        </label>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}