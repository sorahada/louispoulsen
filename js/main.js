$(document).ready(function(){  // 문서준비이벤트

    
    // 2차메뉴
    $('.depth2').hide();

    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth2').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function(){
        $(this).find('.depth2').stop().fadeOut();
    });

    //search
    $('.search').hide();
    $('.gnb li:nth-child(7)').click(function () {
        $('.search').stop().slideDown();
    });

    $('.search_close').click(function () {
        $('.search').stop().slideUp();
    });



    // mdepth2
    $('.mdepth2').hide();
    $('.mgnb > li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
    });



    //mgnb
    $('.ham').click(function(){
        $('.mgnb_wrap').animate({
            left:'0'
        },1000); //3초동안
    });

    $('.mgnb_close').click(function(){
        $('.mgnb_wrap').animate({
            left:'100%'
        });
    });




    // 제품 슬라이드
    const product_list = new Swiper('.product_list', {

        autoplay : {
            delay : 2000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

         // 방향 버튼 지정
         navigation : {   
            nextEl : '.swiper-button-next',  // 다음 버튼
            prevEl : '.swiper-button-prev',  // 이전 버튼
        },
      

        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView : '2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween : 20,  // 슬라이드 사이 여백
        breakpoints: {   // 반응형 슬라이드
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },

        loop : true,  // 슬라이드 반복 여부
        speed : 1000  // 슬라이드 동작 속도

    });





    // 탭화면
    $('.floor_lamps,.table_lamps,.wall_lamps').hide();

    $('.product_list li:nth-child(1)').click(function(){
        $('.floor_lamps,.table_lamps,.wall_lamps').hide();
        $('.pendants').fadeIn(1000);
    });

    $('.product_list li:nth-child(2)').click(function(){
        $('.pendants,.table_lamps,.wall_lamps').hide();
        $('.floor_lamps').fadeIn(1000);
    });

    $('.product_list li:nth-child(3)').click(function(){
        $('.pendants,.floor_lamps,.wall_lamps').hide();
        $('.table_lamps').fadeIn(1000);
    });

    $('.product_list li:nth-child(4)').click(function(){
        $('.pendants,.floor_lamps,.table_lamps').hide();
        $('.wall_lamps').fadeIn(1000);
    });

   
    // 탭 active
    $('.product_list li:first-child').addClass('active');

    $('.product_list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    


    // mdepth2
    $('.m_footer_depth2').hide();

    $('.m_footer_link > li').click(function(){
        $(this).children('.m_footer_depth2').stop().slideDown();
        $(this).siblings().children('.m_footer_depth2').stop().slideUp();
    });




});  // 문서준비이벤트 html과 css가 다 로딩되기 전에 동작되지 않도록.