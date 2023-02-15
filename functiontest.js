function addName(first) {
    var last = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        last[_i - 1] = arguments[_i];
    }
    return first + last.join('%%%%');
}
var addfun = addName;
console.log(addfun('tan', 'wenfu', 'nihao'));
