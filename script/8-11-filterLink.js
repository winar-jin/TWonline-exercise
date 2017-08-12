module.exports = function (str, val) {
    var valArr = str.split('->');
    var result = valArr.filter(ele => parseInt(ele,10) !== val);
    return result.join('->');
}