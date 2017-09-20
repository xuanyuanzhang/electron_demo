/**
 * Created by xz258 on 9/20/2017.
 */

// Load 2D data from txt file and store them in 2D array.
const fs = require('fs');
const rows = fs.readFileSync('~/../source/data.txt').toString().split('\n');
let res = [];

for (i=0; i<rows.length; i++){
    res[i] = rows[i].split(',');
    // console.log(res[i]);
}

function createTable(tableData) {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        let row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}
createTable(res);
// document.getElementById("demo").innerHTML = res;