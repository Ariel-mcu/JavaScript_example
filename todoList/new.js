function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = addTask;
}
tasks = [];
function addTask(){
    let task = document.getElementById('task');
    let feedback = '';

    if(task.value){
        tasks.push(task.value);
        task.value = '';

        feedback += `<h3>To-Do</h3>`
        feedback += `<ol><li>`
            feedback += tasks.join(`</li><li>`)
        feedback += `</li></ol>`



        // feedback += `
        //     <h3>To-Do</h3>
        //     <ol><li>
        //         ${tasks.join('</li><li>')}
        //     </li></ol>
        // `;

        // feedback += `<h3>To-Do</h3><ol><li>${tasks.join('</li><li>')}</li></ol>`;
    }

    document.getElementById('feedback').innerHTML = feedback;

    return false;
}
window.addEventListener('load',doFirst);
