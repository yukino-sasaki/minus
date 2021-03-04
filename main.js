

//minus(hitotu, hutatu)




const button = document.getElementById('minus')
button.addEventListener('click', () => {
    var hitotu = document.getElementById('hitotu').value
    var hutatu = document.getElementById('hutatu').value
    var kotae = document.getElementById('kotae')

    a = isFinite(hitotu);
    b = isFinite(hutatu);

    if (a == false || b == false) {
        alert('数字を入れてよ')
    } else if (hitotu > 9999999999 || hutatu > 99999999) {
        alert('数字が大きすぎるよ')
    } else if (hitotu < 0 || hutatu < 0) {
        alert('数字が小さすぎるよ')
    } else

        kotae.value = eval(hitotu) - eval(hutatu);
})






const plusbutton = document.getElementById('plus')
plusbutton.addEventListener('click', () => {
    var hitotu = document.getElementById('hitotu').value
    var hutatu = document.getElementById('hutatu').value
    var kotae = document.getElementById('kotae')

    a = isFinite(hitotu);
    b = isFinite(hutatu);

    if (a == false || b == false) {
        alert('数字を入れてよ')
    } else if (hitotu > 9999999999 || hutatu > 99999999) {
        alert('数字が大きすぎるよ')
    } else if (hitotu < 0 || hutatu < 0) {
        alert('数字が小さすぎるよ')
    } else

        kotae.value = eval(hitotu) + eval(hutatu);
})

/* なぜhitotu.valueとできないのか
textContentの意味??kotae.textContentでは動かなかった理由
hitotu,hutatuの定義をfunctionの外に出したら動かなかった理由
varやconstをつけないでもaやbが指定できる理由
 */

/*  +、－ボタンを増やす
 処理の過程を二回書くことになるので引数を用いた関数で表したい */