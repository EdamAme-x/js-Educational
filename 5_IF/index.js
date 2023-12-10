const a = 3 > 9
const b = true || false
const c = false && true

if ((b !== c) || a) {
    console.log("hi!")
}else {
    console.log("hey!")
}

// hey!
// 自分で条件式変えて hey! が出るようにしてみて
// ちょっと考える ok