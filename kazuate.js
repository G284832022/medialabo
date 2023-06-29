// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let yosou;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let a = document.querySelector('span#kaisu'); 
let b = document.querySelector('p#result');
let c = document.querySelector('span#answer'); 
hantei();
kaisu++;


hantei();

kaisu++;
hantei();

hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  //kaisu++;
  let yoso = 5;
    a.textContent=(kaisu);
    c.textContent=(yoso);
    if(kaisu<4){
      if(kaisu===3 && yoso !== kotae){
        b.textContent=("まちがい.正解は"+kotae+"でした");
      }
      else if(yoso === kotae){
        b.textContent=("正解です.おめでとう！");
        
      }else if(yoso !== kotae){
        if(yoso>kotae){
          b.textContent=("まちがい．答えはもっと小さいですよ");
        }else{
          b.textContent=("まちがい．答えはもっと大きいですよ");
        }
      }
    }else{
      b.textContent=("答えは"+kotae+"でした。すでにゲームは終わっています。");
    }
    
  
  
  
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
