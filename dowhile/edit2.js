let number = Number(prompt("Nhập một số nguyên dương:"));
let phannguyen = parseInt(number);
let phandu = number / phannguyen;
if (number <= 0 || phandu != 1) {
    alert("Số vừa nhập không hợp lệ !");
}
else {
do {
    alert(number);
    number = Number(prompt("Nhập một số nguyên dương:"));
    phannguyen = parseInt(number);
    phandu = number / phannguyen;
} while (number >=0 && phandu == 1)
alert("Số vừa nhập không hợp lệ !");
}