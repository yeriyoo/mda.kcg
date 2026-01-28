document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".mid-toggle");
    const middleMenu = document.querySelector(".quick-menu-middle");
    const bottomMenu = document.querySelector(".quick-menu-bottom");

    let isOpen = true;

    toggleBtn.addEventListener("click", () => {
        isOpen = !isOpen;

        if (isOpen) {
            middleMenu.classList.remove("collapsed");
            bottomMenu.classList.remove("collapsed");
            
            middleMenu.classList.add("expanded");
            bottomMenu.classList.add("expanded");

            toggleBtn.classList.remove("rotate"); 
        } else {
            middleMenu.classList.remove("expanded");
            bottomMenu.classList.remove("expanded");

            middleMenu.classList.add("collapsed");
            bottomMenu.classList.add("collapsed");

            toggleBtn.classList.add("rotate");
        }
    });
});

// 우측 퀵메뉴
document.addEventListener("DOMContentLoaded", () => {
    const tooltipLayer = document.getElementById("tooltip-layer");

    document.querySelectorAll('.quick-menu .q-btn[data-tooltip]').forEach(btn => {

        btn.addEventListener('mouseenter', () => {
          const tooltip = document.createElement('div');
          tooltip.className = "global-tooltip";
          tooltip.innerText = btn.dataset.tooltip;
          tooltipLayer.appendChild(tooltip);

          const rect = btn.getBoundingClientRect();

          tooltip.style.position = 'fixed';
          tooltip.style.top = (rect.top + rect.height / 2 - 10) + 'px';

          tooltip.style.left = 'auto';
          tooltip.style.right = (window.innerWidth - rect.left + 10) + 'px';
      });


        btn.addEventListener('mouseleave', () => {
            tooltipLayer.innerHTML = "";
        });
    });
});

// 라이브맵 리스트 아코디언
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        const title = acc.querySelector(".accordion-header span").textContent.trim();
        const toggle = acc.querySelector(".all-switch");

        if (title === "AI모드") {
            acc.classList.remove("open");

            if (toggle) {
                toggle.addEventListener("change", () => {
                    if (toggle.checked) {
                        acc.classList.add("open");
                    } else {
                        acc.classList.remove("open");
                    }
                });
            }
        } else {
            acc.classList.add("open");
        }
    });

    // 헤더 클릭 시 토글 동작도 유지
    accordions.forEach(acc => {
        const header = acc.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            acc.classList.toggle("open");
        });
    });
});

