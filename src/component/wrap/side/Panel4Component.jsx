import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function Panel4Component({ isOpen, onToggle }) {
    const navigate = useNavigate();

    // 아코디언
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false); // 기존
    const toggleAccordion1 = () => setIsAccordionOpen1(prev => !prev);
    
    // 탭이동
    const [activeTab, setActiveTab] = useState('analysis01');

    const tabs = [
        { id: 'analysis01', label: '관심 해역' },
        { id: 'analysis02', label: '해역 분석' },
        { id: 'analysis03', label: '해역 진입 선박' },
        { id: 'analysis04', label: '해구 분석' },
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
        <div className={`tabWrap ${activeTab === 'analysis01' ? 'is-active' : ''}`}>
            <div className="tabTop">
            <div className="title">관심 해역</div>

            <div className="formGroup">
                <ul>
                    <li>
                        <label>
                            <span>영역명</span>
                            <input type="text" placeholder="" />
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
                    {/* 스크롤 영역 */}
                    <div className="tabBtmCnt">
                        <span>데이터가 없습니다.</span>
                        {/* <ul className="colList lineSB">
                            <li>
                            <Link to="/" className="">
                                <span className="title">1. 폭풍주의: 남해</span>
                                <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                            </Link>
                            </li>
                        </ul> */}

                    </div>
                    {/* 하단고정버튼 */}
                    <div className="btnBox">
                        <button 
                        type="button" 
                        class="btn btnLine"
                        onClick={() => navigate("/panel4/analysis/area")}
                        >등록</button>
                    </div>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'analysis02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">해역 분석</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>조회기간</span>
                                <div class="labelRow">
                                    <input class="dateInput" placeholder="연도-월-일" type="text" />
                                    <span>-</span>
                                    <input class="dateInput" placeholder="연도-월-일" type="text" />
                                </div>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>제목</span>
                                <input type="text" placeholder="" />
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button 
                            type="button" 
                            className="schBtn"
                            >검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm noSc">
                <div className="tabBtmInner">
                    {/* 스크롤 영역 */}
                    <div className="tabBtmCnt">
                        <span>데이터가 없습니다.</span>
                    </div>
                    {/* 하단고정버튼 */}
                    <div className="btnBox">
                        <button 
                        type="button" 
                        class="btn btnLine"
                        onClick={() => navigate("/panel4/analysis/register")}
                        >등록</button>
                    </div>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 03 */}
        <div className={`tabWrap ${activeTab === 'analysis03' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">해역 진입 선박</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>진입 일시</span>
                                <div class="labelRow">
                                    <input class="dateInput" placeholder="연도-월-일" type="text" />
                                    <span>-</span>
                                    <input class="dateInput" placeholder="연도-월-일" type="text" />
                                </div>
                            </label>
                        </li>

                        {/* 아코디언 1 */}
                        <div className={`accordion pt8 ${isAccordionOpen1 ? 'is-open' : ''}`}>
                        <li>
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
                        </li>
                        <li>
                            <label>
                                {/* 사용자가 등록한 관심해역리스트 */}
                                <span>관심 해역</span>
                                <select>
                                    <option value="">전체</option>
                                </select>
                            </label>
                            <label>
                                <span>위험물</span>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">고압</option>
                                    <option value="">가연성/인화성</option>
                                    <option value="">산화성</option>
                                    <option value="">독성</option>
                                    <option value="">방사성</option>
                                    <option value="">기타</option>
                                </select>
                            </label>
                        </li>
                        </div>
                        {/* 여기까지 아코디언1 */}
                        <li>
                            <label>
                                <span>타겟ID</span>
                                <input type="text" placeholder="타겟ID" />
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" />
                                <span className="w70">허가 선박 여부</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
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
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            </div>
        </div>
        
        {/* 탭 콘텐츠 04 */}
        <div className={`tabWrap ${activeTab === 'analysis04' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">해구 분석</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>전체 통화량</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                                <span>유의파고(m)</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                                <span>파향(deg)</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                                <span>파주기(초)</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                                <span>풍속(m/s)</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                                <span>풍향(deg)</span>
                                <div className="labelRow">
                                    <div className="numInput">
                                        <input type="number" placeholder="최소" min="" max="" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                    <span>~</span>
                                    
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
                        <li className="fgBtn rowSB">
                            <span className="infoTxt">통화량 조회에 최대 30초 소요될 수 있습니다.</span>
                            <button 
                            type="button" 
                            className="schBtn"
                            >
                            검색
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
                <div className="detailWrap">
                    {/* 정보 박스 */}
                    <ul className="detailBox stretch">
                        <li className="dbHeader">
                            <div className="headerL item2">
                                <span className="name">대해구 1</span>
                                <span className="type">[131.5 ㅣ 42.5]</span>
                            </div>
                        </li>
                        <li>
                            <ul className="dbList twoCol">
                                <li>
                                    <span className="label">전체 통화량</span>
                                    <span className="value">0척</span>
                                    <span className="label"></span>
                                    <span className="value noLine"></span>
                                </li>
                                <li>
                                    <span className="label">유의 파고</span>
                                    <span className="value">0.9(m)</span>
                                    <span className="label">파향</span>
                                    <span className="value">
                                        <img src="/images/ico_dir_arrow.svg" alt="파향" className="arrowDirect"
                                        style={{ transform: 'rotate(6deg)' }}
                                        />6(°C)
                                    </span>
                                </li>
                                <li>
                                    <span className="label">파주기</span>
                                    <span className="value">4.0(s)</span>
                                    <span className="label">풍속</span>
                                    <span className="value">10.2(m/s)</span>
                                </li>
                                <li>
                                    <span className="label">풍향</span>
                                    <span className="value">
                                        <img src="/images/ico_dir_arrow.svg" alt="풍향" className="arrowDirect"
                                        style={{ transform: 'rotate(10deg)' }}
                                        />10(°)
                                    </span>
                                    <span className="label"></span>
                                    <span className="value noLine"></span>
                                </li>
                            </ul>
                            <div className="btnArea w4r">
                                <button type="button" className="btnMap"></button>
                            </div>
                        </li>
                    </ul>
                    
                    {/* 정보 박스 */}
                    <ul className="detailBox stretch">
                        <li className="dbHeader">
                            <div className="headerL item2">
                                <span className="name">대해구 1</span>
                                <span className="type">[131.5 ㅣ 42.5]</span>
                            </div>
                        </li>
                        <li>
                            <ul className="dbList twoCol">
                                <li>
                                    <span className="label">전체 통화량</span>
                                    <span className="value">0척</span>
                                    <span className="label"></span>
                                    <span className="value noLine"></span>
                                </li>
                                <li>
                                    <span className="label">유의 파고</span>
                                    <span className="value">0.9(m)</span>
                                    <span className="label">파향</span>
                                    <span className="value">
                                        <img src="/images/ico_dir_arrow.svg" alt="파향" className="arrowDirect"
                                        style={{ transform: 'rotate(6deg)' }}
                                        />6(°C)
                                    </span>
                                </li>
                                <li>
                                    <span className="label">파주기</span>
                                    <span className="value">4.0(s)</span>
                                    <span className="label">풍속</span>
                                    <span className="value">10.2(m/s)</span>
                                </li>
                                <li>
                                    <span className="label">풍향</span>
                                    <span className="value">
                                        <img src="/images/ico_dir_arrow.svg" alt="풍향" className="arrowDirect"
                                        style={{ transform: 'rotate(10deg)' }}
                                        />10(°)
                                    </span>
                                    <span className="label"></span>
                                    <span className="value noLine"></span>
                                </li>
                            </ul>
                            <div className="btnArea w4r">
                                <button type="button" className="btnMap"></button>
                            </div>
                        </li>
                    </ul>
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
