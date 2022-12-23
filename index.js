var dssv=[]
var dssvJson= localStorage.getItem("DSSV");

if(dssvJson !=null){
    var svArr=JSON.parse(dssvJson);
    dssv = svArr.map(function (item) {
        return new SinhVien(
            item.ma, item.ten, item.email, item.matKhau, item.diemToan, item.diemLy, item.diemHoa
        );

    })
    renderDSSV(dssv);
}
function themSinhVien(){
    var sv=layThongTinTuForm();
    dssv.push(sv);

    var dssvJson= JSON.stringify(dssv);

    localStorage.setItem("DSSV",dssvJson);
    renderDSSV(dssv);
}

function xoaSinhVien(idSv){
  
    var vitri=timKiemViTri(idSv,dssv);
        if(vitri !=-1){
            dssv.splice(vitri,1);
            var dssvJson= JSON.stringify(dssv);
            localStorage.setItem("DSSV",dssvJson);
            renderDSSV(dssv);
        }
    }

    function suaSinhVien(idSv){
    
        var vitri=timKiemViTri(idSv,dssv);
        if(vitri==-1){
            return;
        }
        var sv =dssv[vitri];
       //SHOW thông tin lên form
       showThongTinLenForm(sv);
    }
    
    function capNhatSinhVien(){
        // Lấy thông tin sau khi user update
        var sv=layThongTinTuForm();
        
        // update dữ liệu mới thay thế dữ liệu cũ
        var vitri=timKiemViTri(sv.ma,dssv);
        if(vitri!=-1){
            dssv[vitri]=sv;
            var dssvJson= JSON.stringify(dssv);
            localStorage.setItem("DSSV",dssvJson);
            renderDSSV(dssv);
        }
    
    }
        
        