// 상단 탭 전환
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {

            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tabPanels.forEach(panel => panel.classList.remove("active"));

            const target = button.dataset.tab;
            const activePanel = document.getElementById(target);
            activePanel.classList.add("active");

            const accordions = activePanel.querySelectorAll(".accordion");

            accordions.forEach(acc => {
                const title = acc.querySelector(".accordion-header span").textContent.trim();
                const toggle = acc.querySelector(".all-switch");

                if (target === "layer") {
                    acc.classList.remove("open");  
                    if (toggle) toggle.checked = false; 

                    if (toggle) toggle.checked = false;

                    if (title === "관심영역") {
                        acc.classList.add("open");
                        if (toggle) toggle.checked = true;
                    }
                }

                else if (target === "filter") {
                    if (title === "AI모드") {
                        acc.classList.remove("open");   
                        if (toggle) toggle.checked = false;
                    } else {
                        acc.classList.add("open"); 
                        if (toggle) toggle.checked = true;
                    }
                }

                if (toggle) {
                    toggle.addEventListener("change", () => {
                        if (toggle.checked) acc.classList.add("open");
                        else acc.classList.remove("open");
                    });
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("leftPanel");
  const btn = document.querySelector(".panel-collapseBtn");
  const icon = btn?.querySelector(".material-symbols-outlined");

  if (!panel || !btn) return;

  btn.addEventListener("click", () => {
    panel.classList.toggle("is-collapsed");

    if (icon) {
      icon.textContent = panel.classList.contains("is-collapsed")
        ? "chevron_right"
        : "chevron_left";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("shipPopup");
  const layer = document.getElementById("shipLayer");
  const closeBtn = document.getElementById("popupClose");

  if (!popup || !layer) return;

  const els = {
    name: document.getElementById("popupName"),
    mmsi: document.getElementById("popupMmsi"),
    img: document.getElementById("popupImg"),

    depTime: document.getElementById("popupDepTime"),   
    arrTime: document.getElementById("popupArrTime"),  
    status: document.getElementById("popupStatus"),    
    speedCourse: document.getElementById("popupSpeedCourse"),
    draft: document.getElementById("popupDraft"),     

    from: document.getElementById("popupFrom"),
    to: document.getElementById("popupTo"),
  };

  function openPopup(marker) {
    if (els.name) els.name.textContent = marker.dataset.name || "-";
    if (els.mmsi) els.mmsi.textContent = marker.dataset.mmsi ? ` ${marker.dataset.mmsi}` : "-";

    const imgSrc = marker.dataset.img || "";
    if (els.img) {
      if (imgSrc) {
        els.img.src = imgSrc;
        els.img.style.display = "block";
      } else {
        els.img.removeAttribute("src");
        els.img.style.display = "none";
      }
    }

    if (els.from) els.from.textContent = marker.dataset.org || "-"; 
    if (els.to) els.to.textContent = marker.dataset.to || "하태도"; 

    if (els.depTime) els.depTime.textContent = marker.dataset.depTime || marker.dataset.time || "-";
    if (els.arrTime) els.arrTime.textContent = marker.dataset.arrTime || marker.dataset.time || "-";

    if (els.status) els.status.textContent = marker.dataset.status || "정박";
    if (els.speedCourse) {
      const sp = marker.dataset.speed || "-";
      const cr = marker.dataset.course || "-";
      els.speedCourse.textContent = `${sp} / ${cr}`;
    }
    if (els.draft) els.draft.textContent = marker.dataset.draft || "1.1m"; 

    const mRect = marker.getBoundingClientRect();
    const containerRect = layer.getBoundingClientRect();

    const offsetX = 12;
    const offsetY = -20;

    let left = (mRect.left - containerRect.left) + offsetX;
    let top  = (mRect.top - containerRect.top) + offsetY;

    const popupW = 320;
    const popupH = 520; 
    const maxLeft = containerRect.width - popupW - 10;
    const maxTop  = containerRect.height - popupH - 10;

    left = Math.max(10, Math.min(left, maxLeft));
    top  = Math.max(10, Math.min(top, maxTop));

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;

    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
  }

  layer.addEventListener("click", (e) => {
    const marker = e.target.closest(".ship-marker");
    if (!marker) return;
    e.stopPropagation();
    openPopup(marker);
  });

  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });

  document.addEventListener("click", () => closePopup());

  popup.addEventListener("click", (e) => e.stopPropagation());

  window.addEventListener("resize", () => closePopup());
});

//라이브맵//
document.addEventListener("DOMContentLoaded", () => {
  const liveMapBtn = document.querySelector(".menu-live-map");
  const wrap = document.querySelector(".left-panel-wrap");
  const panel = document.getElementById("leftPanel");
  const menuLinks = document.querySelectorAll(".side-bar .menu-top a");

  if (!wrap || !panel) return;

  menuLinks.forEach(l => l.classList.remove("is-active"));
  if (liveMapBtn) {
    liveMapBtn.classList.add("is-active");
  }

  wrap.classList.add("is-open");
  panel.classList.remove("is-collapsed");

  document
    .querySelector('.tab-button[data-tab="filter"]')
    ?.classList.add("active");
});




//분석검색//
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".left-panel-wrap");
  const panel480 = document.getElementById("leftPanel480"); 
  const panelLive = document.getElementById("leftPanel");   
  const analysisBtn = document.querySelector(".menu-analysis");
  const collapseBtn = document.querySelector(".panel-collapseBtn_480");

  const menuLinks = document.querySelectorAll(".side-bar .menu-top a");

  if (!wrap || !panel480 || !analysisBtn) return;


  menuLinks.forEach(l => l.classList.remove("is-active"));
  wrap.classList.remove("is-open"); 
  panel480.classList.remove("is-collapsed");

  analysisBtn.addEventListener("click", (e) => {
    e.preventDefault();

    menuLinks.forEach(l => l.classList.remove("is-active"));
    analysisBtn.classList.add("is-active");

    panelLive?.classList.add("is-collapsed");

    wrap.classList.add("is-open");
    panel480.classList.remove("is-collapsed");
  });

  collapseBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    panel480.classList.toggle("is-collapsed");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".analysis-result-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.closest(".analysis-result")?.classList.toggle("is-collapsed");
    });
  });

  document.querySelectorAll(".ship-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".ship-tab").forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");
    });
  });
});

