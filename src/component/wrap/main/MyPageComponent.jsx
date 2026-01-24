import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPageComponent() {
    const navigate = useNavigate();

    // 서브 팝업 상태
    // null | "password" | "cert"
    const [subPopup, setSubPopup] = useState(null);

    return (
        <section id="MyPageComponent">

            {/* 내 정보 조회 */}
            <div className="popupUtillWrap">
                <div className="popupUtill">
                    <div className="puHeader">
                        <span className="title">내 정보 조회</span>
                        <button
                            type="button"
                            className="puClose"
                            aria-label="닫기"
                            onClick={() => navigate("/main")}
                        />
                    </div>

                    <div className="puBody">
                        <table className="table">
                            <caption>
                                내 정보 조회 - 아이디, 비밀번호, 이름, 이메일, 직급, 상세소속, 공인인증서 삭제
                            </caption>
                            <colgroup>
                                <col style={{ width: "30%" }} />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">아이디</th>
                                    <td>admin222</td>
                                </tr>
                                <tr>
                                    <th scope="row">비밀번호</th>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btnM deep flx0"
                                            onClick={() => setSubPopup("password")}
                                        >
                                            비밀번호 변경
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">이름</th>
                                    <td>ADMIN</td>
                                </tr>
                                <tr>
                                    <th scope="row">이메일</th>
                                    <td>123@korea.kr</td>
                                </tr>
                                <tr>
                                    <th scope="row">직급</th>
                                    <td>경감</td>
                                </tr>
                                <tr>
                                    <th scope="row">상세소속</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">공인인증서 삭제</th>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btnM deep flx0"
                                            onClick={() => setSubPopup("cert")}
                                        >
                                            공인인증서 삭제
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button type="button" className="btn basic">저장</button>
                            <button type="button" className="btn dark">초기화</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 딤 + 서브 팝업  */}
            {subPopup && (
                <div className="popupDim">

                    {/* 비밀번호 변경 */}
                    {subPopup === "password" && (
                        <div className="popupUtill">
                            <div className="puHeader">
                                <span className="title">비밀번호 수정</span>
                                <button
                                    type="button"
                                    className="puClose"
                                    aria-label="닫기"
                                    onClick={() => setSubPopup(null)}
                                />
                            </div>

                            <div className="puBody">
                                <table className="table">
                                    <caption>
                                        비밀번호 수정 - 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인
                                    </caption>
                                    <colgroup>
                                        <col style={{ width: "30%" }} />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row">현재 비밀번호</th>
                                            <td>
                                                <input type="password" aria-label="현재 비밀번호" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">새 비밀번호</th>
                                            <td>
                                                <input type="password" aria-label="새 비밀번호" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">새 비밀번호 확인</th>
                                            <td>
                                                <input type="password" aria-label="새 비밀번호 확인" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="puFooter">
                                <div className="popBtnWrap">
                                    <button
                                        type="button"
                                        className="btn basic"
                                        onClick={() => setSubPopup(null)}
                                    >
                                        수정
                                    </button>
                                    <button
                                        type="button"
                                        className="btn dark"
                                        onClick={() => setSubPopup(null)}
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 공인인증서 삭제 */}
                    {subPopup === "cert" && (
                        <div className="popupUtill cert">
                            <div className="puHeader">
                                <span className="title">공인인증서 삭제</span>
                                <button
                                    type="button"
                                    className="puClose"
                                    aria-label="닫기"
                                    onClick={() => setSubPopup(null)}
                                />
                            </div>

                            <div className="puBody">
                                <div className="puTxtBox">
                                    공인인증서를 삭제 하시겠습니까?
                                </div>
                            </div>

                            <div className="puFooter">
                                <div className="popBtnWrap">
                                    <button
                                        type="button"
                                        className="btn basic"
                                        onClick={() => setSubPopup(null)}
                                    >
                                        삭제
                                    </button>
                                    <button
                                        type="button"
                                        className="btn dark"
                                        onClick={() => setSubPopup(null)}
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            )}
        </section>
    );
}
