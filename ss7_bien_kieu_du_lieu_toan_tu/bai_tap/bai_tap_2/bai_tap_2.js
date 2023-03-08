function changeCurren(){
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;
    if (From == 'VNĐ' && To == 'USD'){
        Result = 'Result = ' + (Amount / 23000) + '$';
    }
    else if (From == 'USD' && To == 'VNĐ'){
        Result = 'Result = ' + (Amount * 23000) + 'Đ';
    }
    else if (From == 'VNĐ'){
        Result = 'Result = ' + Amount + 'Đ';
    } else {
        Result = 'Result = ' + Amount + '$';
    }
    document.getElementById('Result').innerHTML = Result;
}