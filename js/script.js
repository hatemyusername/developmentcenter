function riQi() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dates = date.getDate();
  var arr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var day = date.getDay();
  return year + "年" + month + "月" + dates + "日" + " " + arr[day];
}
var p = document.querySelector("#time-pp");
p.innerHTML = riQi();

// 导航栏鼠标经过效果
let daoHang = document.querySelectorAll(".daoHang");
for (let i = 0; i < daoHang.length; i++) {
  daoHang[i].onmouseover = function () {
    daoHang[i].className = "daoHang over";
  };
  daoHang[i].onmouseout = function () {
    daoHang[i].className = "daoHang";
  };
}
