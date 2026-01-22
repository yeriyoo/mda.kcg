import { useState } from "react";

function Slider({ label = "", min = 0, max = 100, defaultValue = 50 }) {
  const [value, setValue] = useState(defaultValue);

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <label className="rangeWrap">
      <span className="rangeLabel">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ "--percent": `${percent}%` }}
        aria-label={label}
      />
    </label>
  );
}

export default Slider;
