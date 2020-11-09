function sumNum() {
    const start = Number(document.getElementById('start').value);
    const end = Number(document.getElementById('end').value);
    const isEven = document.getElementById('even').checked;
    const isOdd = document.getElementById('odd').checked;
    let sum = 0;

    const dv = isEven ? 0 : isOdd ? 1 : null;

    if (dv === null) {
        alert("Check type of number!"); 
        return '';
    }

    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        if ( i % 2 == dv || (isEven && isOdd) ) {
            sum += i;
        }
    }

    return sum;
}



const butStart = document.querySelector('#but');
const startInput = document.querySelector('#start');
const endInput = document.querySelector('#end');
const result = document.querySelector('#result');
const evenCheckbox = document.querySelector('#even');
const oddCheckbox = document.querySelector('#odd');

butStart.onclick = function () {
    result.value = sumNum();
};

startInput.addEventListener('input', () => result.value = '');

endInput.addEventListener('input', () => result.value = '');

evenCheckbox.addEventListener('click', () => result.value = '');

oddCheckbox.addEventListener('click', () => result.value = '');



