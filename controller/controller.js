function layThongTinTuForm(){
    const _maSv = document.getElementById('txtMaSV').value;
    const _tenSv = document.getElementById('txtTenSV').value;
    const _email = document.getElementById('txtEmail').value;
    const _matKhau = document.getElementById('txtPass').value;
    const _diemToan = document.getElementById('txtDiemToan').value*1;
    const _diemLy = document.getElementById('txtDiemLy').value*1;
    const _diemHoa = document.getElementById('txtDiemHoa').value*1;

    
var sv = new SinhVien(_maSv,_tenSv,_matKhau,_email,_diemToan,_diemLy,_diemHoa)
return sv;
}


function renderDSSV(svArr){
    var contentHTML="";
for(var index=0;index<dssv.length;index++ ){
    var item=dssv[index];
    var contentTr= `  <tr>
        <td>${item.ma}</td>
        <td>${item.ten}</td>
        <td>${item.email}</td>
        <td>${item.tinhDTB()}</td>
        <td>
        <button onclick="xoaSinhVien('${item.ma}')" class="btn btn-danger">
        Xóa</button>

        <button onclick="suaSinhVien('${item.ma}')" class="btn btn-warning">
        Sửa</button>
        </td>
        </tr>`
    contentHTML +=contentTr;

}
document.getElementById("tbodySinhVien").innerHTML=contentHTML;
    
}
function timKiemViTri(id,arr){
    var vitri=-1;
    for(var index=0; index<arr.length;index++){
     var sv=arr[index];
     if(sv.ma==id){
         vitri=index;
         break;
         
     }
 }
 return vitri;
}

function showThongTinLenForm(sv){
    document.getElementById('txtMaSV').value=sv.ma;
    document.getElementById('txtTenSV').value=sv.ten;
    document.getElementById('txtEmail').value=sv.email;
    document.getElementById('txtPass').value=sv.matKhau;
    document.getElementById('txtDiemToan').value=sv.diemToan;
    document.getElementById('txtDiemLy').value=sv.diemLy;
    document.getElementById('txtDiemHoa').value=sv.diemHoa;

}
