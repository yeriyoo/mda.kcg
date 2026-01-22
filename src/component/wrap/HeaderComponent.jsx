
export default function HeaderComponent() {    
    return(
        <header id="header">
            <div className="logoArea"><a href="!#" className="logo"><span className="blind">GIS 함정용</span></a> <span className="logoTxt">GIS 함정용</span></div>
            <aside>
                <ul>
                    <li><a href="!#" className="alram" title="알람"><i className="badge"></i><span className="blind">알람</span></a></li>
                    <li><a href="!#" className="set" title="설정"><span className="blind">설정</span></a></li>
                    <li><a href="!#" className="user" title="마이페이지"><span className="blind">마이페이지</span></a></li>
                </ul>
            </aside>
        </header>
    )
}