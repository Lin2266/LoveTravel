// 最新消息
$('.news .responsive').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                pauseOnDotsHover: true,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                pauseOnDotsHover: true,
            }
        }

    ]
});


// 景點
$('.view .responsive').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,  //启动居中
    // centerPadding: '0', //处于中心模式时的侧面填充（像素或％）
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                infinite: true,
                pauseOnDotsHover: true,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                infinite: true,
                centerMode: false,
                pauseOnDotsHover: true,
            }
        }

    ]
});