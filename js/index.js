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
  $('.page .search .expmenu .menu').on('click', 'li', function () {
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
  $(document).on('click', function () {
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


  //类型单选(图片)
  $(".page .select ul li .type li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(val); //下拉框上面显示内容
    $(this).parents('.page .select ul li .type').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .type li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      $('.selectedResult').show();
      $('.dynamic li.type').show();
      $('.dynamic li.type span:nth-child(1)').html(val);  //卡片内容

    }
  })

  //类型全选(图片)
  $('.page .select ul li .type li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .type li .d-button').prop('checked', true);
      $('.page .select ul li .type li .d-button').parent('li').addClass('active');

      var str = ''
      $(".page .select ul li .type li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';
        str += res;
        var arr = str.split(',');
        var res = arr.join('-');
        res = res.substring(0, res.length - 1);
        $(this).parents('.page .select ul li').find('.outline .item').html(res); //下拉框上面显示内容

        $('.selectedResult').show();
        $('.dynamic li.type').show();
        $('.dynamic li.type span:nth-child(1)').html(res);  //卡片内容
      });

    } else {
      $('.page .select ul li .type li .d-button').prop('checked', false);
      $('.page .select ul li .type li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.dynamic li.type').hide(); //隐藏卡片
    }
  })


  //时间切换(图片)
  var time = '2020';
  $(".page .select ul li .time .dropDown_l li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    time = $(this).find('span:nth-child(1)').html();
  })

  //时间单选(图片)
  $(".page .select ul li .time .dropDown_r li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(time + '-' + val); //下拉框上面显示内容
    // $(this).parents('.page .select ul li .time .dropDown_r').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .time .dropDown_r li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      var value = time + '-' + val;  //值拼接
      $('.selectedResult').show();
      $('.selectedResult li.time').show();
      $($('.selectedResult li.time').find('span')[0]).html(value);  //卡片内容
    }
  })

  //时间全选(图片)
  $('.page .select ul li .time .dropDown_r li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .time .dropDown_r li .d-button').prop('checked', true);
      $('.page .select ul li .time .dropDown_r li .d-button').parent('li').addClass('active');

      var str = '';
      $(".page .select ul li .time .dropDown_r li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';

        str += res;
        var arr = str.split(',');
        var res2 = arr.join(',');
        res2 = res2.substring(0, res2.length - 1);

        $('.selectedResult').show();
        $('.selectedResult li.time').show();
        $($('.selectedResult li.time').find('span')[0]).html(time + '-' + res2);  //卡片内容

        $(this).parents('.page .select ul li').find('.outline .item').html(time + '-' + res2); //下拉框上面显示内容

      });

    } else {
      $('.page .select ul li .time .dropDown_r li .d-button').prop('checked', false);
      $('.page .select ul li .time .dropDown_r li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.selectedResult li.time').hide();  //隐藏卡片
    }
  })


  //地点切换-省份(图片)
  var province = '河北省';
  var city = '邯郸市';
  $(".page .select ul li .place_pic .dropDown_l li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    province = $(this).find('span:nth-child(1)').html();
  })

  //地点切换-地区(图片)
  $(".page .select ul li .place_pic .dropDown_r li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    city = $(this).find('span:nth-child(1)').html();
  })

  //地点单选(图片)
  $(".page .select ul li .place_pic .dropDown_r_r li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(province + city + '-' + val); //下拉框上面显示内容
    // $(this).parents('.page .select ul li .time .dropDown_r').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .place_pic .dropDown_r_r li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');


      $('.dynamic li.place_pic').hide();
      $('.dynamic').append(`<li class="place_pic"><span>${value}</span><span>x</span></li>`);  //动态添加元素

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      var value = province + city + '-' + val;  //值拼接
      $('.selectedResult').show();
      $('.selectedResult li.place_pic').show();
      $($('.selectedResult li.place_pic').find('span')[0]).html(value);  //卡片内容

    }
  })

  //地点全选(图片)
  $('.page .select ul li .place_pic .dropDown_r_r li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .place_pic .dropDown_r_r li .d-button').prop('checked', true);
      $('.page .select ul li .place_pic .dropDown_r_r li .d-button').parent('li').addClass('active');

      var str = '';
      $(".page .select ul li .place_pic .dropDown_r_r li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';

        str += res;
        var arr = str.split(',');
        var res2 = arr.join(',');
        res2 = res2.substring(0, res2.length - 1);

        $('.selectedResult').show();
        $('.selectedResult li.place_pic').show();
        $($('.selectedResult li.place_pic').find('span')[0]).html(province + city + '-' + res2);  //卡片内容

        $(this).parents('.page .select ul li').find('.outline .item').html(province + city + '-' + res2); //下拉框上面显示内容

      });

    } else {
      $('.page .select ul li .place_pic .dropDown_r_r li .d-button').prop('checked', false);
      $('.page .select ul li .place_pic .dropDown_r_r li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.dynamic li.place_pic').hide();  //隐藏卡片
    }
  })


  //项目切换(图片)
  var project = '项目一';
  $(".page .select ul li .project .dropDown_l li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    project = $(this).find('span:nth-child(1)').html();
  })

  //项目单选(图片)
  $(".page .select ul li .project .dropDown_r li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(project + '-' + val); //下拉框上面显示内容
    // $(this).parents('.page .select ul li .time .dropDown_r').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .project .dropDown_r li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      var value = project + '-' + val;  //值拼接
      $('.selectedResult').show();
      $('.selectedResult li.project').show();
      $($('.selectedResult li.project').find('span')[0]).html(value);  //卡片内容

    }
  })

  //项目全选(图片)
  $('.page .select ul li .project .dropDown_r li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .project .dropDown_r li .d-button').prop('checked', true);
      $('.page .select ul li .project .dropDown_r li .d-button').parent('li').addClass('active');

      var str = '';
      $(".page .select ul li .project .dropDown_r li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';

        str += res;
        var arr = str.split(',');
        var res2 = arr.join(',');
        res2 = res2.substring(0, res2.length - 1);

        $('.selectedResult').show();
        $('.selectedResult li.project').show();
        $($('.selectedResult li.project').find('span')[0]).html(project + '-' + res2);  //卡片内容

        $(this).parents('.page .select ul li').find('.outline .item').html(project + '-' + res2); //下拉框上面显示内容

      });

    } else {
      $('.page .select ul li .project .dropDown_r li .d-button').prop('checked', false);
      $('.page .select ul li .project .dropDown_r li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.selectedResult li.project').hide();  //隐藏卡片
    }
  })


  //人物切换(图片)
  var person = '人物1';
  $(".page .select ul li .person .dropDown_l li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    person = $(this).find('span:nth-child(1)').html();
  })

  //人物单选(图片)
  $(".page .select ul li .person .dropDown_r li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(person + '-' + val); //下拉框上面显示内容
    // $(this).parents('.page .select ul li .time .dropDown_r').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .person .dropDown_r li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      var value = person + '-' + val;  //值拼接
      $('.selectedResult').show();
      $('.selectedResult li.person').show();
      $($('.selectedResult li.person').find('span')[0]).html(value);  //卡片内容

    }
  })

  //人物全选(图片)
  $('.page .select ul li .person .dropDown_r li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .person .dropDown_r li .d-button').prop('checked', true);
      $('.page .select ul li .person .dropDown_r li .d-button').parent('li').addClass('active');

      var str = '';
      $(".page .select ul li .person .dropDown_r li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';

        str += res;
        var arr = str.split(',');
        var res2 = arr.join(',');
        res2 = res2.substring(0, res2.length - 1);

        $('.selectedResult').show();
        $('.selectedResult li.person').show();
        $($('.selectedResult li.person').find('span')[0]).html(person + '-' + res2);  //卡片内容

        $(this).parents('.page .select ul li').find('.outline .item').html(person + '-' + res2); //下拉框上面显示内容

      });

    } else {
      $('.page .select ul li .person .dropDown_r li .d-button').prop('checked', false);
      $('.page .select ul li .person .dropDown_r li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.selectedResult li.person').hide();  //隐藏卡片
    }
  })


  //性质单选(图片)
  $(".page .select ul li .property li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(val); //下拉框上面显示内容
    $(this).parents('.page .select ul li .property ').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .property li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      $('.selectedResult').show();
      $('.dynamic li.property').show();
      $('.dynamic li.property span:nth-child(1)').html(val);  //卡片内容

    }
  })


  //性质全选(图片)
  $('.page .select ul li .property li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .property li .d-button').prop('checked', true);
      $('.page .select ul li .property li .d-button').parent('li').addClass('active');

      var str = ''
      $(".page .select ul li .property li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';
        str += res;
        var arr = str.split(',');
        var res = arr.join('-');
        res = res.substring(0, res.length - 1);
        $(this).parents('.page .select ul li').find('.outline .item').html(res); //下拉框上面显示内容

        $('.selectedResult').show();
        $('.dynamic li.property').show();
        $('.dynamic li.property span:nth-child(1)').html(res);  //卡片内容

      });

    } else {
      $('.page .select ul li .property li .d-button').prop('checked', false);
      $('.page .select ul li .property li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.dynamic li.property').hide();  //隐藏卡片
    }
  })


  //文件大小单选(图片)
  $(".page .select ul li .size li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(val); //下拉框上面显示内容
    $(this).parents('.page .select ul li .size').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .size li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      $('.selectedResult').show();
      $('.dynamic li.size').show();
      $('.dynamic li.size span:nth-child(1)').html(val);  //卡片内容

    }
  })


  //文件大小全选(图片)
  $('.page .select ul li .size li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .size li .d-button').prop('checked', true);
      $('.page .select ul li .size li .d-button').parent('li').addClass('active');

      var str = ''
      $(".page .select ul li .size li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';
        str += res;
        var arr = str.split(',');
        var res = arr.join('-');
        res = res.substring(0, res.length - 1);
        $(this).parents('.page .select ul li').find('.outline .item').html(res); //下拉框上面显示内容

        $('.dynamic li.size').show();
        $('.dynamic li.size span:nth-child(1)').html(res);  //卡片内容
      });

    } else {
      $('.page .select ul li .size li .d-button').prop('checked', false);
      $('.page .select ul li .size li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.dynamic li.size').hide();  //隐藏卡片
    }
  })


  //构图单选(图片)
  $(".page .select ul li .compositionPicture li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(val); //下拉框上面显示内容
    $(this).parents('.page .select ul li .compositionPicture').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .compositionPicture li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      $('.selectedResult').show();
      $('.selectedResult li.compositionPicture').show();
      $($('.selectedResult li.compositionPicture').find('span')[0]).html(val);  //卡片内容
    }
  })


  //构图全选(图片)
  $('.page .select ul li .compositionPicture li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .compositionPicture li .d-button').prop('checked', true);
      $('.page .select ul li .compositionPicture li .d-button').parent('li').addClass('active');

      var str = ''
      $(".page .select ul li .compositionPicture li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';
        str += res;
        var arr = str.split(',');
        var res = arr.join('-');
        res = res.substring(0, res.length - 1);
        $(this).parents('.page .select ul li').find('.outline .item').html(res); //下拉框上面显示内容

        $('.selectedResult').show();
        $('.selectedResult li.compositionPicture').show();
        $($('.selectedResult li.compositionPicture').find('span')[0]).html(res);  //卡片内容
      });

    } else {
      $('.page .select ul li .compositionPicture li .d-button').prop('checked', false);
      $('.page .select ul li .compositionPicture li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.selectedResult li.compositionPicture').hide();  //隐藏卡片
    }
  })


  //文件格式单选(图片)
  $(".page .select ul li .fileFormat li .d-btn").click(function () {
    var val = $(this).prev().html(); //内容
    $(this).parents('.page .select ul li').find('.outline .item').html(val); //下拉框上面显示内容
    $(this).parents('.page .select ul li .fileFormat').find('li').addClass('active').siblings().removeClass('active'); //背景色切换
    $(this).prop('checked', true).parents('.page .select ul li .fileFormat li').siblings().find('.d-btn').prop('checked', false); //选中状态切换    

    let len = $('.page .select ul li .dropDown li .d-btn').length;
    let length = $('.page .select ul li .dropDown li .d-btn:checked').length;
    $(this).parent('li').toggleClass('active');
    if (len == length) {
      $(".page .select ul li .dropDown li .g-check").prop("checked", true);
      $('.d-button').parent('li').addClass('active');

    } else {
      $(".page .select ul li .dropDown li .g-check").prop("checked", false);
      $('.j-check').parent('li').removeClass('active');

      $('.selectedResult').show();
      $('.selectedResult li.fileFormat').show();
      $($('.selectedResult li.fileFormat').find('span')[0]).html(val);  //卡片内容
    }
  })


  //文件格式全选(图片)
  $('.page .select ul li .fileFormat li').on('click', '.j-check', function () {

    if ($(this).is(':checked')) {
      $('.page .select ul li .fileFormat li .d-button').prop('checked', true);
      $('.page .select ul li .fileFormat li .d-button').parent('li').addClass('active');

      var str = ''
      $(".page .select ul li .fileFormat li .d-btn").each(function (index) {
        var res = $(this).prev().text() + ',';
        str += res;
        var arr = str.split(',');
        var res = arr.join('-');
        res = res.substring(0, res.length - 1);
        $(this).parents('.page .select ul li').find('.outline .item').html(res); //下拉框上面显示内容

        $('.selectedResult').show();
        $('.selectedResult li.fileFormat').show();
        $($('.selectedResult li.fileFormat').find('span')[0]).html(res);  //卡片内容
      });

    } else {
      $('.page .select ul li .fileFormat li .d-button').prop('checked', false);
      $('.page .select ul li .fileFormat li .d-button').parent('li').removeClass('active');

      $(this).parents('.page .select ul li').find('.outline .item').html('');  //下拉框上面显示内容

      $('.selectedResult li.fileFormat').hide();  //隐藏卡片
    }
  })


  //点击x号删除
  $('.page .dynamic').delegate('li span:nth-child(2)', 'click', function () {
    $(this).parents('.page .dynamic li').hide();
    //页面显示标签的个数
    var size = $('.page .dynamic li:visible').size();
    if (size == '0') {
      $('.page .dynamic').hide();
    }
  })




  //横纵布局切换
  $('.page .tab .tab_r').on('click', '.row_col', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    // $(this).parents('.page').find('.waterfall').children('.layout').hide().eq(index).show();

    var mark = $(this).attr('data_id');
    if (mark == '1') {
      //解决页面切换布错乱
      setTimeout(function () {
        return compatibleEventCreate();
      }, 0);

      $('.page .waterfall .row').hide();
      $('.page .waterfall .column').show();

    }
    if (mark == '2') {
      // //解决页面切换布错乱
      // setTimeout(function () {
      //   return compatibleEventCreate();
      // }, 0);

      $('.page .waterfall .row').show();
      $('.page .waterfall .column').hide();
    }
  })

  //页面加载后resize页面布局
  function compatibleEventCreate() {
    var element, ev, event;
    if (document.createEvent) {
      ev = document.createEvent('Event');
      ev.initEvent('resize', true, true);
      return window.dispatchEvent(ev);
    } else {
      element = document.documentElement;
      event = document.createEventObject();
      return element.fireEvent('onresize', event);
    }
  }


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

  
  //点击阴影关闭
  $('.page .shadow').on('click', function () {
    $(this).hide();
    $('.page .close').hide();
  })

  $('.page .shadow .panel').on('click', function (e) {
    e.stopPropagation();
  })










})

