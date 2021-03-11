let number = Number(prompt("Nhập một số nguyên dương:"));
let phannguyen = parseInt(number);
let phandu = number / phannguyen;
for (;phandu == 1 && number >= 0;number = Number(prompt("Nhập một số nguyên dương:")),
phannguyen = parseInt(number),phandu = number / phannguyen) {
    alert(number);
}
alert("Số vừa nhập không hợp lệ !")