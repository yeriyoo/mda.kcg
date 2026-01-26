
import { useNavigate } from "react-router-dom";

export default function TrackComponent() {  
    const navigate = useNavigate();

    return(
        <section className="TrackComponent">

            <div className="trackWrap">

                <button 
                type="button" 
                className="barCloseBtn"  
                aria-label="닫기"
                onClick={() => navigate("/main")}
                ></button>
                {/* 항적조회 검색바 */}
                <div className="trackControlBar">
                    <label>
                        <span>시간선택</span>
                        <input placeholder="" type="text" className="controlInput w15r"  aria-label="시작시간" /> ~
                        <input placeholder="" type="text" className="controlInput w15r" aria-label="종료시간" />
                    </label>
                    <label>
                        <span>재생주기</span>
                        <select className="controlSelect w16r">
                            <option value="">1초</option>
                        </select>
                    </label>
                    <button 
                        type="button" 
                        className="schRndBtn"
                    >검색</button>
                </div>

            </div>

        </section>
    )
}