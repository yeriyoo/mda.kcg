import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Slider from '../../common/Slider';

export default function Panel2Component({ isOpen, onToggle }) {
    const navigate = useNavigate();

    // 아코디언
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false); // 기존
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false); // 새 아코디언

    const toggleAccordion1 = () => setIsAccordionOpen1(prev => !prev);
    const toggleAccordion2 = () => setIsAccordionOpen2(prev => !prev);

    // 탭이동
    const [activeTab, setActiveTab] = useState('ship01');

    const tabs = [
        { id: 'ship01', label: '위성영상 관리' },
        { id: 'ship02', label: '위성사업자 관리' },
        { id: 'ship03', label: '위성 관리' },
    ];
    return (
        <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}>
        {/* 탭 버튼 */}
        <div className="tabBox">
            <div className="tabDefault">
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
        <div className={`tabWrap ${activeTab === 'ship01' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">위성영상 관리</div>
                
                <div className="formGroup">
                    <ul>
                        <li>
                            <div className="label">
                                <span>영상 촬영일</span>
                                <div className="labelRow">
                                    <input className="dateInput" placeholder="연도-월-일" type="text" aria-label="시작일" />
                                    <span>-</span>
                                    <input className="dateInput" placeholder="연도-월-일" type="text" aria-label="종료일" />
                                </div>
                            </div>
                        </li>
                        <li className={`accordion ${isAccordionOpen1 ? 'is-open' : ''}`}>
                        {/* 아코디언 1 */}
                        <ul>
                        <li>
                            <label>
                                <span>영상 종류</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">VIRS</option>
                                    <option value="">ICEYE_SAR</option>
                                    <option value="">광학</option>
                                    <option value="">예약</option>
                                    <option value="">RF</option>
                                </select>
                            </label>
                            <label>
                                <span>영상 출처</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">국내/자동</option>
                                    <option value="">국내/수동</option>
                                    <option value="">국외/수동</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>위성 궤도</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">저궤도</option>
                                    <option value="">중궤도</option>
                                    <option value="">정지궤도</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                            <label>
                                <span>주기</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">0</option>
                                    <option value="">10</option>
                                    <option value="">30</option>
                                    <option value="">60</option>
                                </select>
                            </label>
                        </li>
                        </ul>
                        {/* 여기까지 아코디언1 */}
                        </li>
                        <li>
                            <label>
                                <span>위성영상명</span>
                                <input type="text" placeholder="위성영상명" />
                            </label>
                        </li>
                        <li>
                            <button
                            type="button"
                            className={`btn btnS semi btnToggle ${isAccordionOpen1 ? 'is-open' : ''}`}
                            aria-expanded={isAccordionOpen1}
                            onClick={toggleAccordion1}
                            >
                            상세검색 
                            {isAccordionOpen1 ? ' 닫기' : ' 열기'}
                            </button>
                        </li>
                        <li className="fgBtn rowSB">
                            <>
                                <div className="row gap10">
                                    <span>투명도</span>
                                    <div>
                                    <Slider label="투명도 조절" />
                                    </div>
                                </div>
                                <div className="row gap10">
                                    <span>밝기</span>
                                    <div>
                                    <Slider label="밝기 조절" />
                                    </div>
                                </div>
                            </>
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm noSc">
            
                <div className="tabBtmInner">
                    {/* 스크롤영역 */}
                    <div className="tabBtmCnt">
                        <div className="detailWrap">
                            {/* 위성정보 박스 */}
                            <ul className="detailBox stretch">
                                <li className="dbHeader">
                                    <div className="headerL item2">
                                        <span className="name">업로드 테스트</span>
                                        <span className="type">2025-09-25 16:09:00</span>
                                    </div>
                                </li>
                                <li>
                                    <ul className="dbList">
                                        <li>
                                            <span className="label">위성명</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                        <li>
                                            <span className="label">위성영상파일</span>
                                            <span className="value">mda:fae19b9b-e99e-4794- a305-bce6d537ac36_remark_ resized_2022_0102_1709_npp_DNB_750</span>
                                        </li>
                                        <li>
                                            <span className="label">위성명</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                        <li>
                                            <span className="label">영상 출처</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                    </ul>
                                    <div className="btnArea">
                                        <button type="button" className="btnEdit" aria-label="수정"></button>
                                        <button type="button" className="btnDel" aria-label="삭제"  onClick={() => navigate("/satellite/delete")}></button>
                                        <button type="button" className="btnMap" aria-label="지도"></button>
                                    </div>
                                </li>
                            </ul>


                            {/* 위성정보 박스 */}
                            <ul className="detailBox stretch">
                                <li className="dbHeader">
                                    <div className="headerL item2">
                                        <span className="name">업로드 테스트</span>
                                        <span className="type">2025-09-25 16:09:00</span>
                                    </div>
                                </li>
                                <li>
                                    <ul className="dbList">
                                        <li>
                                            <span className="label">위성명</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                        <li>
                                            <span className="label">위성영상파일</span>
                                            <span className="value">mda:fae19b9b-e99e-4794- a305-bce6d537ac36_remark_ resized_2022_0102_1709_npp_DNB_750</span>
                                        </li>
                                        <li>
                                            <span className="label">위성명</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                        <li>
                                            <span className="label">영상 출처</span>
                                            <span className="value">VIRS</span>
                                        </li>
                                    </ul>
                                    <div className="btnArea">
                                        <button type="button" className="btnEdit" aria-label="수정"></button>
                                        <button type="button" className="btnDel" aria-label="삭제"  onClick={() => navigate("/satellite/delete")}></button>
                                        <button type="button" className="btnMap" aria-label="지도"></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 하단버튼 영역 */}
                    <div className="btnBox rowSB">
                        <button type="button" className="btn btnLine">위성영상 폴더 업로드</button>
                        <button type="button" className="btn btnLine" onClick={() => navigate("/satellite/add")}>위성영상 등록</button>
                    </div>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'ship02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">위성사업자 관리</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>사업자 분류</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">국가</option>
                                    <option value="">연구기관</option>
                                    <option value="">민간사업자</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                            <label>
                                <span>사업자명</span>
                                <input type="text" placeholder="사업자명" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm noSc">
            
                <div className="tabBtmInner">
                    {/* 스크롤영역 */}
                    <div className="tabBtmCnt">
                        <div className="detailWrap">
                            {/* 위성정보 박스 */}
                            <ul className="detailBox">
                                <li className="dbHeader">
                                    <div className="headerL item1">
                                        <span className="name">Test 01</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="label">사업자 분류</span>
                                    <span className="value">국가</span>
                                </li>
                                <li>
                                    <span className="label">국가</span>
                                    <span className="value">대한민국</span>
                                </li>
                                <li>
                                    <span className="label">소재지</span>
                                    <span className="value">test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 하단버튼 영역 */}
                    <div className="btnBox">
                        <button 
                        type="button" 
                        className="btn btnLine" 
                        onClick={() => navigate("/satellite/provider")}
                        >
                        등록
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 03 */}
        <div className={`tabWrap ${activeTab === 'ship03' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">위성 관리</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>사업자 분류</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">국가</option>
                                    <option value="">연구기관</option>
                                    <option value="">민간사업자</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                            <label>
                                <span>센서 타입</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">광학</option>
                                    <option value="">SAR</option>
                                    <option value="">RF</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>위성명</span>
                                <input type="text" placeholder="위성명" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm noSc">
            
                <div className="tabBtmInner">
                    {/* 스크롤영역 */}
                    <div className="tabBtmCnt">
                        <div className="detailWrap">
                            {/* 위성정보 박스 */}
                            <ul className="detailBox">
                                <li>
                                    <span className="label">사업자명</span>
                                    <span className="value">국토지리정보원</span>
                                </li>
                                <li>
                                    <span className="label">위성명</span>
                                    <span className="value">국가</span>
                                </li>
                                <li>
                                    <span className="label">센서 타입</span>
                                    <span className="value">test</span>
                                </li>
                                <li>
                                    <span className="label">촬영 해상도</span>
                                    <span className="value"></span>
                                </li>
                            </ul>
                            
                            {/* 위성정보 박스 */}
                            <ul className="detailBox">
                                <li>
                                    <span className="label">사업자명</span>
                                    <span className="value">국토지리정보원</span>
                                </li>
                                <li>
                                    <span className="label">위성명</span>
                                    <span className="value">국가</span>
                                </li>
                                <li>
                                    <span className="label">센서 타입</span>
                                    <span className="value">test</span>
                                </li>
                                <li>
                                    <span className="label">촬영 해상도</span>
                                    <span className="value"></span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    {/* 하단버튼 영역 */}
                    <div className="btnBox">
                        <button 
                        type="button" 
                        className="btn btnLine" 
                        onClick={() => navigate("/satellite/manage")}
                        >
                        등록
                        </button>
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
