jQuery(document).ready(function () {






    // header 메뉴 hover 시 submenu 내려옴
    $(".sub_wrap").css("display", "none");

    $(".product").on('mouseenter', function (event) {
        $(".sub_wrap").stop().slideDown(300);
    });

    $(".product").on('mouseleave', function (event) {
        $(".sub_wrap").stop().slideUp(300);
    });



    // scroll 시 header 변경
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > 0) {
            $('header').css({
                'background-color': 'rgba(0,0,0,0.6)'
            });
            $('header').css({
                'color': 'white'
            });
            $('.navbar_togglebtn').css({
                'color': 'white'
            });
        } else {
            $('header').css({
                'background': 'none'
            });
            $('header').css({
                'color': 'black'
            });
            $('.navbar_togglebtn').css({
                'color': 'black'
            });
        }
    });




    // mainslide (fade in, out)
    $(function () {

        let currentIndex = 0;
        $(".slide li").hide().first().show();

        setInterval(function () {
            let nextIndex = (currentIndex + 1) % 3;
            $(".slide li").eq(currentIndex).fadeOut(1500);
            $(".slide li").eq(nextIndex).fadeIn(1500);

            currentIndex = nextIndex;

        }, 3000);
    });






    // wedding ring (hover 시 확대됨)
    $(".con2").on('mouseenter', function (event) {
        $(".con2_text").css("scale", "1.1");
        $(".con2_text span").css("opacity", "1");


    });

    $(".con2").on('mouseleave', function (event) {
        $(".con2_text").css("scale", "1");
        $(".con2_text span").css("opacity", "0");

    });











    $(".cate_img").on('mouseenter', function () {
        const $this = $(this);
        $this.addClass('active');


    });

    $(".cate_img").on('mouseleave', function () {
        const $this = $(this);
        $this.removeClass('active');

    });















    // designers (section1)
    $(window).scroll(function () {
        // 스크롤 이벤트가 발생할 때마다 변수를 다시 계산
        let winH = $(window).height();
        let winT = $(window).scrollTop();
        let obj = $('.con1_wrap_right');
        let objTop = obj.offset().top;
        let objH = obj.height();

        // 요소가 화면의 중간을 지날 때 'active' 클래스 추가
        if (objTop - winH / 2 <= winT && objTop + objH > winT) {
            obj.addClass('active');
        } else {
            obj.removeClass('active');
        }

        //삼항 연산자: (objTop - winH/2 <= winT && objH > winT) ? obj.addClass('active') : obj.removeClass('active')
    });




    // new product(section3)
    $(window).scroll(function () {

        let winH = $(window).height();
        let winT = $(window).scrollTop();
        let obj2 = $('.new_right');
        let obj2Top = obj2.offset().top;
        let obj2H = obj2.height();


        if (obj2Top - winH / 2 <= winT && obj2Top + obj2H > winT) {
            obj2.addClass('active');
        } else {
            obj2.removeClass('active');
        }


    });


    // table wear (section6)
    $(window).scroll(function () {

        let winH = $(window).height();
        let winT = $(window).scrollTop();
        let obj3 = $('.left_wrap');
        let obj3Top = obj3.offset().top;
        let obj3H = obj3.height();


        if (obj3Top - winH / 2 <= winT && obj3Top + obj3H > winT) {
            obj3.addClass('active');
        } else {
            obj3.removeClass('active');
        }


    });











    // togglebtn (클릭시 서브메뉴 보임)
    const togglebtn = $('.navbar_togglebtn');
    const menu = $('.navbar_menu');
    const icons = $('.navbar_icons');

    togglebtn.on('click', () => {
        menu.toggleClass('active');
        icons.classList.toggleClass('active');
    });























});