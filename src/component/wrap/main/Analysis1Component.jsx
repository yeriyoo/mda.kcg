import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Analysis1Component() {
    const navigate = useNavigate();

    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="Analysis2Component">

        {/* 위성 영상 등록 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill w46r">
                <div className="puHeader">
                <span className="title">관심 해역 설정</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody p0">
                    <div className="rowSB gap10">
                        <button type="button" 
                        className="drawBtn"
                        onClick={() => navigate("/panel4/analysis/result")}
                        >
                        <i className="rect"></i>
                        사각형 그리기
                        </button>
                        
                        <button type="button" 
                        className="drawBtn"
                        onClick={() => navigate("/panel4/analysis/result")}
                        >
                        <i className="polygon"></i>
                        다각형 그리기
                        </button>
                    </div>
                </div>

            </div>
            </div>
        )}

        </section>
  );
}
