import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signal2Component() {
    const navigate = useNavigate();

    // 아코디언 상태 (3개, 초기 모두 열림)
    const [accordionOpen, setAccordionOpen] = useState({
        signal1: true,
        signal2: true,
        signal3: true,
    });

    const toggleAccordion = (key) => {
        setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section id="SignalComponent">

            {/* 신호설정 팝업 */}
            <div className="popupUtillWrap">
                <div className="popupUtill">
                    <div className="puHeader">
                    <span className="title">맞춤 설정</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={() => navigate("/main")}
                    />
                    </div>

                    <div className="puBody">
                        {/* 아코디언그룹 01 */}
                        <div className="accordionWrap">
                            <div className="acdHeader">
                                <span className="title">NLL 고속 선박 탐지</span>
                                <button
                                    type="button"
                                    className={`toggleListBtn ${accordionOpen.signal1 ? 'open' : ''}`}
                                    onClick={() => toggleAccordion('signal1')}
                                    aria-expanded={accordionOpen.signal1}
                                    aria-label={accordionOpen.signal1 ? '접기' : '펼치기'}
                                ></button>
                            </div>
                            {/* 여기서부터 아코디언 */}
                            <div className={`acdListBox ${accordionOpen.signal1 ? 'open' : ''}`}>
                                <ul className="acdList input">
                                    <li className="state">
                                        <label className="radio radioL"> <input type="radio" name="state1" /> <span>사용</span></label>
                                        <label className="radio radioL"> <input type="radio" name="state1" /> <span>미사용</span></label>
                                    </li>
                                    <li className="input">
                                        <label>
                                            <span>SOG 기준</span>
                                            <input type="text" placeholder="" />
                                        </label>
                                    </li>
                                    <li className="input">
                                        <label>
                                            <span>COG 기준</span>
                                            <input type="text" placeholder="" />
                                        </label>
                                    </li>
                                    <li className="input">
                                        <label>
                                            <span>유지시간(분)</span>
                                            <input type="text" placeholder="" />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            {/* 여기까지 */}
                        </div>

                        {/* 아코디언그룹 02 */}
                        <div className="accordionWrap">
                            <div className="acdHeader">
                                <span className="title">특정 어업수역 탐지</span>
                                <button
                                    type="button"
                                    className={`toggleListBtn ${accordionOpen.signal2 ? 'open' : ''}`}
                                    onClick={() => toggleAccordion('signal2')}
                                    aria-expanded={accordionOpen.signal2}
                                    aria-label={accordionOpen.signal2 ? '접기' : '펼치기'}
                                ></button>
                            </div>
                            {/* 여기서부터 아코디언 */}
                            <div className={`acdListBox ${accordionOpen.signal2 ? 'open' : ''}`}>
                                <ul className="acdList check">
                                    <li className="state">
                                        <label className="radio radioL"> <input type="radio" name="state2" /> <span>사용</span></label>
                                        <label className="radio radioL"> <input type="radio" name="state2" /> <span>미사용</span></label>
                                    </li>
                                    <li className="check">
                                        <label className="checkbox checkL"><input type="checkbox" /><span>특정 어업수역 I</span></label>
                                    </li>
                                    <li className="check">
                                        <label className="checkbox checkL"><input type="checkbox" /><span>특정 어업수역 II</span></label>
                                    </li>
                                    <li className="check">
                                        <label className="checkbox checkL"><input type="checkbox" /><span>특정 어업수역 III</span></label>
                                    </li>
                                    <li className="check">
                                        <label className="checkbox checkL"><input type="checkbox" /><span>특정 어업수역 IV</span></label>
                                    </li>
                                </ul>
                            </div>
                            {/* 여기까지 */}
                        </div>

                        {/* 아코디언그룹 03 */}
                        <div className="accordionWrap">
                            <div className="acdHeader">
                                <span className="title">위험화물 식별</span>
                                <button
                                    type="button"
                                    className={`toggleListBtn ${accordionOpen.signal3 ? 'open' : ''}`}
                                    onClick={() => toggleAccordion('signal3')}
                                    aria-expanded={accordionOpen.signal3}
                                    aria-label={accordionOpen.signal1 ? '접기' : '펼치기'}
                                ></button>
                            </div>
                            {/* 여기서부터 아코디언 */}
                            <div className={`acdListBox ${accordionOpen.signal3 ? 'open' : ''}`}>
                                <ul className="acdList">
                                    <li className="state">
                                        <label className="radio radioL"> <input type="radio" name="state3" /> <span>사용</span></label>
                                        <label className="radio radioL"> <input type="radio" name="state3" /> <span>미사용</span></label>
                                    </li>
                                </ul>
                            </div>
                            {/* 여기까지 */}
                        </div>
                    </div>

                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button type="button" className="btn basic">저장</button>
                            <button type="button" className="btn dark">초기화</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  );
}
