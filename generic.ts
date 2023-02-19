interface LengthAd {
    length: number;
}

function getLength<T extends LengthAd>(arg: T) {
    console.log(arg.length)
    return arg
}

const re = getLength('1234')

console.log(re)
