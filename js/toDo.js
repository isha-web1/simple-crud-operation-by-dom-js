let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    count += 1;
    const myInputValue = document.getElementById('input-value').value;
    const parent = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class= 'btn btn-danger deletbtn'>delet</button>
    <button class= 'btn btn-success'>done</button>
    </td>
    `;
    parent.appendChild(tr);
    document.getElementById('input-value').value = "";

    const elements = document.querySelectorAll('.deletbtn');
    for(const value of elements){
        value.addEventListener('click', function(events){
            events.target.parentNode.parentNode.style.display = 'none';
        })
    }

})

document.getElementById('clear-btn').addEventListener('click', function(event){
    event.target.parentNode.style.display = 'none';
})