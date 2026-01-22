import { useState } from 'react';

export default function Analysis2Component() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="Analysis2Component">

        {/* 위성 영상 등록 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill w61r">
                <div className="puHeader">
                <span className="title">관심 해역 설정</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <div className="rowSB gap10 pb10">
                        <button type="button" className="drawBtn sm">사각형 그리기<i className="rect"></i></button>
                        <button type="button" className="drawBtn sm">다각형 그리기<i className="polygon"></i></button>
                    </div>
                    <table className="table">
                        <caption>관심 해역 설정 - 해상영역명, 설정 옵션, 좌표,영역 옵션,해상영역명 크기, 해상영역명 색상,윤곽선 굵기,윤곽선 종류,윤곽선 색상,채우기 색상 에 대한 내용을 등록하는 표입니다.</caption>
                        <colgroup>
                            <col style={{ width: '125px' }} />
                            <col style={{ width: '' }} />
                            <col style={{ width: '125px' }} />
                            <col style={{ width: '' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">해상영역명</th>
                                <td colSpan={3}><input type="text" placeholder="해상영역명" aria-label="해상영역명" /></td>
                            </tr>
                            <tr>
                                <th scope="row">설정 옵션</th>
                                <td colSpan={3}>
                                    <div className="row">
                                        <label class="checkbox checkL"><input type="checkbox" /><span>사용 여부</span></label>
                                        <label class="checkbox checkL"><input type="checkbox" /><span>알림 여부</span></label>
                                        <label class="checkbox checkL"><input type="checkbox" /><span>공유 여부</span></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">좌표</th>
                                <td colSpan={3}>[124,96891368166156, 36.37855817450263]<br />
                                [125,25105622872591, 36.37855817450263]<br />
                                [125,25105622872591, 36.37855817450263]<br />
                                [125,25105622872591, 36.37855817450263]<br />
                                [125,25105622872591, 36.37855817450263]
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">영역 옵션</th>
                                <td colSpan={3}>
                                    <div className="row">
                                        <label class="checkbox checkL"><input type="checkbox" /><span>해상영역 표시</span></label>
                                        <label class="checkbox checkL"><input type="checkbox" /><span>해상영역명 표시</span></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">해상영역명 크기</th>
                                <td>
                                    <div className="numInput">
                                        <input type="number" placeholder="0" min="" max="" aria-label="해상영역명 크기" />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row">해상영역명 색상</th>
                                <td><i className="colorBox" style={{ backgroundColor: "#000" }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row">윤곽선 굵기 </th>
                                <td>
                                    <div className="numInput">
                                        <input type="number" placeholder="0" min="" max="" aria-label="윤곽선 굵기 " />
                                        <div className="spin">
                                            <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                            <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row">윤곽선 종류 </th>
                                <td>
                                    <select aria-label="윤곽선 종류 ">
                                        <option value="">선택</option>
                                        <option value="">실선</option>
                                        <option value="">점선</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">윤곽선 색상 </th>
                                <td><i className="colorBox" style={{ backgroundColor: "#FF0000" }}></i></td>
                                <th scope="row">채우기 색상 </th>
                                <td><i className="colorBox" style={{ backgroundColor: "#7BEBB1" }}></i></td>
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
