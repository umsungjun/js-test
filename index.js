// HTML 파일에 숫자를 입력할 수 있는 input과 reset 버튼을 생성한 뒤 input에 숫자를 입력하고 Enter key를 누르면 입력한 숫자가 1초에 1씩 줄어들면서 0이 되면 줄어들지 않고 reset 버튼을 클릭했을 때 초기화 시켜주는 script를 작성해 주세요.

const bodyDOM = document.body;

const input = document.createElement("input");
bodyDOM.appendChild(input);

const count = document.createElement("span");
bodyDOM.appendChild(count);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
bodyDOM.appendChild(resetBtn);

let spanCount = 0;
let timer;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if ((Number(input.value) < 1) | (Number(input.value) > 60)) {
      alert("숫자를 다시 입력해주세요");
      input.value = "";
    } else if ((Number(input.value) >= 1) & (Number(input.value) <= 60)) {
      console.log("정확한 숫자범위");
      count.style.display = "block";
      spanCount = Number(input.value);

      timer = setInterval(() => {
        --spanCount;
        count.innerText = spanCount;
        if (spanCount === 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
});

resetBtn.addEventListener("click", () => {
  spanCount = 0;
  count.style.display = "none";
  input.value = "";
  clearInterval(timer);
});
