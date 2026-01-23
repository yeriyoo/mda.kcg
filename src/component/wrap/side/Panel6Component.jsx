import { useState } from "react";
import { Link } from "react-router-dom";
export default function Panel6Component({ isOpen, onToggle }) {
    
    return (
        <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}>
        <div className="panelHeader">
            <h2 className="panelTitle">AI 분석 모드</h2>
        </div>

        <div className="panelBody">
            <ul className="ai">
                <li>
                    <Link to="/" className="on">
                        <div className="control"><i></i> ON</div>
                        <span className="title"><img src="/images/ico_ai_trackgap.svg" alt="소실항적" />소실항적</span>
                        <span className="desc">AIS 신호가 소실된 선박</span>
                        <span className="keywords">Signal Gap</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="">
                        <div className="control"><i></i> OFF</div>
                        <span className="title"><img src="/images/ico_ai_route.svg" alt="항로예측" />항로예측</span>
                        <span className="desc">AI 기반 선박 항로 예측</span>
                        <span className="keywords">ML Pattern</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="">
                        <div className="control"><i></i> OFF</div>
                        <span className="title"><img src="/images/ico_ai_shiptype.svg" alt="선종분석" />선종분석</span>
                        <span className="desc">선박 유형 자동 분류</span>
                        <span className="keywords">Auto Class</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="on">
                        <div className="control"><i></i> ON</div>
                        <span className="title"><img src="/images/ico_ai_fishing.svg" alt="조업분석" />조업분석</span>
                        <span className="desc">구역별 위험도 평가</span>
                        <span className="keywords">Risk Score</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="on">
                        <div className="control"><i></i> ON</div>
                        <span className="title"><img src="/images/ico_ai_risk.svg" alt="해역별 위험지수" />해역별 위험지수</span>
                        <span className="desc">구역별 위험도 평가</span>
                        <span className="keywords">Risk Score</span>
                    </Link>
                </li>
            </ul>
        </div>

        <div className="panelFooter">
            <div className="btnWrap">
                <button className="btn deep">전체 해제</button>
                <button className="btn basic">설정 저장</button>
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
