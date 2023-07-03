let x: [string, number];

x = ["hello", 39];

// 항상 순서와 타입, 길이가 맞아야 한다.

// x = [10, 'Mark']; // Error

// x[3] = 'world' Error
x[0] = "world";

const person: [string, number] = ["Peter", 25];

const [first, second] = person;
// array였다면 number이거나 string이거나로 나왔을텐데 tuple의 경우 순서를 지키기 때문에 first는 string, second는 number이다.
