function addCommas(num) {


    let parsedNum = ("" + num).split('.')[1].length > 1 ?
        parseFloat(num.toFixed(2)).toLocaleString() :
        parseFloat(num.toFixed(2)).toLocaleString() + '0';

    return parsedNum;

}


module.exports = addCommas;