//마이페이지-공유, 알람//
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("leftPanelWrap");
  const mypagePanel = document.getElementById("leftPanelMyPage");

  const mypageBtn = document.querySelector(".menu-mypage");

  const menuLinks = document.querySelectorAll(".side-bar a"); 

  if (!wrap || !mypagePanel || !mypageBtn) return;

  wrap.classList.remove("is-open");
  wrap.classList.add("is-collapsed");
  menuLinks.forEach(l => l.classList.remove("is-active"));

  mypageBtn.addEventListener("click", (e) => {
    e.preventDefault();

    menuLinks.forEach(l => l.classList.remove("is-active"));
    mypageBtn.classList.add("is-active");

    wrap.classList.add("is-open");
    wrap.classList.remove("is-collapsed");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mypage-section-head").forEach(head => {
    head.addEventListener("click", () => {
      const section = head.closest(".mypage-section");
      section.classList.toggle("is-open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("leftPanelWrap");
  const collapseBtn = document.getElementById("mypageCollapseBtn");

  if (!wrap || !collapseBtn) return;

  collapseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.toggle("is-collapsed");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("btnShareAlarm");
  const overlay = document.getElementById("shareAlarmOverlay");
  const closeBtn = document.getElementById("shareAlarmClose");
  const okBtn = document.getElementById("shareAlarmOk");

  // ✅ openBtn 없어도 "처음부터 띄우기"는 가능해야 해서 조건을 overlay 기준으로 바꿈
  if (!overlay) return;

  const openModal = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");
  };

  const closeModal = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");
  };

  // ✅ 1) 페이지 로드시 알람 리스트 모달을 처음부터 오픈
  openModal();

  // ✅ 2) 버튼 클릭으로도 열리게 유지 (버튼이 있을 때만)
  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  closeBtn?.addEventListener("click", closeModal);
  okBtn?.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const row1 = document.getElementById("shareRow1");

  const detailOverlay = document.getElementById("shareDetailOverlay");
  const detailClose = document.getElementById("shareDetailClose");
  const detailOk = document.getElementById("shareDetailOk");

  if (!row1 || !detailOverlay) return;

  const openDetail = () => {
    detailOverlay.classList.add("is-open");
    detailOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");
  };

  const closeDetail = () => {
    detailOverlay.classList.remove("is-open");
    detailOverlay.setAttribute("aria-hidden", "true");
  };

  row1.addEventListener("click", (e) => {
    e.stopPropagation();
    openDetail();
  });

  detailClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeDetail();
  });

  detailOk?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeDetail();
  });

  detailOverlay.addEventListener("click", (e) => {
    if (e.target === detailOverlay) closeDetail();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const alarmShareRow = document.getElementById("alarmShareRow");
  const alarmDetailOverlay = document.getElementById("alarmDetailOverlay");

  const alarmDetailClose = document.getElementById("alarmDetailClose");
  const alarmDetailOk = document.getElementById("alarmDetailOk");
  const alarmDetailCancel = document.getElementById("alarmDetailCancel");

  if (!alarmShareRow || !alarmDetailOverlay) return;

  const openAlarmDetail = () => {
    alarmDetailOverlay.style.display = "flex";
    alarmDetailOverlay.setAttribute("aria-hidden", "false");
  };

  const closeAlarmDetail = () => {
    alarmDetailOverlay.style.display = "none";
    alarmDetailOverlay.setAttribute("aria-hidden", "true");
  };

  alarmShareRow.addEventListener("click", (e) => {
    if (e.target.closest(".alarm-check")) return;
    openAlarmDetail();
  });

  alarmDetailClose?.addEventListener("click", closeAlarmDetail);
  alarmDetailOk?.addEventListener("click", closeAlarmDetail);
  alarmDetailCancel?.addEventListener("click", closeAlarmDetail);

  alarmDetailOverlay.addEventListener("click", (e) => {
    if (e.target === alarmDetailOverlay) closeAlarmDetail();
  });

  alarmDetailOverlay.style.display = "none";
});

