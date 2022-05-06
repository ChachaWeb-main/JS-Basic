/*---------------------
17.4 イベント処理
---------------------*/
// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});

/*-------------------------------
17.5 クリック時にリストを追加
-------------------------------*/
const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');
// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const childList = document.createElement('li');
  // 作成したli要素を代入した定数childListに「リストが追加されました」というテキストを追加する
  childList.textContent = 'リストが追加されました';
  // ul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});

/*-------------------------------------------
18.3 フォームに入力された文字数をカウント
-------------------------------------------*/
// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');
// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;
  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

/*----------------------------------------
18.4. 選択されたラジオボタンの値を取得
----------------------------------------*/
// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');
// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener('click', () => {
  // 選択されたラジオボタンの値を取得する
  const area = document.forms.areaForm.area.value;
  // 取得した値を出力する
  console.log(area);
});

/*----------------------------------------------
18.5. 選択されたチェックボックスの値を取得
----------------------------------------------*/
// os-btnというidを持つHTML要素を取得し、定数osBtnに代入する
const osBtn = document.getElementById('os-btn');
// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;
  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});