$(document).ready(function(){




$('header .gnb').on('mouseenter', function(){
        //console.log('메뉴에 오버111')
        $('header').addClass('menu_over')
    })
$('header').on('mouseleave', function(){
        //console.log('마우스를 내렸다가 올렸다가 내림')
        $(this).removeClass('menu_over')
    })

 

$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
    $(this).addClass('over')
    console.log('메뉴에 오버111')
})
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
    console.log('메뉴 아웃')
    $(this).removeClass('over')
})

//header .gnb .gnb_wrap ul.depth1 > li에 open 클래스 추가


$('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
    let open_true = $(this).hasClass('open')
    console.log(open_true)
    if(open_true == true){ //열려있다면
        $(this).removeClass('open')
    }else{ //닫혀있다면
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
        $(this).addClass('open')

    }
})

// header .gnb .gnb_close
// header  .gnb .gnb_open

$('header  .gnb .gnb_open').on('click', function(){
    $('header').addClass('menu_open')
})
$('header .gnb .gnb_close').on('click', function(){
    $('header').removeClass('menu_open')
})


});//맨아래