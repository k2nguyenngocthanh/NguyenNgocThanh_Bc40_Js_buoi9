class SinhVien {
    constructor(_maSv,
        _tenSv,
        _matKhau,
        _email,
        _diemToan,
        _diemLy,
        _diemHoa) {
        this.ma = _maSv;
        this.ten = _tenSv;
        this.email = _email;
        this.matKhau = _matKhau;
        this.diemToan = _diemToan * 1;
        this.diemLy = _diemLy * 1;
        this.diemHoa = _diemHoa * 1;
        this.tinhDTB = function () {
            return (this.diemToan + this.diemLy + this.diemHoa) / 3;
        };
    }
}