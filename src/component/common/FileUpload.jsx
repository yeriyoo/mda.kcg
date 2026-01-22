import React, { useState } from 'react';

export default function FileUpload({ label = "파일 선택", inputId, maxLength = 25, placeholder = "선택된 파일 없음" }) {
  const [fileName, setFileName] = useState('');

  // 중간 생략 함수
  const truncateMiddle = (str, maxLen) => {
    if (!str) return '';
    if (str.length <= maxLen) return str;
    const keep = Math.floor((maxLen - 3) / 2);
    return str.slice(0, keep) + '...' + str.slice(str.length - keep);
  };

  const handleChange = (e) => {
    const name = e.target.files[0]?.name || '';
    setFileName(name);
  };

  return (
    <div className="fileWrap">
      <input
        type="file"
        id={inputId}
        className="fileInput"
        onChange={handleChange}
      />
      <label htmlFor={inputId} className="fileLabel">
        {label}
      </label>
      <span className="fileName">
        {fileName ? truncateMiddle(fileName, maxLength) : placeholder}
      </span>
    </div>
  );
}
