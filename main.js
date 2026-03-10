//Javascript Conditionals

function identify_sign() {
    num1 = document.getElementById('input1').value;

    if (num1 > 0) {
        document.getElementById('output').innerHTML = 'Positive.';
}
    else if (num1 == 0) {
        document.getElementById('output').innerHTML = 'Zero.';
    }
    else {
        document.getElementById('output').innerHTML = 'Negative.';
}
}

function odd_or_even() {
    num1 = document.getElementById('input1').value;

    if(num1 % 2 == 0) {
        window.alert('Even.');
    }
    else {
        window.alert('Odd.');
    }
}