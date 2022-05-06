// 算術演算子を使った場合の戻り値を出力する
console.log(45 + 18);
// 比較演算子を使った場合の戻り値を出力する
console.log(45 > 18);

/*
==（等価演算子）：2つの値が等しい場合はtrueを返す
===（厳密等価演算子）：2つの値とデータ型が等しい場合はtrueを返す
*/
// 等価演算子を使った場合の戻り値を出力する
console.log('5' == 5);
// 厳密等価演算子を使った場合の戻り値を出力する
console.log('5' === 5);

/*
「値が4であれば『大当たりです』という文字列を出力する」プログラム
*/
// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);
// 変数numの値を出力する（確認用）
console.log(num);
// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log('大当たりです');
}

/*
以下のようなプログラムを作成。
1.変数numに0～4までのランダムな整数を代入する
2.変数numの値が4であれば、「大当たりです」という文字列を出力する
3.それ以外のときは、「はずれです」という文字列を出力する
*/
let num2 = Math.floor(Math.random() * 5);
console.log(num2);

if (num2 === 4) {
  console.log('大当たりです');
}
else {
  console.log('はずれです');
}

/*
以下のようなプログラムを作成。
1.変数numに0～4までのランダムな整数を代入する
2.変数numの値が4であれば、「大当たりです」という文字列を出力する
3.変数numの値が3であれば、「当たりです」という文字列を出力する
4.それ以外のときは、「はずれです」という文字列を出力する
*/
let num3 = Math.floor(Math.random() * 5);
console.log(num3);

if (num3 === 4) {
  console.log('大当たりです');
}
else if (num3 === 3) {
  console.log('当たりです');
}
else {
  console.log('はずれです');
}

/*
switch文
*/
const num4 = Math.floor(Math.random() * 5);
console.log(num4);
// 変数numの値によって、出力する文字列を切り替える
switch (num4) {
  case 2:
    console.log('小吉です');
    break;
  case 3:
    console.log('中吉です');
    break;
  case 4:
    console.log('大吉です');
    break;
  default: // else
    console.log('末吉です');
    break;
}