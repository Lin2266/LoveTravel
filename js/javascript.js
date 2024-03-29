$(function () {
    //  nav.html跟footer.html引入到每個頁面
    // $("#nav").load("nav.html");
    $("#footer").load("footer.html");

    headerCarousel();
    roomPlusMinus();
    bars();
    searchRoom();
    translateHand();
    
   
});

//首頁大圖輪播
function headerCarousel(){
    // 5張，先clone 5個，保持10個，前面5個跑完就刪，後面在clone 5個 

    //  Carousel輪播
    //  負責page1目前畫面呈現的背景的索引號碼(0代表第1張)
    var page1bgNo = 0;

    //  page1影像輪播----------------------------------------------------------
    //  偵測.page1中class名稱為page1bg的length"總數量"
    //  alert($('.page1 .page1bg').length);
    function page1show() {
        //  取得陣列，比對目前索引跟變數索引一不一樣，讓目前畫面上的影像以1秒的時間淡出
        $('.page1 .page1bg').eq(page1bgNo).fadeOut(1000);

        //  準備下一張
        page1bgNo++;
        if (page1bgNo == $('.page1 .page1bg').length) {
            page1bgNo = 0;
        }

        //讓下一張以1秒的時間淡入
        $('.page1 .page1bg').eq(page1bgNo).fadeIn(1000);
    }
    //  馬上執行一次page1show()函式
    page1show();
    //  設定每隔5秒之後執行一次page1show的函式 
    setInterval(page1show, 5000);
}

function roomPlusMinus() {
    //  縮放清單:展開變-號，收起變+號
    //  飯店類型
    $(".hotelToggle").click(function () {

        var display = $(".hotelType").css("display");
        $(".hotelType").slideToggle("slow");

        if (display == "none") {
            //  開啟(-號)
            $(".hotelToggle").removeClass("fa-circle-plus").addClass('fa-circle-minus');
        } else {
            //  關閉(+號)
            $(".hotelToggle").removeClass("fa-circle-minus").addClass('fa-circle-plus');
        }
    });

    //定價
    $(".prcesToggle").click(function () {
        var display = $(".prces").css("display");
        $(".prces").slideToggle("slow");

        if (display == "none") {
            $(".prcesToggle").removeClass("fa-circle-plus").addClass('fa-circle-minus');
        } else {
            $(".prcesToggle").removeClass("fa-circle-minus").addClass('fa-circle-plus');

        }
    });

    //住宿篩選清單收合
    $(".starToggle").click(function () {
        var display = $(".star").css("display");
        $(".star").slideToggle("slow");

        if (display == "none") {
            $(".starToggle").removeClass("fa-circle-plus").addClass('fa-circle-minus');
        } else {
            $(".starToggle").removeClass("fa-circle-minus").addClass('fa-circle-plus');

        }
    });

    //設施
    $(".facilityToggle").click(function () {
        var display = $(".facility").css("display");
        $(".facility").slideToggle("slow");

        if (display == "none") {
            $(".facilityToggle").removeClass("fa-circle-plus").addClass('fa-circle-minus');
        } else {
            $(".facilityToggle").removeClass("fa-circle-minus").addClass('fa-circle-plus');

        }
    });

    //景點、美食點擊區域時會出現底線顯示
    var area_a;
    var area = document.getElementsByClassName("area")[0];
    if (area != undefined) {
        area_a = area.querySelectorAll(".area_a");
        // console.log(area_a);
        let clearBorder = 0;
        for (let i = 0; i < area_a.length; i++) {
            area_a[i].addEventListener("click", function (e) {
                //把上一次按的地區底線清空
                area.children[clearBorder].style.borderBottom = "none";

                area.children[i].style.borderBottom = "3px solid rgb(46, 197, 239)";
                //取得上一次按的索引
                clearBorder = i;
                e.preventDefault();
            });

        }
    }
}

//漢堡按鈕
function bars(){
    $('.fa-bars').click(()=>{
   
        if($('.nav-center').css('display') == 'none'){
            $('.nav-center').css('display','block');
        }else{
            $('.nav-center').css('display','none');
        }
        
    });
}

//住宿搜尋隱藏打開
function searchRoom(){
    let open = true;
    $('.fa-circle').on('click',() =>{
        
        if(open){
            console.log('open :' + open)
            $('.Reservation').animate({
                left: 0,
            },1000);
            $('.fa-hand-point-left').hide()
            open = false;
            
        }else{
            console.log('off :' + open)
            $('.Reservation').animate({
                left: -184,
            },1000)
            $('.fa-hand-point-left').show()
            open = true;
            
        }
        
    });
}


function translateHand(){

    setInterval(()=>{
        $('.fa-hand-point-left').animate({
            left: 25,
        },1200,'easeInSine')
        
        $('.fa-circle').animate({
            // color: 'red',
        },1200,'easeInSine')
    
        $('.fa-hand-point-left').animate({
            left: 45,
        },1200,'easeInSine')
    },1500);
    
    // return translateHand();
}