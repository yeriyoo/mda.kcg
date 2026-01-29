// input 증가/감소 버튼 
 document.addEventListener('click', (e) => {
    const upBtn = e.target.closest('.spinUp');
    const downBtn = e.target.closest('.spinDown');

    if (!upBtn && !downBtn) return;

    const numInput = e.target.closest('.numInput');
    const input = numInput.querySelector('input[type="number"]');

    const step = Number(input.step) || 1;
    const min = input.min !== '' ? Number(input.min) : -Infinity;
    const max = input.max !== '' ? Number(input.max) : Infinity;

    let value = input.value === '' ? 0 : Number(input.value);

    if (upBtn) value += step;
    if (downBtn) value -= step;

    value = Math.min(Math.max(value, min), max);

    input.value = value;

    // React state 연동용 이벤트 트리거
    input.dispatchEvent(new Event('input', { bubbles: true }));
});
// input 증가/감소 버튼 키보드 이벤트
document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    const input = e.target;
    if (input.type !== 'number') return;

    const step = Number(input.step) || 1;
    let value = input.value === '' ? 0 : Number(input.value);

    if (e.key === 'ArrowUp') value += step;
    if (e.key === 'ArrowDown') value -= step;

    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
});


