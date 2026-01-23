import { useState } from 'react';

export default function Analysis4Component() {
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
                    <div className="headerL">
                        <span className="title">350 대해구도</span>
                        <span className="subTxt">조회시간: 2026-07-00 17:15:13</span>
                    </div>
            
                <button
                    type="button"
                    className="puClose"
                    aria-label="닫기"
                    onClick={closePopup}
                />
                </div>

                <div className="puBody noSc">

                    <div className="trenchRow">
                        {/* 지도캡쳐/테이블 영역 */}
                        <div className="list">
                            <div className="tit14">통항 선박</div>
                            <table className="table dataView">
                                <caption>통항 선박 - 선박 종류, 승선원, 위험물 운반, 공유 여부 및 그룹 에 대한 표입니다</caption>
                                <colgroup>
                                    <col style={{ width: '135px' }} />
                                    <col style={{ width: '' }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">카고(척)</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">카고 승성원(명)</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">탱커수(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">탱커 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">위험물 운반석(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">위험물 운반선 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">위험물 양(톤)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">어선(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">어선 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">기타 어선(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">기타 어선 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">여객선(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">유도선(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">유도선 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">기타 선박(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">기타 선박 승선원(명)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">함정수(척)</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* 관심영역 체크박스 목록 -스크롤됨 */}
                        <div className="list" >
                            <div className="tit14">신호별</div>
                            <table className="table dataView">
                                <caption>신호별 - 제목, 상세 내역, 공유 여부,공유 그룹 에 대한 내용을 등록하는 표입니다.</caption>
                                <colgroup>
                                    <col style={{ width: '135px' }} />
                                    <col style={{ width: '' }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">AIS</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">V-PASS</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">VHF</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MFHF</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>


                            <div className="tit14">E-NAV</div>
                            <table className="table dataView">
                                <caption>E-NAV - 여객선, 어선, 카고, 관공선, 기타 선박과 공유 정보 에 대한 표입니다.</caption>
                                <colgroup>
                                    <col style={{ width: '135px' }} />
                                    <col style={{ width: '' }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">E-NAV 여객선(척)</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-NAV 어선(척)</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-NAV 카고(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-NAV 관공선(척)</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-NAV 기타(척)</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>


                            <div className="tit14">기상정보</div>
                            <table className="table dataView">
                                <caption>기상정보 - 유향, 유속, 유의 파고, 파향, 파주기, 풍속, 풍향 을 나타내는 표입니다</caption>
                                <colgroup>
                                    <col style={{ width: '135px' }} />
                                    <col style={{ width: '' }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">유향</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">유속</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">유의 파고</th>
                                        <td>0.5(m)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">파향</th>
                                        <td>
                                            <div className="rowR gap5">
                                                <img src="/images/ico_dir_arrow.svg" alt="파향" className="arrowDirect"
                                                style={{ transform: 'rotate(350deg)' }}
                                                 />
                                                350(°)
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">파주기</th>
                                        <td>3.7(s)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">풍속</th>
                                        <td>9.2(m/s)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">풍향</th>
                                        <td>
                                            <div className="rowR gap5">
                                                <img src="/images/ico_dir_arrow.svg" alt="풍향" className="arrowDirect"
                                                style={{ transform: 'rotate(45deg)' }}
                                                 />
                                                45(°)
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="puFooter">
                </div>
            </div>
            </div>
        )}

        </section>
  );
}
