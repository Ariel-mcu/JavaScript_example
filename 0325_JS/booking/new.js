
function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
    
    // setInterval(某函數, 多少毫秒)
    // setTimeout(某函數, 多少毫秒)
    
    setInterval(function(){
        time.innerText = `今天是西元 ${new Date().getFullYear()} 年 ${new Date().getMonth() + 1} 月 ${new Date().getDate()} 日 ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }, 1000);
}    
function calculate(){
    let start = document.getElementById('start');
    let end = document.getElementById('end');
    let feedback = '';

    let startDate = new Date(start.value)
    let endDate = new Date(end.value)
    // alert(endDate - startDate)

    let day = 24 * 60 * 60 * 1000;   // 一天的總毫秒數

    if(startDate.getTime() && endDate.getTime()){
        if(startDate <= endDate){
            let diff = endDate - startDate;
    
            if(diff <= day){
                interval = 1;
            }else{
                // interval = diff / day
                interval = Math.round(diff / day)
            }
    
            feedback += `The room has been scheduled starting on ${startDate.toLocaleDateString()} and ending on ${endDate.toLocaleDateString()}, which is a period of ${interval} day.`
        }else{
            feedback += `The start date must come before the end date.`;
        }
    }else{
        feedback += `Please enter valid dates.`
    }






    
    document.getElementById('feedback').innerText = feedback;

    return false;
}
window.addEventListener('load',doFirst)
// window.onload = doFirst;
// window.onload = function(){}
