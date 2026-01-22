export default function TopComponent() {  
    return(
        <section className="topBar">
            <div className="locationInfo">
                <ul>
                    <li><button type="button" className="map active"><span className="blind">지도</span></button></li>
                    <li className="divider"><span className="wgs">경도</span><span>129°</span> <span>38’</span><span>31.071”</span><span>E</span></li>
                    <li className="divider"><span className="wgs">위도</span><span>35° </span> <span>21’</span><span>24.580”</span><span>N</span></li>
                    <li><span className="kst">KST</span><span>2024-07-01(화)</span> <span>12:00:00</span></li>
                    <li><button type="button" className="set"><span className="blind">설정</span></button></li>
                    <li><button type="button" className="ship"><span className="blind">선박</span></button></li>
                </ul>
            </div>

            <div className="topSchBox">
                <input type="text" className="tschInput" placeholder="선박 위치 검색" />
                <button type="button" className="mainSchBtn">검색</button>
            </div>
        </section>
    )
}