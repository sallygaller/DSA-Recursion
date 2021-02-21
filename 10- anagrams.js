// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word
// or phrase in another, rearranged order.
// Write a function that creates an anagram list,
// listing all the rearrangements of a given word.
// For example, if the user types "east", the program should list all 24 permutations,
// including "eats", "etas", "teas", and non-words like "tsae".

function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let current = str.substring(i, i + 1);
      let before = str.substring(0, i);
      let after = str.substring(i + 1);
      anagrams(prefix + current, before + after);
    }
  }
}

anagrams("", "east");
