const bodyDOM = document.body;

// 효율적인 event 관리
for (let i = 0; i < 100; i++) {
  const button = document.createElement("button");
  button.innerText = `${i}`;
  //   button.addEventListener("click", () => {
  //     console.log(button.innerText);
  //   });

  bodyDOM.appendChild(button);
}

bodyDOM.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});
