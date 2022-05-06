/*------------
*   クラス
*------------*/
// コンストラクタとは、クラスをもとにオブジェクトを作る（インスタンス化する）際に処理を行う関数のこと。コンストラクタによって実行される最初の処理のことを、初期化という。

/*---------- コンストラクタで処理 ----------*/
//クラスを定義する
class Product {
  //インスタンス化すると同時に処理を実行（初期化）する
  constructor() {
    console.log('敏感肌にも優しい100%天然由来のシャンプーです。');
  }
}
//インスタンス化する
const shampoo = new Product();


// ※どのインスタンス（オブジェクト）も同じ値
/*---------- コンストラクタでプロパティを持たせる（引数なしバージョン） ----------*/

// クラスを定義する
class Product2 {
  // コンストラクタを使ってインスタンス化するときに初期化する
  constructor() {
    console.log('敏感肌にも優しい100%天然由来のシャンプーです。')
    // インスタンス（オブジェクト）にプロパティを持たせる
    this.name = 'シャンプー';
    this.price = 500;
    this.category = '生活雑貨';
  }
}
// インスタンス化する
const shampoo2 = new Product2();
// インスタンス（オブジェクト）の値を出力する
console.log(shampoo2);


// ※インスタンス毎に値を変えたい場合
/*---------- コンストラクタでプロパティを持たせる（引数ありバージョン） ----------*/
class Product3 {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
// インスタンス化するときに引数を渡す
const book = new Product3('参考書', 1000, '本');
const coffee = new Product3('コーヒー', 1500, '飲料');

console.log(book);
console.log(coffee);


/*---------- メソッド => オブジェクトが持つ関数 ----------*/
class Product4 {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // メソッドを定義する
  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }
}
const shampoo3 = new Product4('シャンプー', 500, '生活雑貨');
const coffee2 = new Product4('コーヒー', 1500, '飲料');

console.log(shampoo3);
console.log(coffee2);
// メソッドを呼び出す（実行する）
shampoo3.describe();


// クラスから生成されるインスタンスではなく、通常のオブジェクトにメソッドを定義する事もできる！
/*---------- 通常のオブジェクトにメソッドを定義する方法 ----------*/

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  // メソッド greet を定義
  greet: () => {
    console.log('よろしくお願いします！');
  }
}
// メソッドを呼び出す（実行する）
user.greet();