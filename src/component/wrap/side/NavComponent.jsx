export default function NavComponent({ activeKey, onChange }) {
    const gnbList = [
        { key: 'gnb1', class: 'gnb1', label: '선박' },
        { key: 'gnb2', class: 'gnb2', label: '위성' },
        { key: 'gnb3', class: 'gnb3', label: '기상' },
        { key: 'gnb4', class: 'gnb4', label: '분석' },
        { key: 'gnb5', class: 'gnb5', label: '타임라인' },
        { key: 'gnb6', class: 'gnb6', label: 'AI모드' },
        { key: 'gnb7', class: 'gnb7', label: '리플레이' },
        { key: 'gnb8', class: 'gnb8', label: '항적조회' },
    ];

    const sideList = [
        { key: 'filter', class: 'filter', label: '필터' },
        { key: 'layer', class: 'layer', label: '레이어' },
    ];

    return(
        <nav id="nav">

            {/* <ul className="gnb">
                <li><button type="button" className="gnb1 active" title="선박" aria-label="선박"></button></li>
                <li><button type="button" className="gnb2" title="위성" aria-label="위성"></button></li>
                <li><button type="button" className="gnb3" title="기상" aria-label="기상"></button></li>
                <li><button type="button" className="gnb4" title="분석" aria-label="분석"></button></li>
                <li><button type="button" className="gnb5" title="타임라인" aria-label="타임라인"></button></li>
                <li><button type="button" className="gnb6" title="AI모드" aria-label="AI모드"></button></li>
                <li><button type="button" className="gnb7" title="리플레이" aria-label="리플레이"></button></li>
                <li><button type="button" className="gnb8" title="항적조회" aria-label="항적조회"><</button></li>
            </ul>

            <ul className="side">
                <li><button type="button" className="filter" title="필터" aria-label="필터"></button></li>
                <li><button type="button" className="layer" title="레이어" aria-label="레이어"></button></li>
            </ul> */}

            <ul className="gnb">
                {gnbList.map(item => (
                <li key={item.key}>
                    <button
                    type="button"
                    className={`${item.class} ${activeKey === item.key ? 'active' : ''}`}
                    onClick={() => onChange(item.key)}
                    aria-label={item.label}
                    title={item.label}
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
                    title={item.label}
                    >
                    <span className="blind">{item.label}</span>
                    </button>
                </li>
                ))}
            </ul>

        </nav>
    )
}
