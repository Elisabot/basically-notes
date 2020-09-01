// ways to count number of occurances of a character in a string

// My favorite, because they used the illusive reduce
const reduceCounter = string => {
  return string.split('').reduce((counts,char)=>{
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}