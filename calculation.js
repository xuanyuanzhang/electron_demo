/**
 * Created by xz258 on 9/18/2017.
 */


const math = require('mathjs');
const res = math.pow([[-1, 2], [3, 1]], 2);
document.getElementById("demo").innerHTML = res[0];