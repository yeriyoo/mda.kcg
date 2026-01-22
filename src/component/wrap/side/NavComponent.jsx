export default function NavComponent({ activeKey, onChange }) {
    const gnbList = [
        { key: 'gnb1', class: 'gnb1', label: '선박' },
        { key: 'gnb2', class: 'gnb2', label: '위성' },
        { key: 'gnb3', class: 'gnb3', label: '기상' },
        { key: 'gnb4', class: 'gnb4', label: '분석' },
        { key: 'gnb5', class: 'gnb5', label: '타임라인' },
        { key: 'gnb6', class: 'gnb6', label: '챗봇' },
        { key: 'gnb7', class: 'gnb7', label: '리플레이' },
        { key: 'gnb8', class: 'gnb8', label: '항적조회' },
    ];

    const sideList = [
        { key: 'side1', class: 'side1', label: '필터' },
        { key: 'side2', class: 'side2', label: '레이어' },
    ];

    return(
        <nav id="nav">
            {/* <ul className="gnb">
                <li><button type="button" className="gnb1 active" title="선박"></button></li>
                <li><a href="!#" className="gnb2" title="위성"><span className="blind">위성</span></a></li>
                <li><a href="!#" className="gnb3" title="기상"><span className="blind">기상</span></a></li>
                <li><a href="!#" className="gnb4" title="분석"><span className="blind">분석</span></a></li>
                <li><a href="!#" className="gnb5" title="타임라인"><span className="blind">타임라인</span></a></li>
                <li><a href="!#" className="gnb6" title="챗봇"><span className="blind">챗봇</span></a></li>
                <li><a href="!#" className="gnb7" title="리플레이"><span className="blind">리플레이</span></a></li>
                <li><a href="!#" className="gnb8" title="항적조회"><span className="blind">항적조회</span></a></li>
            </ul>

            <ul className="side">
                <li><a href="#" className="side1" title="필터"><span className="blind">필터</span></a></li>
                <li><a href="#" className="side2" title="레이어"><span className="blind">레이어</span></a></li>
            </ul> */}


            <ul className="gnb">
                {gnbList.map(item => (
                <li key={item.key}>
                    <button
                    type="button"
                    className={`${item.class} ${activeKey === item.key ? 'active' : ''}`}
                    onClick={() => onChange(item.key)}
                    aria-label={item.label}
                    >
                    <span className="blind">{item.label}</span>
                    </button>
                </li>
                ))}
            </ul>

            <ul className="side">
                {sideList.map(item => (
                <li key={item.key}>
                    <button
                    type="button"
                    className={`${item.class} ${activeKey === item.key ? 'active' : ''}`}
                    onClick={() => onChange(item.key)}
                    aria-label={item.label}
                    >
                    <span className="blind">{item.label}</span>
                    </button>
                </li>
                ))}
            </ul>

        </nav>
    )
}