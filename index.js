// const body = document.querySelector('body')
// const input = document.createElement('input')
// body.append(input)
// const span = document.createElement('span')
// body.append(span)
// span.style.display = 'none'
// const button = document.createElement('button')
// button.innerText = 'reset'
// button.style.display = 'none'
// body.append(button)

// let count = 0
// let setIntervalId

// input.addEventListener('keydown', (e) => {
//     count = Number(e.target.value)
//     if (e.code === 'Enter') {

//         if (isNaN(e.target.value) | Number(e.target.value) < 1 | Number(e.target.value) > 60) {
//             console.log('숫자를 다시 입력해주세요')
//             input.value = ''
//         } else if (1 <= Number(e.target.value) & Number(e.target.value) <= 60) {
//             span.style.display = 'block'
//             button.style.display = 'block'
//             span.innerText = Number(e.target.value)

//             setIntervalId = setInterval(() => {
//                 count
//                 span.innerText = --count
//                 if (count === 0) {
//                     clearInterval(setIntervalId)
//                 }
//             }, 1000)
//         }
//     }

// })

// button.addEventListener('click', () => {
//     input.value = ''
//     span.value = ''
//     span.style.display = 'none'
//     count = 0
//     clearInterval(setIntervalId)
// })

const bodyDOM = document.body;
// console.log(bodyDOM);

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
    // console.log("enter눌림");
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
