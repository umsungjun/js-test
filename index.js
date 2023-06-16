const body = document.querySelector('body')
const input = document.createElement('input')
body.append(input)
const span = document.createElement('span')
body.append(span)
span.style.display = 'none'
const button = document.createElement('button')
button.innerText = 'reset'
button.style.display = 'none'
body.append(button)

let count = 0
let setIntervalId

input.addEventListener('keydown', (e) => {
    count = Number(e.target.value)
    if (e.code === 'Enter') {

        if (isNaN(e.target.value) | Number(e.target.value) < 1 | Number(e.target.value) > 60) {
            console.log('숫자를 다시 입력해주세요')
            input.value = ''
        } else if (1 <= Number(e.target.value) & Number(e.target.value) <= 60) {
            span.style.display = 'block'
            button.style.display = 'block'
            span.innerText = Number(e.target.value)

            setIntervalId = setInterval(() => {
                count
                span.innerText = --count
                if (count === 0) {
                    clearInterval(setIntervalId)
                }
            }, 1000)
        }
    }

})

button.addEventListener('click', () => {
    input.value = ''
    span.value = ''
    span.style.display = 'none'
    count = 0
    clearInterval(setIntervalId)
})