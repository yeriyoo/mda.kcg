import { useState } from 'react';
import NavComponent from "./side/NavComponent";
import Panel1Component from "./side/Panel1Component";
import Panel2Component from "./side/Panel2Component";
import Panel3Component from "./side/Panel3Component";
import Panel4Component from "./side/Panel4Component";
import Panel5Component from "./side/Panel5Component";
import Panel6Component from "./side/Panel6Component";
import Panel7Component from "./side/Panel7Component";
import Panel8Component from "./side/Panel8Component";
import FilterComponent from "./side/FilterComponent";
import LayerComponent from "./side/LayerComponent";

export default function SideComponent() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeKey, setActiveKey] = useState('gnb1');

    /** 패널 열고/닫기 */
    const handleToggle = () => {
    setIsOpen(prev => !prev);
    };

    /** 메뉴 클릭 시 패널은 항상 열린 상태 */
    const handleChangePanel = (key) => {
    setActiveKey(key);
    setIsOpen(true);
    };

    const renderPanel = () => {
    const panelProps = {
        isOpen,
        onToggle: handleToggle,
    };

    switch (activeKey) {
        case 'gnb1': return <Panel1Component {...panelProps} />;
        case 'gnb2': return <Panel2Component {...panelProps} />;
        case 'gnb3': return <Panel3Component {...panelProps} />;
        case 'gnb4': return <Panel4Component {...panelProps} />;
        case 'gnb5': return <Panel5Component {...panelProps} />;
        case 'gnb6': return <Panel6Component {...panelProps} />;
        case 'gnb7': return <Panel7Component {...panelProps} />;
        case 'gnb8': return <Panel8Component {...panelProps} />;
        case 'side1': return <FilterComponent {...panelProps} />;
        case 'side2': return <LayerComponent {...panelProps} />;
        default: return null;
    }
    };
    return(
        <section id="sidePanel">
            <NavComponent
                activeKey={activeKey}
                onChange={handleChangePanel}
            />
            {renderPanel()}
        </section>
    )
}