//나의 대시보드(관심선박)//
document.addEventListener("DOMContentLoaded", () => {
  const btnMyDashboard = document.getElementById("btnMyDashboard");
  const dashboardPanel = document.getElementById("dashboardPanel");
  const dashboardClose = document.getElementById("dashboardClose");

  if (!dashboardPanel) return;

  const openDash = () => {
    dashboardPanel.style.display = "block";
    dashboardPanel.setAttribute("aria-hidden", "false");
  };

  const closeDash = () => {
    dashboardPanel.style.display = "none";
    dashboardPanel.setAttribute("aria-hidden", "true");
  };

  // ✅ 1. 페이지 최초 진입 시 → 마이 대시보드 열림
  openDash();

  btnMyDashboard?.addEventListener("click", openDash);
  dashboardClose?.addEventListener("click", closeDash);
});


// 관심선박/영역 설정 모달
document.addEventListener("DOMContentLoaded", () => {
  const shipOverlay = document.getElementById("shipGroupOverlay");
  const shipClose = document.getElementById("shipGroupClose");
  const shipOk = document.getElementById("shipGroupOk");
  const btnDashSetting = document.getElementById("btnDashSetting");

  if (!shipOverlay) return;

  const openShipGroup = () => {
    shipOverlay.style.display = "flex";
    shipOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");
  };

  const closeShipGroup = () => {
    shipOverlay.setAttribute("aria-hidden", "true");
    shipOverlay.style.display = "none";
    document.body.classList.remove("is-modal-open");
  };

  // ✅ 2. 페이지 최초 진입 시 → 모달도 자동 오픈
  openShipGroup();

  btnDashSetting?.addEventListener("click", openShipGroup);
  shipClose?.addEventListener("click", closeShipGroup);
  shipOk?.addEventListener("click", closeShipGroup);
});



//퀵메뉴(범례)//
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnLegend");
  const panel = document.getElementById("legendPanel");
  if (!btn || !panel) return;

  const open = () => {
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggle = () => {
    panel.classList.contains("is-open") ? close() : open();
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  panel.addEventListener("click", (e) => e.stopPropagation());
});



//세계선박 데이터 필터//
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".filter-tab");
  const panes = document.querySelectorAll(".filter-pane");
  const searchBtn = document.querySelector(".filter-search-btn");

  const labelMap = {
    ship: "선박 검색",
    port: "항구 검색",
    risk: "위험 검색",
  };

  const setActiveTab = (key) => {
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === key;
      t.classList.toggle("is-active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panes.forEach((p) => {
      p.classList.toggle("is-active", p.dataset.pane === key);
    });

    if (searchBtn && labelMap[key]) searchBtn.textContent = labelMap[key];
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
  });

  const initialKey =
    document.querySelector(".filter-tab.is-active")?.dataset.tab || "ship";
  setActiveTab(initialKey);


  document.addEventListener("click", (e) => {
    const head = e.target.closest(".acc-head");
    if (!head) return;

    const item = head.closest(".acc-item");
    const body = item?.querySelector(":scope > .acc-body");
    const plus = head.querySelector(".acc-plus");
    if (!body) return;

    const isOpen = head.getAttribute("aria-expanded") === "true";
    head.setAttribute("aria-expanded", String(!isOpen));
    body.hidden = isOpen;
    if (plus) plus.textContent = isOpen ? "+" : "−";
  });

  const panel = document.getElementById("filterListPanel");
  const btnList = document.querySelector(".btn-list");
  if (!panel || !btnList) return;

  const closeBtn = panel.querySelector(".filterListPanel__close");

  const openPanel = () => {
    panel.hidden = false;
    panel.setAttribute("aria-hidden", "false");
  };

  const closePanel = () => {
    panel.hidden = true;
    panel.setAttribute("aria-hidden", "true");
  };

  closePanel();

  btnList.addEventListener("click", (e) => {
    e.preventDefault();
    if (panel.hidden) openPanel();
    else closePanel();
  });

  closeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closePanel();
  });

  const allChk = document.getElementById("filterListAllChk");
  panel.addEventListener("change", (e) => {
    if (e.target === allChk) {
      panel.querySelectorAll(".filterRowChk").forEach((chk) => {
        chk.checked = allChk.checked;
      });
    }
  });
});

