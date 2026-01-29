import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Analysis3Component() {
    const navigate = useNavigate();

    return (
        <section id="Analysis2Component">

        {/* 위성 영상 등록 팝업 */}
            <div className="popupUtillWrap">
                <div className="popupUtill w61r">
                    <div className="puHeader">
                    <span className="title">관심 해역 분석 등록</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={() => navigate("/main")}
                    />
                    </div>

                    <div className="puBody noSc">

                        <div className="analyRow">
                            {/* 지도캡쳐/테이블 영역 */}
                            <div className="reg">
                                <div className="mapCapture"></div>
                                <button type="button" className="btn btnMS basic icoCapture">지도캡쳐</button>
                                <table className="table">
                                    <caption>관심 해역 분석 등록 - 제목, 상세 내역, 공유 여부,공유 그룹 에 대한 내용을 등록하는 표입니다.</caption>
                                    <colgroup>
                                        <col style={{ width: '30%' }} />
                                        <col style={{ width: '' }} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제목</th>
                                            <td><input type="text" placeholder="제목" aria-label="제목" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">상세 내역</th>
                                            <td>
                                                <textarea placeholder="내용을 입력하세요" aria-label="상세내역"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">공유 여부</th>
                                            <td >
                                                <div className="row">
                                                    <label className="radio radioL"> <input type="radio" name="share" /> <span>공유</span></label>
                                                    <label className="radio radioL"> <input type="radio" name="share" /> <span>공유 안함</span></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">공유 그룹 </th>
                                            <td>
                                                <select aria-label="윤곽선 종류 ">
                                                    <option value="">전체</option>
                                                    <option value="">부서</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* 관심영역 체크박스 목록 -스크롤됨 */}
                            <div className="list" >
                                <div className="tit14">관심영역 목록</div>
                                <ul className="lineList rowSB">
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>진입진출 테스트</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                    <li>
                                        <label className="checkbox checkL">
                                            <input type="checkbox" />
                                            <span>테스트 01</span>
                                        </label>
                                        <button type="button" className="btnMap"></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="puFooter">
                        <div className="popBtnWrap">
                            <button type="button" className="btn basic">저장</button>
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
