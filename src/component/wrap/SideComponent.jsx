import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  //const location = useLocation();

  // 현재열린패널
  const [activePanel, setActivePanel] = useState("gnb1");

  // 패널열린상태
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const handleTogglePanel = () => setIsPanelOpen(prev => !prev);

  // Display 탭상태
  const [displayTab, setDisplayTab] = useState("filter");

  /* =========================
    Nav 클릭 → 패널 + 라우팅
  ========================= */
  const handleChangePanel = (key) => {
    setIsPanelOpen(true);
    //setActivePanel(key); // navigate 없음

    switch (key) {
    case "gnb8":  //항적조회
      setActivePanel("gnb8");
      navigate("/track");
      break;

    case "gnb7":  // 리플레이
      setActivePanel("gnb7");
      navigate("/replay");
      break;

    case "filter":  // 필터
      setActivePanel("filter");
      setDisplayTab("filter");
      break;

    case "layer":   // 레이어
      setActivePanel("layer");
      setDisplayTab("layer");
      break;

    default:
      setActivePanel(key);
      navigate("/main"); 
      break;
    }
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
          <DisplayComponent {...panelProps} 
          activeTab={displayTab}/>
        )}
      </div>
    </section>
  );
}
