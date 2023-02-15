function addName (first: string, ...last: string[]) {
  return first +  last.join('%%%%')
}

let addfun: (first: string, ...last: string[]) => string = addName

console.log(addfun('tan','wenfu','nihao'))