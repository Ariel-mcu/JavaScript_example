function doFirst(){
    //先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = setEvent;
}
function setEvent(){
    let events = ['click','select','contextmenu','change','keyup','input'];
            //event[0], event[1]................event[5]
    for(let i = 0; i < events.length; i++){
        let yourCheck = document.getElementById(events[i]);

        if(yourCheck.checked){
            document.addEventListener(events[i],report)
        }else{
            document.removeaddEventListener(events[i],report)

        }
    }
    feedback = document.getElementById('feedback');
    feedback.value = ''

    return false;
    // 資料未送出
}
function report(e){
    //印出:
    //BUTTON :click
    //FIELDSET: contextmenu
    feedback.value += `${e.target.nodeName}: ${e.type} \n`
    //alert(e.target.nodeName)
}
window.addEventListener('load',doFirst)
// window.onload = doFirst;
// window.onload = function(){}
// $(document).ready(function(){})
// $('#submit').click(function(){})
// 物件事件處理函數，function 事件聆聽