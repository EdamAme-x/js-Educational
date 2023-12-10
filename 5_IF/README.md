if 文はプログラミングお馴染み
正誤判定の為の構文

`
if (ここに計算式(条件式)) {
    処理
}
`

ここから少しづつ難しくなってく

`2 > 1`
これはどういうのだと思う？
2は1より大きい
その通り
結果はどうだと思う？
結果は真(正解)
これをプログラムで表すとどうなる？
`true`
これは真 つまり正しいの意味
`false`
これは偽 つまり間違っているの意味

if文は

`
if (ここが真(true)なら) {
    ここの中の処理を実行する
}
`

例
`
if (2 > 1) {
    console.log("hi!")
}
`

なにがログに出る？
`hi!`
正解

elseってのも有る
`
if (2 < 1) {
    console.log("hi!")
}else {
    console.log("bye!")
} // もし違うなら
`

何が出る？
`bye!`
正解

elifってのもある

`
if (1 > 2) {
    console.log("hi!")
    // もし条件式が正しいなら
}elif (3 > 1) {
    console.log("hey!")
    // もし条件式が正しいなら
}else {
    console.log("bye!")
    // 全てが違うなら
}
`

何が出る？
`hey!`
正解

elifは

`
if (...) {

}

if (...) {

}

...
`
を短く書ける物だと思えばええ

条件式には変数も使える

`
const a = 15
const b = 17

// aの方が数字が大きいならa、bの方が数字が大きいならb をログして

if (a > b) {
    console.log(a)
}else  {
    console.log(b)
}
`
正解

ここで問題

`
if (true) {
    console.log("hi!")
}else {
    console.log("hey!")
}
`

どっちが出る？ 条件式が判定される条件を考えて
`hey!`

No

trueは真
falseは偽

もう一回考えて
`hi!`
正解

`
const a = 3 > 1;
if (a) {
    console.log("hi!")
}else {
    console.log("hey!")
}
`

何が出る？
`hi!`

正解

`console.log(a)`をしたら何が出る？

`3 > 1`

No

正解は `true`

条件式も結局は計算と同じ

練習

`
const a = 3 < 1;

if (a) {
    console.log("hi!")
}else {
    console.log("hey!")
}
`

`hey!`

OK

`>=`と`<=`の説明

**<=**
`
const a = 3 <= 4;

if (a) {
    console.log("hi!")
}else {
    console.log("hey!")
}
`

何でしょう

`hi!`

これは `<=` は以上って意味
簡単に言うと `≦`
不等号
「より大きいか等しい」を意味する数学記号

**>=**
```js
const a = 3 >= 4;

if (a) {
console.log("hi!")
}else {
console.log("hey!")
}
```

`hey!`
正解

```
> 超過
>= 以上
<= 以下
< 未満
```

ってこと？

正解

次は等号と不等号

```js
if (1 == 1) {
    console.log("hey!")
}else {
    console.log("hi!")
}
```

どう？
`hey!`

正解
これは両端が等しかったらおｋ
これの他に厳格等号 ( `===` )があるけど
気になったら調べて

```js
if (1 !== 1) {
  console.log('hey!')
} else {
  console.log('hi!')
}
```

どっちだと思う
`hey!`

No
`!==`は両辺が違うならってこと

つまり？
1と1は同じだからfalse
正解
`hi!`

これが `1 !== 2`ならtrue

次は複数の式

```js
if ((2 > 1) && (3 > 1)) {
    console.log("hi!")
}
```

どうなる？
`hi!`

正解

`&&`は二つの式がどっちもtrueならtrue

```js
if (2 > 1 || 0 > 1) {
  console.log("hi!")
}else {
  console.log("hey!")
}
```

どうなる？
`hi!`
正解

`||` はどっちかがtrueなら
どっちかにfalseがあろうがtrue
どっちもfalseならfalse

練習

```js
if (2 > 1 || ((3 > 1) && (1 !== 2))) {
    console.log('hi!')
}else {
    console.log('hey!')
}
```

`hi!`
正解！

じゃあコード