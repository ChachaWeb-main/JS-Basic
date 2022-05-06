// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

/*-------------------------------
16.3 DOM操作でHTML要素を取得
-------------------------------*/
/* ----- getElementById()：HTML要素をidで取得する ----- */
// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

/* ----- getElementsByClassName()：HTML要素をclassで取得する ----- */
// HTML要素をclassで取得し、中身を出力する
// ※idとは異なり複数のHTML要素に設定できるので、そのすべてのHTML要素を取得（そのため「getElement」ではなく「getElements」と複数形に
console.log(document.getElementsByClassName('heading'));

/* ----- 複数のHTML要素を1つずつ取得する ----- */
// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');
// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

/* ----- querySelector()：HTML要素をCSSセレクタで取得する（※最初の1つのみ※） ----- */
// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

/* ----- querySelectorAll()：HTML要素をCSSセレクタで取得する（すべて）  NodeListが戻り値として返ってくる----- */
// HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

/*-------------------------------
16.4 DOM操作でHTML要素を作成
-------------------------------*/
/* 
「リストを追加する」
1. createElement()：HTML要素を新しく作成するメソッド。
2. textContent / innerHTML：HTML要素にテキストを追加するプロパティ。 ※innerHTMLは通常の文字列に加えてHTMLタグも記述できる
3. appendChild()：作成したHTML要素を子要素として末尾に追加するメソッド。
*/
// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');
// テキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
// li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';
// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);
