import { useState } from 'react';

export default function Satellite4Component() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="Satellite4Component">

        {/* 삭제 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill w46r">
                <div className="puHeader">
                <span className="title">삭제</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <div className="puTxtBox">삭제 하시겠습니까?</div>
                </div>

                <div className="puFooter">
                <div className="popBtnWrap">
                    <button className="btn basic"
                    onClick={closePopup}
                    >삭제</button>
                    <button
                    className="btn dark"
                    onClick={closePopup}
                    >
                    취소
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}

        </section>
  );
}
