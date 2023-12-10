const a = 10 > 9;
const b = true || false;
const c = true && false;

// (true !== false) && true
if (b !== c && a) {
  console.log("hi!");
} else {
  console.log("hey!");
}

// hey!
