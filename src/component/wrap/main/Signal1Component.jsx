import { useState } from 'react';

export default function Signal1Component() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="SignalComponent">

        {/* 신호설정 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill">
                <div className="puHeader">
                <span className="title">신호설정</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <table className="table">
                        <caption>신호설정 - 신호표출반경, 수신수기 설정 에 대한 내용을 나타내는 표입니다.</caption>
                        <colgroup>
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">신호표출반경</th>
                                <td>
                                    <select aria-label="신호표출반경">
                                        <option value="">25NM</option>
                                    </select>
                                </td>
                            </tr>
                            <tr scope="row">
                                <th>수신수기 설정</th>
                                <td><input type="text" placeholder="" aria-label="수신수기 설정" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="puFooter">
                    <div className="popBtnWrap">
                        <button className="btn basic">저장</button>
                        <button className="btn dark">초기화</button>
                    </div>
                </div>
            </div>
            </div>
        )}

        </section>
  );
}
