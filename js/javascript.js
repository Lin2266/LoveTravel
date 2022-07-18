//checkInDate
// var d = new Date();
// document.getElementById("checkInDate").value =
//     d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

// document.getElementById("checkOutDate").value =
//     d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 1);


//+號跟-號縮放清單

var summary = document.getElementsByTagName("summary");
var details = document.getElementsByTagName("details");
// details.setAttribute("open");
for (let i = 0; i < summary.length; i++) {
    details[i].addEventListener("click", function () {
        // console.log(details.getAttribute("open"));
        if (details[i].open) {
            // console.log("hello");
            summary[i].innerHTML = "<i class='fa-solid fa-circle-minus'></i>";
        } else {
            summary[i].innerHTML = "<i class='fa-solid fa-circle-plus'></i>";
        }
    });
}


// Carousel輪播
//變數宣告區=============================================================
var page1bgNo = -1;       //負責page1目前畫面呈現的背景的索引號碼(0代表第1張)

//page1影像輪播----------------------------------------------------------
//偵測.page1中class名稱為page1bg的length"總數量"
//alert($('.page1 .page1bg').length);

function page1show() {
    //讓目前畫面上的影像以1秒的時間淡出
    $('.page1 .page1bg').eq(page1bgNo).fadeOut(1000);

    //準備下一張
    page1bgNo++;
    if (page1bgNo == $('.page1 .page1bg').length) { page1bgNo = 0; }

    //讓下一張以1秒的時間淡入
    $('.page1 .page1bg').eq(page1bgNo).fadeIn(1000);
}

page1show();    //馬上執行一次page1show()函式
setInterval(page1show, 5000);    //設定每隔5秒之後執行一次page1show的函式


