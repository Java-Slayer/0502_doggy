function save() {
    let tr = document.querySelector('.list')
    let tr_clone = tr.cloneNode(true)
    let table = document.querySelector('#tbody')
    console.log(table)
    let newRow = table.insertRow(1)
    newRow.innerHTML = tr_clone.innerHTML
}
