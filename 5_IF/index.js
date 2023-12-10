const a = 10 > 9;
const b = true || false;
const c = true && false;

// (true !== false) && true
if (b !== c && a) {
  console.log("hi!");
} else {
  console.log("hey!");
}

const d = "おは"
const e = "おや"

if (d !== e) {
    console.log("こん")
}

// hey!
// ( > ) 超過
// ( >= ) 以上
// ( <= ) 以下
// ( < ) 未満
// ( !== ) 両辺が違うなら
// ( && ) 両辺がどっちもtrueなら
// ( || ) どっちかがtrueなら