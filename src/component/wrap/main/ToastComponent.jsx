
export default function ToastComponent() {  
    return(
        <section id="toastComponent">

            {/* 지도상 배표식 */}
            <div className="shipMapContainer">
                <div className="shipMap shipCaution">
                    <a href="!#">
                        1511함A-05
                        <span className="status">12.5 kts | 45°</span>
                    </a>
                </div>

                <div className="shipMap shipWarning">
                    <a href="!#">
                        1511함A-05
                        <span className="status">12.5 kts | 45°</span>
                    </a>
                </div>

                <div className="shipMap shipDefault">
                    <a href="!#">
                        1511함A-05
                        <span className="status">12.5 kts | 45°</span>
                    </a>
                </div>
            </div>

            {/* 토스트팝업 */}
            <div className="toastContainer">
                <div className="toast toastCaution">
                    <span className="toastMsg">104 어업구역 비인가 선박</span>
                    <span className="toastR">
                        <button type="button" className="toastAction">위치보기</button>
                        <button type="button" className="toastClose" aria-label="닫기"></button>
                    </span>
                </div>

                <div className="toast toastCaution">
                    <span className="toastMsg">104 어업구역 비인가 선박</span>
                    <span className="toastR">
                        <button type="button" className="toastAction">위치보기</button>
                        <button type="button" className="toastClose" aria-label="닫기"></button>
                    </span>
                </div>

                <div className="toast toastWarining">
                    <span className="toastMsg">저속 이동 의심 선박</span>
                    <span className="toastR">
                        <button type="button" className="toastAction">위치보기</button>
                        <button type="button" className="toastClose" aria-label="닫기"></button>
                    </span>
                </div>
            </div>
        </section>
    )
}