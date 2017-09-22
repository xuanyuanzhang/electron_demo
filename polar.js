/**
 * Created by xz258 on 9/21/2017.
 */

// let imported = document.createElement('script');
// imported.src = '~/../numeric.js';
// document.head.appendChild(imported);

function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}

function one_d_to_two_d(arr) {
    if(arr.length<2) {return arr.length===1?arr:[];}
    let res = [];
    let height = Math.sqrt(arr.length);
    for(let i=0; i<height; i++){
        res[i] = arr.slice(height*i, height*(i+1));
    }
    return res;
}

const radius_min = 1;
const radius_max = 300;
const angle = 55;
const N = 3064;
let theta = [];
let r = [];

step_theta = angle / (N-1);
step_r = (radius_max - radius_min) / (N-1);
let theta_1d = linspace(radius_min, radius_max, N);
let r_1d = linspace(-angle/2, angle/2, N);

// console.log(theta_1d);
// console.log(r_1d);

let meshgrid = require('ndarray-meshgrid');
let arr = meshgrid([radius_min, radius_max, step_r],[-angle/2, angle/2, step_theta]).data;
for(i=0; i<arr.length; i++){
    if(i%2===0){
        r.push(arr[i]);
    }
    else{
        theta.push(arr[i]);
    }
}
theta = one_d_to_two_d(theta);
r = one_d_to_two_d(r);
// console.log(theta);
// console.log(r);
let x = [];
let y = [];

for(let i=0; i<r.length; i++){
    let x_row = [];
    let y_row = [];
    for(let j=0; j<r[0].length; j++){
        const r_val = r[i][j];
        const theta_val = theta[i][j];
        x_row.push(-r_val * Math.cos(theta_val * Math.PI / 180) - radius_min);
        y_row.push(-r_val * Math.sin(theta_val * Math.PI / 180) - radius_min);
    }
    x.push(x_row);
    y.push(y_row);
}

// console.log(x);
// console.log(y);