let number = Number(prompt("Nhập một số nguyên dương:"));
let phannguyen = parseInt(number);
let phandu = number / phannguyen;
while (phandu == 1 && number >= 0 ) {
    alert(number);
    number = Number(prompt("Nhập một số nguyên dương:"));
    phannguyen = parseInt(number);
    phandu = number / phannguyen;
    continue;
    break;
}
alert("Số vừa nhập không hợp lệ !")