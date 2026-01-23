import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Panel1DetailComponent({ isOpen, onToggle, onBack }) {

    // 탭이동
    const [activeTab, setActiveTab] = useState('ship02');

    const tabs = [
        { id: 'ship01', label: '선박검색' },
        { id: 'ship02', label: '허가선박' },
        { id: 'ship03', label: '제재단속' },
        { id: 'ship04', label: '침몰선박' },
        { id: 'ship05', label: '선박입출항' },
        { id: 'ship06', label: '관심선박' }
    ];
    return (
        <>
        {/* <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}> */}

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
        <div className={`tabWrap ${activeTab === 'ship02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">
                    <button
                        type="button"
                        className="prevBtn"
                        aria-label="이전"
                        onClick={onBack}
                    />
                    ZHELINGYU29801
                </div>
            </div>

            <div className="tabBtm noLine">

                <table className="table">
                <caption>선박상세설명 - 타겟 ID, 국가, 주정박항,선종,조업수역 구역,어획 할당량(ton),조업 기간,신호 출처 에 대한 내용을 나타내는 표입니다.</caption>
                <colgroup>
                    <col style={{ width: '125px' }} />
                    <col style={{ width: '' }} />
                    <col style={{ width: '125px' }} />
                    <col style={{ width: '' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">타겟 ID</th>
                        <td>412417712</td>
                        <th scope="row">국가</th>
                        <td>412</td>
                    </tr>
                    <tr>
                        <th scope="row">주정박항</th>
                        <td>zhelingyu29801</td>
                        <th scope="row">선종</th>
                        <td>Fishing</td>
                    </tr>
                    <tr>
                        <th scope="row">조업수역 구역</th>
                        <td></td>
                        <th scope="row">어획 할당량(ton)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">조업 기간 1</th>
                        <td colSpan={3}>2024/01/01 - 2024/04/15</td>
                    </tr>
                    <tr>
                        <th scope="row">조업 기간 2</th>
                        <td colSpan={3}>2024/10/16 - 2024/12/31</td>
                    </tr>
                    <tr>
                        <th scope="row">신호 출처</th>
                        <td colSpan={3}>VTS_AIS</td>
                    </tr>
                </tbody>
            </table>
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

        {/* </aside> */}
        </>
    );
}
