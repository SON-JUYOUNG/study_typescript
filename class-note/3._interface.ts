interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let person: Developer = {
    name: "son",
    language: "javascript",
    age: 1
}