// S&P 정보 //
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sectionToggle[data-toggle]").forEach((btn) => {
    const key = btn.dataset.toggle;
    const content = document.querySelector(`.sectionContent[data-content="${key}"]`);
    if (!content) return;

    const icon = btn.querySelector(".material-symbols-outlined");
    const sectionBar = btn.closest(".sectionBar");
    if (!icon || !sectionBar) return;

    syncUI(content.classList.contains("is-collapsed"));

    btn.addEventListener("click", () => {
      const collapsed = content.classList.toggle("is-collapsed");
      syncUI(collapsed);
    });

    function syncUI(isCollapsed){
      icon.textContent = isCollapsed ? "chevron_right" : "remove";

      sectionBar.classList.toggle("is-open", !isCollapsed);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sectionContent").forEach((scope) => {
    const subTabs = scope.querySelectorAll(".subTab");
    const panels = scope.querySelectorAll(".subTabPanel");
    if (!subTabs.length || !panels.length) return;

    subTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.dataset.subtab;

        subTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        panels.forEach((p) => (p.hidden = p.dataset.panel !== key));
      });
    });
  });
});

//조건 분석
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuConditionAnalysis");
  const view = document.getElementById("viewConditionAnalysis");

  if (!btn || !view) return;

  const hideTargets = [
    document.querySelector(".background-image"),
    document.querySelector(".left-panel-wrap"),
    document.querySelector(".quick-menu"),
    document.querySelector(".quick-menu-end"),
    document.querySelector(".quick-menu-end-02"),
    document.getElementById("tooltip-layer"),
    document.getElementById("legendPanel")
  ].filter(Boolean);

  function openConditionAnalysis() {
    hideTargets.forEach(el => el.hidden = true);
    view.hidden = false;

    document
      .querySelectorAll(".side-bar .menu-top a")
      .forEach(a => a.classList.remove("is-active"));

    btn.classList.add("is-active");
  }

  openConditionAnalysis();
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openConditionAnalysis();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("caDetailModal");
  if (!modal) return;

  const open = () => {
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; 
  };

  const close = () => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".caMiniBtn");
    if (btn) {
      e.preventDefault();
      open();    
      return;
    }

    if (e.target.closest('[data-close="1"]')) {
      close();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const shareModal = document.getElementById("caShareModal");
  const detailModal = document.getElementById("caDetailModal");

  if (!shareModal) return;

  const openShareModal = () => {
    if (detailModal) {
      detailModal.hidden = true;
      detailModal.setAttribute("aria-hidden", "true");
    }

    shareModal.hidden = false;
    shareModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeShareModal = () => {
    shareModal.hidden = true;
    shareModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".js-caShareOpen");
    if (openBtn) {
      e.preventDefault();

      e.stopPropagation();
      e.stopImmediatePropagation();

      openShareModal(); 
      return;
    }
    const closeBtn = e.target.closest('[data-close="1"]');
    if (closeBtn && shareModal.contains(closeBtn)) {
      e.preventDefault();
      closeShareModal();
    }
  });

  document.getElementById("btnShareOk")?.addEventListener("click", () => {
    closeShareModal();
  });
});

//세계선박 DB//
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuWorldShipDB");
  if (!btn) return;

  function setActiveWorldShipDB() {
    document
      .querySelectorAll(".side-bar .menu-top a")
      .forEach(a => a.classList.remove("is-active"));

    btn.classList.add("is-active");
  }

  setActiveWorldShipDB();

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveWorldShipDB();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const panel200 = document.querySelector(".left-panel_200"); // = aside.subnav
  const collapseBtn = document.querySelector(".panel-collapseBtn_200");

  const menuLinks = document.querySelectorAll(".side-bar .menu-top a");
  const worldShipBtn = document.getElementById("menuWorldShipDB");

  if (!panel200 || !collapseBtn) return;

  menuLinks.forEach((a) => a.classList.remove("is-active"));
  worldShipBtn?.classList.add("is-active");

  collapseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    panel200.classList.toggle("is-collapsed");
    const img = collapseBtn.querySelector("img");
  });
});




