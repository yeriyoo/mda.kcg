import { useState } from "react";
import { useLocation } from "react-router-dom";

import NavComponent from "./side/NavComponent";
import Panel1Component from "./side/Panel1Component";
import Panel2Component from "./side/Panel2Component";
import Panel3Component from "./side/Panel3Component";
import Panel4Component from "./side/Panel4Component";
import Panel5Component from "./side/Panel5Component";
import Panel6Component from "./side/Panel6Component";
import Panel7Component from "./side/Panel7Component";
import Panel8Component from "./side/Panel8Component";
import DisplayComponent from "./side/DisplayComponent";

export default function SideComponent() {
  /* =========================
    현재 열린 패널
  ========================= */
  const [activePanel, setActivePanel] = useState("gnb1");

  /* =========================
    패널 열림 상태
  ========================= */
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const handleTogglePanel = () => setIsPanelOpen(prev => !prev);

  /* =========================
    Nav 클릭 → 패널만 변경
  ========================= */
  const handleChangePanel = (key) => {
    setIsPanelOpen(true);
    setActivePanel(key); // navigate 없음
  };

  /* =========================
    공통 props
  ========================= */
  const panelProps = {
    isOpen: isPanelOpen,
    onToggle: handleTogglePanel,
  };

  return (
    <section id="sidePanel">
      <NavComponent
        activeKey={activePanel}
        onChange={handleChangePanel}
      />

      <div className="sidePanelContent">
        {activePanel === "gnb1" && <Panel1Component {...panelProps} />}
        {activePanel === "gnb2" && <Panel2Component {...panelProps} />}
        {activePanel === "gnb3" && <Panel3Component {...panelProps} />}
        {activePanel === "gnb4" && <Panel4Component {...panelProps} />}
        {activePanel === "gnb5" && <Panel5Component {...panelProps} />}
        {activePanel === "gnb6" && <Panel6Component {...panelProps} />}
        {activePanel === "gnb7" && <Panel7Component {...panelProps} />}
        {activePanel === "gnb8" && <Panel8Component {...panelProps} />}
        {(activePanel === "filter" || activePanel === "layer") && (
          <DisplayComponent {...panelProps} />
        )}
      </div>
    </section>
  );
}
