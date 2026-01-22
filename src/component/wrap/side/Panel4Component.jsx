import { useState } from 'react';
export default function Panel4Component({ isOpen, onToggle }) {
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
                {/* <ul className="colList lineSB">
                    <li>
                    <a href="#!" className="">
                        <span className="title">1. 폭풍주의: 남해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </a>
                    </li>
                    <li>
                    <a href="#!" className="">
                        <span className="title">2. 폭풍주의: 서해</span>
                        <span className="meta">시작일시 00:00:00 / 발효일시 00:00:00</span>
                    </a>
                    </li>
                </ul> */}
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
