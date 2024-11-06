document.getElementById('generateOrder').addEventListener('click', function() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    if (isNaN(start) || isNaN(end) || isNaN(numberOfPeople) || start > end || numberOfPeople <= 0) {
        alert("유효한 값을 입력하세요.");
        return;
    }

    // 시작 번호와 끝 번호 사이의 숫자를 배열로 만듦
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    // 발표할 사람 수만큼 랜덤하게 숫자 선택
    let selectedNumbers = [];
    for (let i = 0; i < numberOfPeople; i++) {
        if (numbers.length === 0) {
            alert("선택할 숫자가 부족합니다.");
            return;
        }
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers.splice(randomIndex, 1)[0];
        selectedNumbers.push(selectedNumber);
    }

    // 결과 출력 (각 숫자를 둥근 사각형 박스에 표시)
    const resultArea = document.getElementById('result');
    resultArea.innerHTML = "결과: "; // 기존 내용을 초기화
    selectedNumbers.forEach(function(num) {
        const numberBox = document.createElement('span');
        numberBox.className = 'number-box';
        numberBox.textContent = num;
        resultArea.appendChild(numberBox);
    });
});
