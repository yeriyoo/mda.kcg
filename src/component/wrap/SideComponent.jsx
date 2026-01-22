import { useState } from 'react';
import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';

import NavComponent from "./side/NavComponent";
import Panel1Component from "./side/Panel1Component"; // 선박
import Panel2Component from "./side/Panel2Component"; // 위성
import Panel3Component from "./side/Panel3Component"; // 기상
import Panel4Component from "./side/Panel4Component"; // 분석
import Panel5Component from "./side/Panel5Component"; // 타임라인
import Panel6Component from "./side/Panel6Component"; // AI모드
import Panel7Component from "./side/Panel7Component"; // 리플레이
import Panel8Component from "./side/Panel8Component"; // 항적조회
import FilterComponent from "./side/FilterComponent"; // 필터
import LayerComponent from "./side/LayerComponent"; // 레이어

export default function SideComponent() {
    const navigate = useNavigate();
    const location = useLocation();

    /* =========================
        패널 열림 상태 (단일 관리)
    ========================= */
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const handleTogglePanel = () => {
        setIsPanelOpen(prev => !prev);
    };

    /* =========================
        URL → activeKey 매핑
    ========================= */
    const getActiveKey = () => {
        const path = location.pathname.split('/')[1];
        switch (path) {
        case 'panel1': return 'gnb1';
        case 'panel2': return 'gnb2';
        case 'panel3': return 'gnb3';
        case 'panel4': return 'gnb4';
        case 'panel5': return 'gnb5';
        case 'panel6': return 'gnb6';
        case 'panel7': return 'gnb7';
        case 'panel8': return 'gnb8';
        case 'filter': return 'side1';
        case 'layer': return 'side2';
        default: return 'gnb1';
        }
    };

    const activeKey = getActiveKey();

    /* =========================
        네비 클릭 → 라우트 이동
        ❗ 패널은 닫지 않음
    ========================= */
    const handleChangePanel = (key) => {
        // 메뉴 클릭 시 무조건 패널 열기
        setIsPanelOpen(true);

        switch (key) {
        case 'gnb1': navigate('/panel1'); break;
        case 'gnb2': navigate('/panel2'); break;
        case 'gnb3': navigate('/panel3'); break;
        case 'gnb4': navigate('/panel4'); break;
        case 'gnb5': navigate('/panel5'); break;
        case 'gnb6': navigate('/panel6'); break;
        case 'gnb7': navigate('/panel7'); break;
        case 'gnb8': navigate('/panel8'); break;
        case 'side1': navigate('/filter'); break;
        case 'side2': navigate('/layer'); break;
        default: navigate('/panel1'); break;
        }
    };

    /* =========================
        공통 패널 props
    ========================= */
    const panelProps = {
        isOpen: isPanelOpen,
        onToggle: handleTogglePanel,
    };

    return (
        <section id="sidePanel">
        <NavComponent
            activeKey={activeKey}
            onChange={handleChangePanel}
        />

        <div className="sidePanelContent">
            <Routes>
            {/* 초기 진입 시 Panel1 */}
            <Route index element={<Navigate to="/panel1" replace />} />

            <Route path="/panel1/*" element={<Panel1Component {...panelProps} />} />
            <Route path="/panel2/*" element={<Panel2Component {...panelProps} />} />
            <Route path="/panel3/*" element={<Panel3Component {...panelProps} />} />
            <Route path="/panel4/*" element={<Panel4Component {...panelProps} />} />
            <Route path="/panel5/*" element={<Panel5Component {...panelProps} />} />
            <Route path="/panel6/*" element={<Panel6Component {...panelProps} />} />
            <Route path="/panel7/*" element={<Panel7Component {...panelProps} />} />
            <Route path="/panel8/*" element={<Panel8Component {...panelProps} />} />
            <Route path="/filter/*" element={<FilterComponent {...panelProps} />} />
            <Route path="/layer/*" element={<LayerComponent {...panelProps} />} />
            </Routes>
        </div>
        </section>
    );
}
