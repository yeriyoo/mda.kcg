import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FileUpload from '../../common/FileUpload';

export default function Satellite1Component() { 
    const navigate = useNavigate();

    return (
        <section id="Satellite1Component">

            {/* 위성 영상 등록 팝업 */}
            <div className="popupUtillWrap">
                <div className="popupUtill w61r">
                    <div className="puHeader">
                    <span className="title">위성 영상 등록</span>
                    <button
                        type="button"
                        className="puClose"
                        aria-label="닫기"
                        onClick={() => navigate("/main")}
                    />
                    </div>

                    <div className="puBody">
                        <table className="table">
                            <caption>위성 영상 등록 - 사업자명/위성명, 영상 촬영일, 위성영상파일,CSV 파일,위성영상명, 영상전송 주기,영상 종류,위성 궤도,영상 출처,촬영 목적,촬영 모드,취득방법,구매가격, 에 대한 내용을 등록하는 표입니다.</caption>
                            <colgroup>
                                <col style={{ width: '125px' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '125px' }} />
                                <col style={{ width: '' }} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">사업자명/위성명 <span className="required">*</span></th>
                                    <td colSpan={3}>
                                        <div className="row flex1">
                                            <select aria-label="사업자명">
                                                <option value="">BlackSky</option>
                                                <option value="">ICEYE</option>
                                                <option value="">VIIRS</option>
                                                <option value="">hawkeye360</option>
                                                <option value="">test1</option>
                                                <option value="">국토지리정보원</option>
                                            </select>
                                            <input type="text" placeholder="" aria-label="위성명" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">영상 촬영일 <span className="required">*</span></th>
                                    <td colSpan={3}><input className="dateInput" placeholder="연도-월-일" type="text" aria-label="영상 촬영일" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">위성영상파일 <span className="required">*</span></th>
                                    <td colSpan={3}>
                                        <div className="rowC">
                                            <FileUpload
                                            label="파일 선택"
                                            inputId="videoFile"
                                            maxLength={40}
                                            placeholder="선택된 파일 없음"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">CSV 파일 <span className="required">*</span></th>
                                    <td colSpan={3}>
                                        <div className="rowC">
                                            <FileUpload
                                            label="파일 선택"
                                            inputId="csvFile"
                                            maxLength={45}
                                            placeholder="선택된 파일 없음"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">위성영상명 <span className="required">*</span></th>
                                    <td colSpan={3}><input type="text" placeholder="" aria-label="위성영상명" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">영상전송 주기 </th>
                                    <td colSpan={3}>
                                        <select aria-label=">영상전송 주기">
                                            <option value="">선택</option>
                                            <option value="">0초</option>
                                            <option value="">10초</option>
                                            <option value="">30초</option>
                                            <option value="">60초</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">영상 종류 </th>
                                    <td colSpan={3}>
                                        <div className="row">
                                            <label className="radio radioL"> <input type="radio" name="type" /> <span>VIRS</span></label>
                                            <label className="radio radioL"> <input type="radio" name="type" /> <span>ICEYE_SAR</span></label>
                                            <label className="radio radioL"> <input type="radio" name="type" /> <span>광학</span></label>
                                            <label className="radio radioL"> <input type="radio" name="type" /> <span>예약</span></label>
                                            <label className="radio radioL"> <input type="radio" name="type" /> <span>RF</span></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">위성 궤도 </th>
                                    <td>
                                        <select aria-label="위성 궤도">
                                            <option value="">선택</option>
                                            <option value="">저궤도</option>
                                            <option value="">중궤도</option>
                                            <option value="">정지궤도</option>
                                            <option value="">기타</option>
                                        </select>
                                    </td>
                                    <th scope="row">영상 출처</th>
                                    <td>
                                        <select aria-label="영상 출처">
                                            <option value="">선택</option>
                                            <option value="">국내/자동</option>
                                            <option value="">국내/수동</option>
                                            <option value="">국외/수동</option>
                                            <option value="">기타</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">촬영 목적 </th>
                                    <td>
                                        <input type="text" placeholder="촬영 목적" aria-label="촬영 목적"/>
                                    </td>
                                    <th scope="row">촬영 모드 </th>
                                    <td>
                                        <select aria-label="촬영 모드">
                                            <option value="">선택</option>
                                            <option value="">스핏모드</option>
                                            <option value="">스트랩모드</option>
                                            <option value="">기타</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">취득방법 </th>
                                    <td>
                                        <select aria-label="취득방법">
                                            <option value="">선택</option>
                                            <option value="">무료</option>
                                            <option value="">개별구매</option>
                                            <option value="">단가계약</option>
                                            <option value="">연간계약</option>
                                            <option value="">기타</option>
                                        </select>
                                    </td>
                                    <th scope="row">구매가격 </th>
                                    <td>
                                        <div className="numInput">
                                            <input type="number" placeholder="0" aria-label="구매가격" />
                                            <div className="spin">
                                                <button type="button" className="spinUp"><span className="blind">증가</span></button>
                                                <button type="button" className="spinDown"><span className="blind">감소</span></button>
                                            </div>
                                        </div>
                                    </td>
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
