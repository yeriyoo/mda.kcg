import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Panel1DetailComponent from './Panel1DetailComponent';

export default function Panel1Component({ isOpen, onToggle }) {
    // 내부 뷰 상태
    const [view, setView] = useState('list'); // list | detail
    
    // 아코디언
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false); // 기존
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false); // 새 아코디언

    const toggleAccordion1 = () => setIsAccordionOpen1(prev => !prev);
    const toggleAccordion2 = () => setIsAccordionOpen2(prev => !prev);

    // 탭이동
    const [activeTab, setActiveTab] = useState('ship01');

    const tabs = [
        { id: 'ship01', label: '선박검색' },
        { id: 'ship02', label: '허가선박' },
        { id: 'ship03', label: '제재단속' },
        { id: 'ship04', label: '침몰선박' },
        { id: 'ship05', label: '선박입출항' },
        { id: 'ship06', label: '관심선박' }
    ];
    return (
        <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}>

        {/* 👉 상세 화면일 때 */}
        {view === 'detail' ? (
        <Panel1DetailComponent
            isOpen={isOpen}
            onToggle={onToggle}
            onBack={() => setView('list')}
        />
        ) : (
        <>
        {/* ===== 목록 화면 ===== */}

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
            <div className="title">선박 검색</div>

            <div className="formGroup">
                <ul>
                    <li>
                        <label>
                            <span>선종</span>
                            <select>
                                <option value="">전체</option>
                                <option value="">어선</option>
                                <option value="">함정</option>
                                <option value="">여객선</option>
                                <option value="">카고</option>
                                <option value="">탱커</option>
                                <option value="">관공선</option>
                                <option value="">기타</option>
                                <option value="">낚시어선</option>
                            </select>
                        </label>
                        <label>
                            <span>국적</span>
                            <select>
                                <option value="">전체</option>
                                <option value="">한국</option>
                                <option value="">미국</option>
                                <option value="">중국</option>
                                <option value="">일본</option>
                                <option value="">북한</option>
                                <option value="">기타</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span>타겟ID</span>
                            <input type="text" placeholder="타겟ID" />
                        </label>
                        <label>
                            <span>선박명</span>
                            <input type="text" placeholder="선박명" />
                        </label>
                    </li>
                    {/* 아코디언 1 */}
                    <div className={`accordion ${isAccordionOpen1 ? 'is-open' : ''}`}>
                        <li>
                            <label>
                                <span>위험물</span>
                                <input type="text" placeholder="타겟ID" />
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" />
                                <span className="w70">MMSI / 호출부호 변경이력</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>승선원수</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>-</span>
                                    
                                    <div className="numInput">
                                        <input type="number" placeholder="최대" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>너비(m)</span>
                                <div className="numInput">
                                    <input type="number" placeholder="최소" min="" max="" />
                                    <div className="spin">
                                        <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                        <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                    </div>
                                </div>
                            </label>
                        </li>
                    </div>
                    {/* 여기까지 아코디언1 */}
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
                    <li className="fgBtn">
                        <button type="button" className="schBtn">검색</button>
                    </li>
                </ul>
            </div>

            {/* <div className="schbox mtb24">
                <ul>
                <li>
                    <input type="text" className="schInput" placeholder="대표검도" />
                </li>
                <li>
                    <button type="button" className="schBtn">검색</button>
                </li>
                </ul>
            </div> */}
            </div>

            <div className="tabBtm">
            <ul className="colList line">
                <li>
                <Link to="/" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle red"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle orng"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'ship02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">허가선박</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>타겟 ID</span>
                                <input type="text" placeholder="타겟 ID" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
                <div className="detailWrap">
                    {/* 선박정보 박스 */}
                    <ul className="detailBox">
                        <li className="dbHeader">
                            <div className="headerL">
                                <span className="name">ZHELINGYU29801</span>
                                <span className="type">Fishing</span>
                            </div>
                            <div className="headerR">
                                <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                                <span className="num">412</span>
                                <button
                                    type="button"
                                    className="icoArrow"
                                    aria-label="상세보기"
                                    onClick={() => setView('detail')}
                                ></button>
                            </div>
                        </li>
                        <li>
                            <span className="label">타겟 ID</span>
                            <span className="value">412417712</span>
                        </li>
                        <li>
                            <span className="label">주정박항</span>
                            <span className="value">zhelingyu29801</span>
                        </li>
                        <li>
                            <span className="label">어획할당량</span>
                            <span className="value">100(ton)</span>
                        </li>
                        <li>
                            <span className="label">조업수역구역</span>
                            <span className="value">Ⅱ, Ⅲ</span>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>

        {/* 탭 콘텐츠 03 */}
        <div className={`tabWrap ${activeTab === 'ship03' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">제재단속</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>제재 유형</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">고래포획 의심</option>
                                    <option value="">UN 제재</option>
                                    <option value="">위반행위 규제 정보</option>
                                    <option value="">불법 선박</option>
                                    <option value="">음주 운항 이력</option>
                                    <option value="">다잡아 처분 선박</option>
                                    <option value="">어획량 위반</option>
                                    <option value="">조업 일지 위반</option>
                                    <option value="">망목 내경 미준수</option>
                                    <option value="">입출역 미통보</option>
                                    <option value="">선박서류 미비치</option>
                                    <option value="">어구위반</option>
                                    <option value="">허가 중/표지판 위반</option>
                                    <option value="">어획물 전재 위반</option>
                                    <option value="">선원수첩 등 신분증명서 위반</option>
                                    <option value="">정선 명령 위반</option>
                                    <option value="">어구 설치 후 조업수역 이탈</option>
                                    <option value="">어획물 운반선 체크포인트 제도 위반</option>
                                    <option value="">포획 채취 금지 체장 위반 어획물 포획</option>
                                    <option value="">조업수역 위반</option>
                                    <option value="">조업 기간 위반</option>
                                    <option value="">어창 용적 위반</option>
                                    <option value="">어창 용적 위반</option>
                                    <option value="">메모</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="colList line">
                <li>
                <Link to="/" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 04 */}
        <div className={`tabWrap ${activeTab === 'ship04' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">침몰선박</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>사고기간</span>
                                <div className='labelRow'>
                                <input type="text" className="dateInput" placeholder="연도-월-일" />
                                 <span>-</span>
                                 <input type="text"className="dateInput" placeholder="연도-월-일" /></div>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>사고내용</span>
                                <input type="text" placeholder="사고내용" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="colList line">
                <li>
                <Link to="/" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 05 */}
        <div className={`tabWrap ${activeTab === 'ship05' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">선박입출항</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>출항일시</span>
                                <input type="text" className="dateInput" placeholder="연도-월-일 - -:-" />
                            </label>
                            <label>
                                <span>~ 입항일시</span>
                                <input type="text" className="dateInput" placeholder="연도-월-일 - -:-" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>PMS<br/>출항항구</span>
                                <select>
                                    <option value="">전체</option>
                                </select>
                            </label>
                            <label>
                                <span>PMS<br/>입항항구</span>
                                <select>
                                    <option value="">전체</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>SIE<br/>출항항구</span>
                                <select>
                                    <option value="">전체</option>
                                </select>
                            </label>
                            <label>
                                <span>SIE<br/>입항항구</span>
                                <select>
                                    <option value="">전체</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>타겟ID</span>
                                <input type="text" placeholder="타겟ID" />
                            </label>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        {/* 여기부터 아코디언 */}
                        <div className={`accordion ${isAccordionOpen2 ? 'is-open' : ''}`}>
                        <li>
                            <label>
                                <span>낚시여부</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">미선택</option>
                                    <option value="">선택</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>최대<br/>적재톤수</span>
                                <input type="text" placeholder="0" />
                            </label>
                            <label>
                                <span>최소<br/>적재톤수</span>
                                <input type="text" placeholder="0" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>최대<br/>승선원</span>
                                <input type="text" placeholder="0" />
                            </label>
                            <label>
                                <span>최소<br/>승선원</span>
                                <input type="text" placeholder="0" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>최대<br/>승객수</span>
                                <input type="text" placeholder="0" />
                            </label>
                            <label>
                                <span>최소<br/>승객수</span>
                                <input type="text" placeholder="0" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선종</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">어선</option>
                                    <option value="">함정</option>
                                    <option value="">여객선</option>
                                    <option value="">카고</option>
                                    <option value="">탱커</option>
                                    <option value="">관공선</option>
                                    <option value="">기타</option>
                                    <option value="">낚시어선</option>
                                </select>
                            </label>
                            <label>
                                <span>국적</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">한국</option>
                                    <option value="">미국</option>
                                    <option value="">중국</option>
                                    <option value="">일본</option>
                                    <option value="">북한</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                        </li>
                        </div>
                        {/* 여기까지 아코디언 */}
                        <li>
                            <button
                            type="button"
                            className={`btn btnS semi btnToggle ${isAccordionOpen2 ? 'is-open' : ''}`}
                            aria-expanded={isAccordionOpen2}
                            onClick={toggleAccordion2}
                            >
                            상세검색 
                            {isAccordionOpen2 ? ' 닫기' : ' 열기'}
                            </button>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="colList line">
                <li>
                <Link to="/" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 06 */}
        <div className={`tabWrap ${activeTab === 'ship06' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">관심선박</div>
                <div className="formGroup">
                    <ul className="lagelW12">
                        <li>
                            <label>
                                <span>관심사유 지정사유</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">불법조업의심</option>
                                    <option value="">불법포경의심</option>
                                    <option value="">MMSI 신호 임의 변경</option>
                                    <option value="">제재 선박 의심</option>
                                    <option value="">북한 선박 의심</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>타겟 ID</span>
                                <input type="text" placeholder="타겟 ID" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="colList line">
                <li>
                <Link to="/" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </Link>
                </li>
            </ul>
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

        {/* 여기까지 전체목록 페이지  */}
        </>
        )}

        </aside>
    );
}
