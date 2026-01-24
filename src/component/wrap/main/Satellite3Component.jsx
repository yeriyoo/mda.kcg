import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Satellite3Component() {
    const navigate = useNavigate();

    return (
        <section id="Satellite3Component">

            {/* 위성 관리 등록 팝업 */}
            <div className="popupUtillWrap">
                <div className="popupUtill">
                    <div className="puHeader">
                    <span className="title">위성 관리 등록</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={() => navigate("/main")}
                    />
                    </div>

                    <div className="puBody">
                        <table className="table">
                            <caption>위성 관리 등록 - 사업자명, 위성명, 센서 타입, 촬영 해상도, 주파수, 상세내역 에 대한 내용을 등록하는 표입니다.</caption>
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: '' }} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">사업자명 <span className="required">*</span></th>
                                    <td>
                                        <select aria-label="사업자명">
                                            <option value="">전체</option>
                                            <option value="">BlackSky</option>
                                            <option value="">ICEYE</option>
                                            <option value="">VIIRS</option>
                                            <option value="">hawkeye360</option>
                                            <option value="">test1</option>
                                            <option value="">국토지리정보원</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">위성명 <span className="required">*</span></th>
                                    <td><input type="text" placeholder="위성명" aria-label="위성명" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">센서 타입 </th>
                                    <td>
                                        <select aria-label="센서 타입">
                                            <option value="">전체</option>
                                            <option value="">광학</option>
                                            <option value="">SAR</option>
                                            <option value="">RF</option>
                                            <option value="">기타</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">촬영 해상도 </th>
                                    <td><input type="text" placeholder="촬영 해상도" aria-label="촬영 해상도" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">주파수 </th>
                                    <td><input type="text" placeholder="주파수" aria-label="주파수" /></td>
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
