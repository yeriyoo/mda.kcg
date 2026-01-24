import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Satellite4Component() {
    const navigate = useNavigate();

    return (
        <section id="Satellite4Component">

            {/* 삭제 팝업 */}
            <div className="popupUtillWrap">
                <div className="popupUtill w46r">
                    <div className="puHeader">
                    <span className="title">삭제</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={() => navigate("/main")}
                    />
                    </div>

                    <div className="puBody">
                        <div className="puTxtBox">삭제 하시겠습니까?</div>
                    </div>

                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button 
                                type="button"
                                className="btn basic"
                                oonClick={() => navigate("/main")}
                            >
                            삭제
                            </button>
                            <button
                                type="button"
                                className="btn dark"
                                onClick={() => navigate("/main")}
                            >
                            취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
