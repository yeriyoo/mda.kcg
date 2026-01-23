
import { Link } from "react-router-dom";

export default function HeaderComponent() {    
    return(
        <header id="header">
            <div className="logoArea"><Link to="/" className="logo"><span className="blind">GIS 함정용</span></Link> <span className="logoTxt">GIS 함정용</span></div>
            <aside>
                <ul>
                    <li><Link to="/" className="alram" title="알람"><i className="badge"></i><span className="blind">알람</span></Link></li>
                    <li><Link to="/signal/custom" className="set" title="설정"><span className="blind">설정</span></Link></li>
                    <li><Link to="/mypage" className="user" title="마이페이지"><span className="blind">마이페이지</span></Link></li>
                </ul>
            </aside>
        </header>
    )
}