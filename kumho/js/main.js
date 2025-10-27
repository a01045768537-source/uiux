/***********************
* 파일명 : main.js 
* 작성자 : 문미영
* 작성일 : 25-10-23
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
*********************/
$(document).ready(function(){
    $('.visual .popup').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        fade: true,  //페이드 효과 적용
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: true, //무한반복 (loop)
    });

    $('.biz .list ul li').on('mouseenter', function(){
        $(this).addClass('active')
        $('.biz .list').addClass('over')
    })
    $('.biz .list ul li').on('mouseleave', function(){
        $(this).removeClass('active')
        $('.biz .list').removeClass('over')
    })




    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		760: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 32,
		},
	},
    scrollbar: {
        el: ".news .ctrl_wrap .scrollbar",
        hide: false,
        draggable: true,
        //dragSize: 100,
    },
	navigation: {
		nextEl: '.news .ctrl_wrap .btn_next',
		prevEl: '.news .ctrl_wrap .btn_prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});
	
    let  service_name
    $('.service .list ul li').on('mouseenter', function(){
        service_name = $(this).attr()
    })





})//밑끝