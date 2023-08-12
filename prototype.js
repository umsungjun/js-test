// const dog = { name: "멍멍이", age: 3, owner: { name: "jun" } };

// console.log(Object.keys(dog)); // object의 key값들을 배열로 return
// console.log(Object.values(dog)); // object의 value들만 배열로 return
// console.log(Object.entries(dog)); // key와 value를 묶어서 배열로 return

// console.log("name" in dog); // dog라는 객체 안에 'name'이라는 key가 있는지 boolean으로 return
// console.log(dog.hasOwnProperty("name")); // dog라는 객체 안에 'name'이라는 key가 있는지 boolean으로 return

// Object.freeze 추가 안됨, 삭제 안됨, 쓰기 안됨, 속성 재정의 안됨

// Object.freeze(dog); // 객체 불변성을 위해서 동결 !! 1Depth 까지만 적용

// dog.name = "댕댕이";
// console.log(dog);
// dog.age = 10;
// console.log(dog);
// delete dog.name;
// console.log(dog); // 삭제 또한 안됨

// 하지만 2 Depth의 value를 수정한다면!?
// dog.owner.name = "hun";
// console.log(dog); // 주인 owner의 이름은 변경이 'hun'으로 됨

// const cat = {};
// Object.assign(cat, dog); // const cat = {...dog}와 동일 함 // cat 오브젝트에 dog오브젝트를 복사 함
// console.log(cat);
// Object.seal(cat); // 객체안에 value는 수정할 수 있지만 추가 or 삭제 or 속석 재정의는 안됨
// cat.plus = "추가"; // 값 추가 안됨
// delete cat.name; // 삭제 안됨
// cat.name = "고양이"; // value 수정은 됨
// console.log(cat);

// console.log(Object.isFrozen(dog)); // 객체가 동결 되었는지 확인 가능
// console.log(Object.isSealed(cat)); // 객체가 밀봉 되었는지 확인 가능

// 확장 금지 preventExtensions
// const tiger = { sound: "어흥" };
// Object.preventExtensions(tiger); // 확장을 금지 시킴 preventExtensions
// console.log(Object.isExtensible(tiger)); // 확장이 되는지 안되는지 확인할 수 있음
// tiger.name = "호랭이";
// console.log(tiger); // 객체에 속성 추가만 안됨

// const dog1 = { name: "뽀삐", owner: "성준" };
// const dog2 = { name: "도기", owner: "성훈" };

function Dog(name, owner) {
  // 생성자 함수
  this.name = name;
  this.owner = owner;
  // 인스턴스 레벨의 함수 : 생성자 함수를 통해 생성된 모든 객체에 포함이 되서 메모리 낭비를 불러 일으킴
  this.printName = () => {
    console.log(this.name);
  };
}

// 프로토 타입 레벨의 함수 : 메모리를 절약할 수 있음
Dog.prototype.printName = () => {
  console.log(this.name);
};

// const dog1 = new Dog("뽀삐", "성준");
// const dog2 = new Dog("도기", "성훈");

// console.log(dog1, dog2); // 생성자 함수를 통해 객체를 생성
// dog1.printName(); // 프로토타입을 통해서 메서드를 이용할 수 있음
// dog2.printName();

// 인스턴스 레벨의 함수와 프로토타입의 레벨의 차이는 프로토 타입레벨의 함수를 이용하면 생성자 함수를
// 이용해서 만든 모든 객체는 프로토 타입 메서드를 사용할 수 있음

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면(오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려지게 됨

// dog1.printName = () => {
//   console.log("안녕하세요");
// };

// dog1.printName(); // 안녕하세요가 출력 됨

// 객체지향 프로그래밍 => 장점 : 상속을 통한 코드의 재사용성

// function Dog(name, owner) {
//   // 생성자 함수
//   this.name = name;
//   this.owner = owner;
//   // 인스턴스 레벨의 함수 : 생성자 함수를 통해 생성된 모든 객체에 포함이 되서 메모리 낭비를 불러 일으킴
// }

// Dog.prototype.printName = function () {
//   console.log(this.name);
// };

// function Cat(name, owner, age) {
//   Dog.call(this, name, owner); // super와 비슷함
//   this.age = age;
// }

Cat.prototype = Object.create(Dog.prototype); // 원래는 Object의 prototype을 상속받지만 Dog의 프로토타입을 상속받도록 변겨

Cat.prototype.play = () => {
  console.log("고양이와 놀기!");
};

const cat = new Cat("고양이", "엄성준", 25);
cat.play();
cat.printName(); // Dog의 prototype 함수인 printName을 사용할 수 있는 이유는 Object의 create()를 통해서
// Dog의 prototype을 상속받았기 때문

console.log(cat instanceof Cat); // 객체가 instanceof 어떤 생성자 함수에게 상속받는지 알 수 있음
console.log(cat instanceof Dog); // cat은 생성자 함수 Cat을 통해서 생성 된 객체이고 Cat함수는 Dog함수를 상속받기 때문에 true 출력

// const sleep = {
//   sleep: () => {
//     console.log("쿨쿨쿨");
//   },
// };

// const play = {
//   play: () => {
//     console.log("우리같이 놀자");
//   },
// };

// function Human(name) {
//   this.name = name;
// }

// Object.assign(Human.prototype, play, sleep); // Human prototype에 play와 sleep객체를 상속시켰기 때문

// const man = new Human("엄성준");

// console.log(man);
// man.sleep();
// man.play();
