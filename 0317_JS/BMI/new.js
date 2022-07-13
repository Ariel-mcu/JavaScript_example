function doFirst(){
    //先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calaulate;
    // document.getElementById('submit').onsubmit = calaulate;
}
function calaulate(){
    // BMI: 體重/身高(公尺)的平方
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
//1
    // let result = weight / ((height / 100) * (height / 100))
//2    
    let result = weight / Math.pow(height / 100, 2)
   
    document.getElementById('result').innerText = result.toFixed(2);

    return false;
    // 資料未送出
}
window.addEventListener('load',doFirst)
// window.onload = doFirst;
// window.onload = function(){}
// $(document).ready(function(){})
// $('#submit').click(function(){})
// 物件事件處理函數，function 事件聆聽