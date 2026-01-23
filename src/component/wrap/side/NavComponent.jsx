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
