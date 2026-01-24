import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Panel3Component({ isOpen, onToggle }) {
    
    // 탭이동
    const [activeTab, setActiveTab] = useState('weather01');

    const tabs = [
        { id: 'weather01', label: '기상특보' },
        { id: 'weather02', label: '태풍정보' },
        { id: 'weather03', label: '조위관측' },
        { id: 'weather04', label: '조석정보' },
        { id: 'weather05', label: '항공기상' },
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
        <div className={`tabWrap ${activeTab === 'weather01' ? 'is-active' : ''}`}>
            <div className="tabTop">
            <div className="title">기상특보</div>

            <div className="formGroup">
                <ul>
                    <li>
                        <label>
                            <span>일자</span>
                            <div className='labelRow'>
                            <input type="text" className="dateInput" placeholder="연도-월-일" />
                                <span>-</span>
                                <input type="text"className="dateInput" placeholder="연도-월-일" /></div>
                        </label>
                    </li>
                    <li className="fgBtn">
                        <button type="button" className="schBtn">검색</button>
                    </li>
                </ul>
            </div>

            </div>

            <div className="tabBtm">
                <ul className="colList lineSB">
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">1. 폭풍주의: 남해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">2. 폭풍주의: 서해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">3. 폭풍주의: 동해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'weather02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">태풍정보</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>연도</span>
                                <select>
                                    <option value="">선택</option>
                                </select>
                            </label>
                            <label>
                                <span>월</span>
                                <select>
                                    <option value="">선택</option>
                                </select>
                            </label>
                        </li>
                        <li className="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
                <ul className="colList lineSB">
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">1. 폭풍주의: 남해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">2. 폭풍주의: 서해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/weather" className="">
                        <span className="title">3. 폭풍주의: 동해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* 탭 콘텐츠 03 */}
        <div className={`tabWrap ${activeTab === 'weather03' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">조위관측</div>
                <div className="legend">
                    <span className="legendTitle">조위관측 범례</span>
                    <ul className="legendList">
                        <li><img src="/images/ico_obsTide.svg" alt="조위관측소" />조위관측소</li>
                        <li><img src="/images/ico_obsOcean.svg" alt="해양관측소" />해양관측소</li>
                        <li><img src="/images/ico_obsBuoy.svg" alt="해양관측부이" />해양관측부이</li>
                        <li><img src="/images/ico_obsCurrent.svg" alt="해수유동관측소" />해수유동관측소</li>
                        <li><img src="/images/ico_obsScience.svg" alt="해양과학기지" />해양과학기지</li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
                <ul className="lineList">
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>조위관측소</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>해양관측소</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>해양관측부이</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>해수유동관측측소</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>해양과학기지</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 04 */}
        <div className={`tabWrap ${activeTab === 'weather04' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">조석정보</div>
                <div className="legend">
                    <span className="legendTitle">조위관측 범례</span>
                    <ul className="legendList">
                        <li><img src="/images/ico_obsTide.svg" alt="조위관측소" />조위관측소</li>
                        <li><img src="/images/ico_obsSunrise.svg" alt="일출몰관측지역" />일출몰관측지역</li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
                <ul className="lineList">
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>조위관측소</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>일출몰관측지역</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 05 */}
        <div className={`tabWrap ${activeTab === 'weather05' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">항공기상</div>
            </div>

            <div className="tabBtm noLine">

                <ul className="lineList">
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>전체</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>양양공항(RKNY) </span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>김포공항(RKSS)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>인천공항(RKSI)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>청주공항(RKTU)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>포항공항(RKTH)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>대구공항(RKTN)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>울산공항(RKPU)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>김해공항(RKPK)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>광주공항(RKJJ)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>사천공항(RKPS)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>무안공항(RKJB)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>여수공항(RKYJ)</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox checkL">
                            <input type="checkbox" />
                            <span>제주공항(RKPC)</span>
                        </label>
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
        </aside>
    );
}
