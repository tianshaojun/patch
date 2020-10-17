//banner轮播图
var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


//类型切换
$('.page .tab .tab_l .type').on('click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
  var index =  $(this).index();
  $(this).parents('.page').find('.select').children('ul').hide().eq(index).show();  
})


//点击出现下拉框
$('.page .select ul li .outline').on('click', function() {
  $(this).toggleClass('line');
  $(this).next('.dropDown').toggle(); 
})

//类型,性质,文件大小,构图,文件格式切换
//全选
$('.page .select ul li .dropDown li').on('click', '.j-check', function() {
   if($(this).is(':checked')) {
      $('.d-button').prop('checked',true);
      $('.d-button').parent('li').addClass('active');
   }else {
     $('.d-button').prop('checked',false);
     $('.d-button').parent('li').removeClass('active');
   }

})

//单选
$(".page .select ul li .dropDown li .d-btn").click(function(){
    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if(len == length){
      $(".page .select ul li .dropDown li .g-check").prop("checked",true);
      $('.d-button').parent('li').addClass('active');
    }else{
      $(".page .select ul li .dropDown li .g-check").prop("checked",false);
      $('.j-check').parent('li').removeClass('active');
    }
})


//横纵布局切换
$('.page .tab .tab_r').on('click', '.row_col', function() {
  $(this).addClass('active').siblings().removeClass('active');
  var index =  $(this).index();
  $(this).parents('.page').find('.waterfall').children('.layout').hide().eq(index).show();  
})

