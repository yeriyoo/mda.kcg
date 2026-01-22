import { useState } from 'react';

export default function Satellite2Component() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="Satellite2Component">

        {/* 위성 사업자 등록 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill">
                <div className="puHeader">
                <span className="title">위성 사업자 등록</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <table className="table">
                        <caption>위성 사업자 등록 - 사업자 분류, 사업자명, 국가, 소재지, 상세내역 에 대한 내용을 등록하는 표입니다.</caption>
                        <colgroup>
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">사업자 분류 <span className="required">*</span></th>
                                <td>
                                    <select aria-label="사업자 분류">
                                        <option value="">전체</option>
                                        <option value="">국가</option>
                                        <option value="">연구기관</option>
                                        <option value="">민간사업자</option>
                                        <option value="">기타</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">사업자명 </th>
                                <td><input type="text" placeholder="사업자명" aria-label="사업자명" /></td>
                            </tr>
                            <tr>
                                <th scope="row">국가 <span className="required">*</span></th>
                                <td>
                                    <select aria-label="국가">
                                        <option value="">선택</option>
                                        <option value="">대한민국</option>
                                        <option value="">미국</option>
                                        <option value="">일본</option>
                                        <option value="">중국</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">소재지 </th>
                                <td><input type="text" placeholder="소재지" aria-label="소재지" /></td>
                            </tr>
                            <tr>
                                <th scope="row">상세내역 </th>
                                <td><textarea placeholder="내용을 입력하세요" aria-label="상세내역"></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="puFooter">
                <div className="popBtnWrap">
                    <button className="btn basic">저장</button>
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
