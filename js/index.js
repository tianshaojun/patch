$(document).ready(function () {
  
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


  //搜索区域下拉框
  $('.page .search .expmenu .menu').on('click','li', function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    var value = $(this).html();
    $('.page .search .expmenu .header .label').html(value);
    $('.page .search .expmenu .menu').hide();
  })


  //热门&最新切换
  $('.page .tab .tab_l .hot').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
  })


  //类型切换
  $('.page .tab .tab_l .type').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $(this).parents('.page').find('.select').children('ul').hide().eq(index).show();
    var id = $(this).attr('data_id');
    if (id == '3') {
      $('.page .waterfall').hide();
      $('.page .tab .tab_r .row_col').hide();
      $('.page .waterfall').hide();
      $('.page .audio').show();
    } else {
      $('.page .waterfall').show();
      $('.page .tab .tab_r .row_col').show();
      $('.page .waterfall').show();
      $('.page .audio').hide();
    }
  })


  //点击出现下拉框
  $('.page .select ul li .outline').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('line');
    $(this).next('.dropDown').toggle();
  })

  //点击下拉框阻止冒泡
  $('.page .select ul li .dropDown').on('click', function (e) {
    e.stopPropagation();
  })

  //点击空白区域关闭下拉框
  $(document).on('click', function() {
    $('.page .select ul li .dropDown').hide();
    $('.page .select ul li .outline').removeClass('line');
  })

  //类型,性质,文件大小,构图,文件格式切换
  //全选
  // $('.page .select ul li .dropDown li').on('click', '.j-check', function () {
  //   if ($(this).is(':checked')) {
  //     $('.d-button').prop('checked', true);
  //     $('.d-button').parent('li').addClass('active');
  //   } else {
  //     $('.d-button').prop('checked', false);
  //     $('.d-button').parent('li').removeClass('active');
  //   }
  // })

  //单选
  // $(".page .select ul li .dropDown li .d-btn").click(function () {
  //   let len = $('.page .select ul li .dropDown li .d-btn').length;
  //   let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
  //   $(this).parent('li').toggleClass('active');
  //   if (len == length) {
  //     $(".page .select ul li .dropDown li .g-check").prop("checked", true);
  //     $('.d-button').parent('li').addClass('active');
  //   } else {
  //     $(".page .select ul li .dropDown li .g-check").prop("checked", false);
  //     $('.j-check').parent('li').removeClass('active');
  //   }
  // })

  
  //类型单选
  var type_default = $('.page .select ul li .type li.active label').html();
  arr_type = [];
  arr_type.push(type_default);
  $(".page .select ul li .type li .d-btn").click(function () {
    var val = $(this).prev().html();
    var status = $(this).prop('checked');
    if(status == true) {
      arr_type.push(val);
    }
    if(status == false) {
      arr_type.pop(val);
    }
    var res = arr_type.join('-');
    $(this).parents('.page .select ul li').find('.outline .item').html(res);


    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');
    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');
    }
  })

  //类型全选
  $('.page .select ul li .type li').on('click', '.j-check', function () {
    

    if ($(this).is(':checked')) {
      $('.page .select ul li .type li .d-button').prop('checked', true);
      $('.page .select ul li .type li .d-button').parent('li').addClass('active');

      
      $(".page .select ul li .type li .d-btn").each(function(){
        // console.log(typeof $(this).prev().text() + ',');
        var res = $(this).prev().text() + ',';
        console.log(res);
        $(this).parents('.page .select ul li').find('.outline .item').html(res);
      });
      
    } else {
      $('.page .select ul li .type li .d-button').prop('checked', false);
      $('.page .select ul li .type li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');
    }
  })




  //横纵布局切换
  $('.page .tab .tab_r').on('click', '.row_col', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $(this).parents('.page').find('.waterfall').children('.layout').hide().eq(index).show();
  })


  //点击图片弹出蒙层
  $('.page .waterfall .layout').on('click', 'img', function () {
    $('.page .shadow').css('display', 'block');
    $('.page .close').css('display', 'block');
  })


  //关闭蒙层
  $('.page .close').on('click', function () {
    $('.page .shadow').css('display', 'none');
    $(this).css('display', 'none');
  })


})

