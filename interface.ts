interface Person {
    readonly id: number;
    name: string;
    age: number;
    city: string
}

const xm: Person = {
    id: 1234,
    name: 'xiaomi',
    age: 27,
    city: 'chengdu'
}
xm.id = 12345


