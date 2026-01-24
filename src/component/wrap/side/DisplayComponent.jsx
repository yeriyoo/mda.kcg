import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Slider from '../../common/Slider';

export default function DisplayComponent({ isOpen, onToggle }) {
    const navigate = useNavigate();

    // 투명도
    const [opacity, setOpacity] = useState(70);

    // 아코디언
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(true); // 기존
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(true); // 
    const [isAccordionOpen3, setIsAccordionOpen3] = useState(true); // 
    const [isAccordionOpen4, setIsAccordionOpen4] = useState(false); // 

    const toggleAccordion1 = () => setIsAccordionOpen1(prev => !prev);
    const toggleAccordion2 = () => setIsAccordionOpen2(prev => !prev);
    const toggleAccordion3 = () => setIsAccordionOpen3(prev => !prev);
    const toggleAccordion4 = () => setIsAccordionOpen4(prev => !prev);

    // 탭이동
    const [activeTab, setActiveTab] = useState('filter');

    const tabs = [
        { id: 'filter', label: '필터' },
        { id: 'layer', label: '레이어' },
    ];
    return (
        <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}>
        {/* 탭 버튼 */}
        <div className="tabBox p0">
            <div className="tabDefault borderLess">
            {tabs.map(tab => (
                <button
                key={tab.id}
                type="button"
                className={activeTab === tab.id ? 'on' : ''}
                onClick={() => setActiveTab(tab.id)}
                >
                {tab.label}
                </button>
            ))}
            </div>
        </div>

        {/* 탭 콘텐츠 01 */}
        <div className={`tabWrap scrollY ${activeTab === 'filter' ? 'is-active' : ''}`}>

            <div className="tabWrapInner">
                <div className="tabWrapCnt">

                    {/* 스위치그룹 01 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>신호</span>
                                <label className="switch"> <input type="checkbox" aria-label="신호"/> <span></span></label>
                            </div>
                            <button
                                type="button"
                                className={`toggleBtn ${isAccordionOpen1 ? 'is-open' : ''}`}
                                aria-expanded={isAccordionOpen1}
                                onClick={toggleAccordion1}
                                ></button>
                        </div>
                        {/* 여기서부터 토글 */}
                        <div className={`switchBox ${isAccordionOpen1 ? 'is-open' : ''}`}>
                        <ul className="switchList">
                            <li>
                                <span>AIS</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="AIS" /> <span></span></label>
                            </li>
                            <li>
                                <span>V-PASS</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="V-PASS" /> <span></span></label>
                            </li>
                            <li>
                                <span>VTS_AIS</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="VTS_AIS" /> <span></span></label>
                            </li>
                            <li>
                                <span>D_MF_HF</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="D_MF_HF" /> <span></span></label>
                            </li>
                            <li>
                                <span>VTS_RADAR</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="VTS_RADAR" /> <span></span></label>
                            </li>
                        </ul>
                        </div>
                        {/* 여기까지 */}
                    </div>

                    {/* 스위치그룹 02 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>선종/기종</span>
                                <label className="switch"> <input type="checkbox" aria-label="선종/기종" /> <span></span></label>
                            </div>
                            <button
                                type="button"
                                className={`toggleBtn ${isAccordionOpen2 ? 'is-open' : ''}`}
                                aria-expanded={isAccordionOpen2}
                                onClick={toggleAccordion2}
                                ></button>
                        </div>
                        {/* 여기서부터 토글 */}
                        <div className={`switchBox ${isAccordionOpen2 ? 'is-open' : ''}`}>
                        <ul className="switchList">
                            <li>
                                <span>어선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="어선" /> <span></span></label>
                            </li>
                            <li>
                                <span>여객선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="여객선" /> <span></span></label>
                            </li>
                            <li>
                                <span>화물선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="화물선" /> <span></span></label>
                            </li>
                            <li>
                                <span>유조선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="유조선" /> <span></span></label>
                            </li>
                            <li>
                                <span>관공선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="관공선" /> <span></span></label>
                            </li>
                            <li>
                                <span>함정</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="함정" /> <span></span></label>
                            </li>
                            <li>
                                <span>항공기</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="항공기" /> <span></span></label>
                            </li>
                            <li>
                                <span>기타</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="기타" /> <span></span></label>
                            </li>
                        </ul>
                        </div>
                        {/* 여기까지 */}
                    </div>

                    {/* 스위치그룹 03 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>국적</span>
                                <label className="switch"> <input type="checkbox" aria-label="국적" /> <span></span></label>
                            </div>
                            <button
                                type="button"
                                className={`toggleBtn ${isAccordionOpen3 ? 'is-open' : ''}`}
                                aria-expanded={isAccordionOpen3}
                                onClick={toggleAccordion3}
                                ></button>
                        </div>
                        {/* 여기서부터 토글 */}
                        <div className={`switchBox ${isAccordionOpen3 ? 'is-open' : ''}`}>
                        <ul className="switchList">
                            <li>
                                <span>한국</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="한국" /> <span></span></label>
                            </li>
                            <li>
                                <span>중국</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="중국" /> <span></span></label>
                            </li>
                            <li>
                                <span>일본</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="일본" /> <span></span></label>
                            </li>
                            <li>
                                <span>북한</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="북한" /> <span></span></label>
                            </li>
                            <li>
                                <span>기타</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="기타" /> <span></span></label>
                            </li>
                        </ul>
                        </div>
                        {/* 여기까지 */}
                    </div>
                    {/* 스위치그룹 04 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>AI 모드</span>
                                <label className="switch"> <input type="checkbox" aria-label="AI 모드" /> <span></span></label>
                            </div>
                            <button
                                type="button"
                                className={`toggleBtn ${isAccordionOpen4 ? 'is-open' : ''}`}
                                aria-expanded={isAccordionOpen4}
                                onClick={toggleAccordion4}
                                ></button>
                        </div>
                        {/* 여기서부터 토글 */}
                        <div className={`switchBox ${isAccordionOpen4 ? 'is-open' : ''}`}>
                        <ul className="switchList">
                            <li>
                                <span>MMSI 변조</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="MMSI 변조" /> <span></span></label>
                            </li>
                            <li>
                                <span>중국 허가선박</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="중국 허가선박" /> <span></span></label>
                            </li>
                            <li>
                                <span>관공선</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="관공선" /> <span></span></label>
                            </li>
                            <li>
                                <span>비정상 접촉</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="비정상 접촉" /> <span></span></label>
                            </li>
                            <li>
                                <span>비정상 선박</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="비정상 선박" /> <span></span></label>
                            </li>
                            <li>
                                <span>북한선박</span>
                                <label className="switch sm"> <input type="checkbox" aria-label="북한선박" /> <span></span></label>
                            </li>
                        </ul>
                        </div>
                        {/* 여기까지 */}
                    </div>

                    {/* 스위치그룹 05 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>다크시그널</span>
                            </div>
                            <label className="switch"> <input type="checkbox" aria-label="다크시그널" /> <span></span></label>
                        </div>
                    </div>

                    {/* 스위치그룹 06 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <span>위험물</span>
                            </div>
                            <label className="switch"> <input type="checkbox" aria-label="위험물" /> <span></span></label>
                        </div>
                    </div>

                    {/* 스위치그룹 07 */}
                    <div className="switchGroup">
                        <div className="sgHeader">
                            <div className="colL">
                                <i className="favship"></i>
                                <span>관심선박</span>
                            </div>
                            <label className="switch"> <input type="checkbox" aria-label="관심선박" /> <span></span></label>
                        </div>
                    </div>
                </div>

                {/* 버튼영역 */}
                <div className="btnBox">
                    <button type="button" className="btn btnLine">저장</button>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'layer' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">레이어</div>
            </div>

            <div className="tabBtm noLine">
                <div className="tabBtmInner">
                    <ul className="lineList tabBtmCnt">
                        <li className="rowSB">
                            <label className="checkbox checkL">
                                <input type="checkbox" />
                                <span>배경지도</span>
                            </label>
                            <div className="row">
                                <span>투명도 조절</span>
                                <div>
                                <Slider label="투명도 조절" />
                                </div>
                            </div>
                        </li>
                        <li className="p0">
                            <ul className="optionList">
                                <li>
                                    <span>전자해도</span>
                                    <label className="radio"> <input type="radio" name="map" aria-label="전자해도" /> <span></span></label>
                                </li>
                                <li>
                                    <span>일반지도</span>
                                    <label className="radio"> <input type="radio" name="map" aria-label="일반지도" /> <span></span></label>
                                </li>
                                <li>
                                    <span>영상지도</span>
                                    <label className="radio"> <input type="radio" name="map" aria-label="영상지도" /> <span></span></label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label className="checkbox checkL">
                                <input type="checkbox" />
                                <span>해경관할구역</span>
                            </label>
                        </li>
                        <li>
                            <label className="checkbox checkL">
                                <input type="checkbox" />
                                <span>검문검색위치</span>
                            </label>
                        </li>
                    </ul>
                    <div className='btnBox'>
                        <button 
                        type="button" 
                        className="btn btnLine w15r"
                        onClick={() => navigate("/layer/register")}
                        >레이어 등록</button>
                    </div>
                </div>
            </div>
        </div>

        {/* 사이드패널 토글버튼 */}
        <button
            type="button"
            className="toogle"
            aria-expanded={isOpen}
            onClick={onToggle}
        >
            <span className="blind">
            {isOpen ? '패널 접기' : '패널 열기'}
            </span>
        </button>
        </aside>
    );
}
