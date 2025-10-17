$(document).ready(function(){
    
    let mobile_size = 1024
    let window_w
    let device_status // pc, mobile

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk()
    $(window).resize(function(){
        device_chk()
    })


    /************************ 시작 :: visual swiper  ***************/
    let visual_time = 5000
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: visual_time,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    
    
    $('.visual .ctrl_btn .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').css('display', 'flex')
        $('.visual .ctrl_btn .paging .bar span').stop() //animate 종료
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').css('display', 'flex')
        updateCurrent()
    })

    // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // 현재 슬라이드 번호 표시 함수
    function updateCurrent() {
        let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
        $('.visual .paging .current').text(realIndex);
        //슬라이드가 교체되면 제일 먼저 넓이를 0으로 초기화 
        $('.visual .ctrl_btn .paging .bar span').stop() //animate 종료
        $('.visual .ctrl_btn .paging .bar span').width(0)
        $('.visual .ctrl_btn .paging .bar span').animate({
            width : '100%'
        }, visual_time)
    }

    // 처음 로드 시 한번 실행
    updateCurrent();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        updateCurrent();
    });
    /************************ 끝 :: visual swiper ***************/

   


    /************************ 시작 :: pc버전 메뉴 오버 ***************
     * 메뉴에 마우스를 오버했을때
     * header에 menu_pc 클래스를 추가
     * 마우스를 오버한 메뉴의 1차 메뉴 li에 over를 클래스 추가
     * pc버전에서만 메뉴를 오버해서 버뀐 색상의 역영 내부에서는
     * 오버가 유지되고 그 밖에 나갈 땐 아웃*/
    
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
        //console.log('오버했음')
        $('header').addClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').hide()
        $(this).addClass('over')
        $(this).find('depth2').slideDown()
        }   
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
        $(this).removeClass('over')
        $(this).find('depth2').hide()
        }
    })
    
    $('header').on('mouseenter focusout', function(){
        $(this).removeClass('menu_pc')
    })

    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })


    /************************ 끝 :: pc버전 메뉴 오버 ***************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();	
            if($(this).parent().hasClass('open') == true){
                //console.log('열림')
                $(this).parent().removeClass('open')
                $(this).next().slideUp()
            }else{
                //console.log('닫힘')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('open')
                $(this).next().slideDown()
                
            }
        }  
    })

    let scrolling
    
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if( scrolling > 0){
            $('header').addClass('fixed')
        }else
        $('header').removeClass('fixed')
    }

    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })
    /***********모바일 메뉴 열기 ***********/
    //header .gnb .gnb_open
    //header .gnb .gnb_wrap .gnb_close
    $('header .gnb .gnb_open').on('click',function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close').on('click',function(){
        $('header').removeClass('menu_mo')
    })
    /***********모바일 메뉴 닫기***********/




    /***********찾습니다 시작***********/

    const find1_swiper = new Swiper('.find .item1 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .item1 .next',
            prevEl: '.find .item1 .prev',
        },
    });
    const find2_swiper = new Swiper('.find .item2 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .item2 .next',
            prevEl: '.find .item2 .prev',
        },
    });
    /***********찾습니다 끝***********/

})//맨끝