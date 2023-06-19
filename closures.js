/**
 * 클로저 Closures
 * 클로저란 내부 함수에서 외부 함수에 맥락에 접근할 수 있는 권한을 주는 것
 * 일반 적인 함수에서 전역 변수를 가리키는 것은 closures가 아님 외부함수안에 내부함수가 묶여있는 느낌 닫혀있는 느낌을 주는 것이 closures임
 * 캡슐화와 정보은닉을 위해 사용 됨
 */

// function outer() {
//   const x = 0;
//   function inner() {
//     console.log(`inside inner: ${x}`); // closures라는 특성 때문에 외부 함수의 변수에 접근할 수 있음
//   }
//   inner();
// }

// outer();

// 클로저 예제
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`); // closures라는 특성 때문에 외부 함수의 변수에 접근할 수 있음
  }
  return inner;
}

const func = outer(); // inner함수만 할당 받는 것이 아닌 외부 함수의 렉시컬 환경까지 참조 받음
func();

// 정보은닉 예제
function count() {
  let count = 0;
  function up() {
    count++;
    console.log(count);
  }
  return up;
}

const countFunc = count(); // 내부 함수를 통해서 외부 함수 렉시컬 환경에 있는 데이터를 조작할 수 있음
countFunc();
countFunc();
