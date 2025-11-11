
function convertNumberToMonth(month) {
    if (month == 1) {
        return "Tháng 1";
    }
    else if (month == 2) {
        return "tháng 2"
    }
    else if (month == 3) {
        return "tháng 3"
    }
    else if (month == 4) {
        return "tháng 4"
    }
    else if (month == 5) {
        return "tháng 5"
    }
    else if (month == 6) {
        return "tháng 6"
    }
    else if (month == 7) {
        return "tháng 7"
    }
    else if (month == 8) {
        return "tháng 8"
    }
    else if (month == 9) {
        return "tháng 9"
    }
    else if (month == 10) {
        return "tháng 10"
    }
    else if (month == 11) {
        return "tháng 11"
    }
    else if (month == 12) {
        return "tháng 12"
    }
    else {
        return "Tháng không hợp lệ"
    }
}

//console.log(convertNumberToMonth(14));

function checkEvenOdd(x = 1) {
    if (x % 2 == 0) {
        return "x là số chẵn"
    }
    else {
        return "x là số lẻ"
    }
}

// console.log(checkEvenOdd());


function checkInteger(num) {
    if (num  % 1 === 0) {
        return "Số nguyên"
    }
    else {
        return "Không phải là số nguyên"
    }
}

//console.log(checkInteger(1.5));

function compareNumber(a, b) {
    if (a > b) {
        return "số thứ nhất lớn hơn"
    }
    else if (a < b) {
        return "số thứ 2 lớn hơn số thứ nhất"
    }
    else {
        return "hai số bằng nhau"
    }
}

console.log(compareNumber());
