import { useState } from 'react';
import FileUpload from '../../common/FileUpload';

export default function LayerComponent() {
    // 팝업
    const [isOpen, setIsOpen] = useState(true); // 처음 열림
    const closePopup = () => setIsOpen(false);

    return (
        <section id="LayerComponent">

        {/* 레이어등록 팝업 */}
        {isOpen && (
            <div className="popupUtillWrap">
            <div className="popupUtill">
                <div className="puHeader">
                <span className="title">레이어 등록</span>
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody">
                    <table className="table">
                        <caption>레이어등록 - 레이어명, 첨부파일, 공유설정 에 대한 내용을 나타내는 표입니다.</caption>
                        <colgroup>
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">레이어명 <span className="required">*</span></th>
                                <td><input type="text" placeholder="" aria-label="레이어명" /></td>
                            </tr>
                            <tr>
                                <th scope="row">첨부파일 <span className="required">*</span></th>
                                <td>
                                    <div className="rowC">
                                        <FileUpload
                                        label="파일 선택"
                                        inputId="layerFile"
                                        maxLength={35}
                                        placeholder="선택된 파일 없음"
                                        />
                                        <span className="helpTxt">geojson 파일을 첨부해 주세요. </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">공유설정</th>
                                <td>
                                    <div className="row">
                                        <label className="checkbox checkL w10r">
                                        <input type="checkbox" />
                                        <span>공유 여부</span>
                                        </label>
                                        
                                        <label className="flx1">
                                            <span className="blind">공유설정</span>
                                            <select>
                                                <option value="">전체</option>
                                                <option value="">부서</option>
                                                <option value="">개인</option>
                                                <option value="">개인  &  부서</option>
                                            </select>
                                        </label>
                                    </div>
                                </td>
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
