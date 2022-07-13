function doFirst(){
    //先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calaulate;
    // document.getElementById('submit').onsubmit = calaulate;
}
function calaulate(){
    // 宣告函數
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let tax = document.getElementById('tax').value;
    let discount = document.getElementById('discount').value;
    // console.log(quantity);

    let total = quantity * price;

    tax = tax / 100;    // or tax /= 100;
    tax++;
    total = total * tax;  //total *= tax;

    total = total - discount;  //total -= discount;
    total = total.toFixed(2);

    document.getElementById('total').innerText = total;

    return false;
    // 資料未送出
}
window.addEventListener('load',doFirst)
// window.onload = doFirst;
// window.onload = function(){}
// $(document).ready(function(){})
// $('#submit').click(function(){})
// 物件事件處理函數，function 事件聆聽