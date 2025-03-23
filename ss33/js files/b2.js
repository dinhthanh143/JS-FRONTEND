
let countShown = document.getElementById('count')
let checkBtn = document.getElementById('check')


checkBtn.onclick = function() {
    let value = document.getElementById('area').value
    let count = 0
for(let i =0; i<value.length; i++) {
    count ++
}
countShown.textContent = `${count} ký tự`
}