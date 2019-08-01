function giaiPhuongTrinh() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    if (a == 0){
        document.getElementById("result").innerHTML = "Day khong phai phuongtrinh bac 2!";
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0){
            document.getElementById("result").innerHTML = "Phuong trinh vo nghiem."
        } else {
            if (delta == 0){
                let x = -b / (2 * a);
                document.getElementById("result").innerHTML = "Phuong trinh co nghiem kep: x = " + x;
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                document.getElementById("result").innerHTML = "Phuong trinh co 2 nghiem:</br> x1 = " + x1 + "</br> x2 = " +x2;
            }
        }
    }
}