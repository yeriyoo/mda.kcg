import { useState } from 'react';

export default function MyPageComponent() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    // 비밀번호 변경 팝업
    const [isPwPopupOpen, setIsPwPopupOpen] = useState(false);
    const openPwPopup = () => setIsPwPopupOpen(true);
    const closePwPopup = () => setIsPwPopupOpen(false);

    // 공인인증서 삭제 팝업
    const [isCertDeleteOpen, setIsCertDeleteOpen] = useState(false);
    const openCertDeletePopup = () => setIsCertDeleteOpen(true);
    const closeCertDeletePopup = () => setIsCertDeleteOpen(false);

    return (
        <section id="MyPageComponent">

        {/* 내정보조회 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill">
                <div className="puHeader">
                <span className="title">내 정보 조회</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <table className="table">
                        <caption>내 정보 조회 - 아이디, 비밀번호, 이름, 이메일, 직급, 상세소속, 공인인증서 삭제 에 대한 내용을 나타내는 표입니다.</caption>
                        <colgroup>
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">아이디</th>
                                <td>admin222</td>
                            </tr>
                            <tr scope="row">
                                <th>비밀번호</th>
                                <td><button className="btn btnM deep flx0" onClick={openPwPopup}>비밀번호 변경</button></td>
                            </tr>
                            <tr scope="row">
                                <th>이름</th>
                                <td>ADMIN</td>
                            </tr>
                            <tr scope="row">
                                <th>이메일</th>
                                <td>123@korea.kr</td>
                            </tr>
                            <tr scope="row">
                                <th>직급</th>
                                <td>경감</td>
                            </tr>
                            <tr scope="row">
                                <th>상세소속</th>
                                <td></td>
                            </tr>
                            <tr scope="row">
                                <th>공인인증서 삭제</th>
                                <td><button className="btn btnM deep flx0" onClick={openCertDeletePopup}>공인인증서 삭제</button></td>
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

        {/* 비밀번호 변경 팝업 */}
        {isPwPopupOpen && (
            <div className="popupDim">
                <div className="popupUtill">
                    <div className="puHeader">
                    <span className="title">비밀번호 수정</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={closePwPopup}
                    />
                    </div>
                    <div className="puBody">
                        <table className="table">
                            <caption>비밀번호 수정 - 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인 에 대한 내용을 나타내는 표입니다.</caption>
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: '' }} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">현재 비밀번호</th>
                                    <td><input type="text" placeholder="" aria-label="현재 비밀번호" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">새 비밀번호</th>
                                    <td><input type="password" placeholder="" aria-label="새 비밀번호" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">새 비밀번호 확인</th>
                                    <td><input type="password" placeholder="" aria-label="새 비밀번호 확인" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button className="btn basic" onClick={closePwPopup}>수정</button>
                            <button className="btn dark" onClick={closePwPopup}>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* 공인인증서 삭제 팝업 */}
        {isCertDeleteOpen && (
            <div className="popupDim">
                <div className="popupUtill cert">
                    <div className="puHeader">
                    <span className="title">공인인증서 삭제</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={closeCertDeletePopup}
                    />
                    </div>
                    <div className="puBody">
                        <div className="puTxtBox">공인인증서를 삭제 하시겠습니까?</div>
                    </div>
                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button className="btn basic" onClick={closeCertDeletePopup}>삭제</button>
                            <button className="btn dark" onClick={closeCertDeletePopup}>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </section>
  );
}
