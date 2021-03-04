const kalcbotton = document.getElementById('kalc')
const bottomnum = document.getElementById('bottom')
const topnum = document.getElementById('top').value;
const midnum = document.getElementById('mid').value;
function minous(t, s) {

    kalcbotton.addEventListener('click', () => {

        const answer = t - s;
        return answer;
    })
}

bottomnum.textContent = minous(topnum, midnum);
const risetbotton = document.getElementById('riset')
risetbotton.addEventListener('click', () => {
    topnum.textContent = ''
    midnum.textContent = ''
    bottomnum.textConent = ''
})

function notnumber() {
    var flag = 0;
    if (topnum.match(/[^0-9]+/)) {
        flag = 1;
    } else if (midnum.match(/[^0-9]+/)) {
        flag = 1;

    } else {
        flag = 0;
    }

    if (flag) {
        alert('数字を入れてよ！');
    }
    else {
        minous(topnum, midnum)
    }
}




/* ボタンを押したらtopの値を取得する
同じくmidの値を取得する
それをどっかのfunctionで引き算する
結果をbottomに返す
半角数字以外はアラートを出す
*/