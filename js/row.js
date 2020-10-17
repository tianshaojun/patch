
window.onload = function () {
    setPosition('content', 'box');
    //通过json字符串模拟加载内容
    var imgArray = { 'date': [{ 'src': '05.jpg' }, { 'src': '06.jpg' }, { 'src': '07.jpg' }, { 'src': '08.jpg' }] }

    //滚动到页面底部（最后一张图片的顶部）时开始加载json内容
    window.onscroll = function () {
        if (getFlag()) { //判断是否滚动到最后一张
            var oContent = document.getElementById('content'); //获取外部容器    
            for (var i = 0; i < imgArray.date.length; i++) {
                var oDiv = document.createElement('div');
                oDiv.className = 'box';
                oContent.appendChild(oDiv);
                var oImgDiv = document.createElement('div');
                oImgDiv.className = 'imgBox';
                oDiv.appendChild(oImgDiv);
                var oImg = document.createElement('img');
                oImg.src = 'images/' + imgArray.date[i].src;
                oImgDiv.appendChild(oImg);
            }
            setPosition('content', 'box');
        }
    }
}

//元素排列
function setPosition(parents, content) {
    var oContent = document.getElementById('content'); //获取外部容器    
    var aBox = getByClass(oContent, content); //获取classname为box的元素集合
    var oneWidth = aBox[0].offsetWidth;      //获取单个box的宽度
    var docWidth = document.documentElement.clientWidth || document.body.clientWidth; //获取窗口可视区域宽度
    var num = Math.floor(docWidth / oneWidth);
    oContent.style.width = num * oneWidth + 'px';  //设置外部容器的宽度    
    var result = [];
    for (var i = 0; i < aBox.length; i++) {
        if (i < num) {
            result[i] = aBox[i].offsetHeight; //判断是否为第一行，然后把第一行中每个aBox的高度存入定义的result数组中
        } else {
            var minHeight = Math.min.apply(null, result);  //获取result数组中最小的值
            var minIndex = getIndex(result, minHeight);  //获取result数组中最小值的索引
            aBox[i].style.position = 'absolute';
            aBox[i].style.top = minHeight + 10 + 'px';
            aBox[i].style.left = aBox[minIndex].offsetLeft + 'px';
            result[minIndex] = result[minIndex] + aBox[i].offsetHeight;
        }
    }
}
//获取当前索引值
function getIndex(parents, name) {
    for (var i = 0; i < parents.length; i++) {
        if (parents[i] == name) {
            return i;
        }
    }
}
//通过class选取元素方法
function getByClass(oParent, name) {
    var result = [];
    var aArr = oParent.getElementsByTagName('*');
    for (var i = 0; i < aArr.length; i++) {
        if (aArr[i].className == name) {
            result.push(aArr[i]);
        }
    }
    return result;
}
//判断是否滚动到最后
function getFlag() {
    var oContent = document.getElementById('content');
    var aBox = getByClass(oContent, 'box');
    var lastTop = aBox[aBox.length - 1].offsetTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scorllTop = document.documentElement.scrollTop || document.body.scrollTop;
    if ((clientHeight + scorllTop) > lastTop) {
        return true;
    } else {
        return false;
    }
}
