alert("Sau day minh se giai phuong trinh bac hai dang a.x^2 + b.x +c = 0")
alert("Vui long nhap vao cac so a, b, c");
let a = parseInt(prompt("Nhap gia tri a: "));
let b = parseInt(prompt("Nhap gia tri b: "));
let c = parseInt(prompt("Nhap gia tri c: "));

if (a == 0){
    alert("Day khong phai la phuong trinh bac 2!");
} else {
    delta = b * b - 4 * a * c;
    if (delta < 0){
        alert("Phuong trinh vo nghiem.");
    } else {
        if (delta == 0){
            x = -b / (2 * a);
            alert("Phuong trinh co nghiem kep: x = " + x);
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert("Phuong trinh co 2 nghiem:</br> x1 = " + x1 + "</br> x2 = " +x2);
        }
    }
}