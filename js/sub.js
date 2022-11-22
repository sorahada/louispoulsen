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
        $('body').css({ 'overflow': 'hidden' })
    });

    $('.search_close').click(function () {
        $('.search').stop().slideUp();
        $('body').css({ 'overflow': 'auto' })
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
    

    // 탭화면
    $('.tap_list2,.tap_list3,.tap_list4,.tap_list5,.tap_list6').hide();

    $('.news_name li:nth-child(1)').click(function(){
        $('.tap_list2,.tap_list3,.tap_list4,.tap_list5,.tap_list6').hide();
        $('.tap_list1').fadeIn(1000);
    });

    $('.news_name li:nth-child(2)').click(function(){
        $('.tap_list1,.tap_list3,.tap_list4,.tap_list5,.tap_list6').hide();
        $('.tap_list2').fadeIn(1000);
    });

    $('.news_name li:nth-child(3)').click(function(){
        $('.tap_list1,.tap_list2,.tap_list4,.tap_list5,.tap_list6').hide();
        $('.tap_list3').fadeIn(1000);
    });

    $('.news_name li:nth-child(4)').click(function(){
        $('.tap_list1,.tap_list2,.tap_list3,.tap_list5,.tap_list6').hide();
        $('.tap_list4').fadeIn(1000);
    });

    $('.news_name li:nth-child(5)').click(function(){
        $('.tap_list1,.tap_list2,.tap_list3,.tap_list4,.tap_list6').hide();
        $('.tap_list5').fadeIn(1000);
    });

    $('.news_name li:nth-child(6)').click(function(){
        $('.tap_list1,.tap_list2,.tap_list3,.tap_list4,.tap_list5').hide();
        $('.tap_list6').fadeIn(1000);
    });
   


    // 탭 active
    $('.news_name li:first-child').addClass('on');
    $('.news_name li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });




    // news 슬라이드
    const magazine_list = new Swiper('.magazine_list', {

        autoplay : {
            delay : 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

         // 방향 버튼 지정
         navigation : {   
            nextEl : '.swiper-button-next',  // 다음 버튼
            prevEl : '.swiper-button-prev',  // 이전 버튼
        },
      

        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView : '2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween : 10,  // 슬라이드 사이 여백
        breakpoints: {   // 반응형 슬라이드
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },

        loop : true,  // 슬라이드 반복 여부
        speed : 1000  // 슬라이드 동작 속도

    });




    // designers 슬라이드
    const mb = new Swiper('.designer_list', {
        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });







    // mdepth2
    $('.m_footer_depth2').hide();

    $('.m_footer_link > li').click(function(){
        $(this).children('.m_footer_depth2').stop().slideDown();
        $(this).siblings().children('.m_footer_depth2').stop().slideUp();
    });






        



});  // 문서준비이벤트 html과 css가 다 로딩되기 전에 동작되지 않도록.