$(function(){
    
    // $.removeCookie('_configx');

    var _configx = '{"navIndex":0, "operatorIndex":0, "saveCurrentConfig":false, "openNewTab":true}';

    var _replace = function(stringObj, rgExp, replaceText) {
        return stringObj.replace(rgExp, replaceText);
    };

    var _indexFun = function(n_index, o_index) {
        $('.nav a').removeClass('current');
        $('.nav a').eq(n_index).addClass('current');
        $('.formoperator span').hide();
        $('.formoperator span').eq(n_index).show();
        $('.formoperator span').eq(n_index).children().children('input').eq(o_index).attr('checked', 'checked');
        $('.input_wrap input').focus();
    };

    var _init = function() {

        var configx = $.cookie('_configx');
        if (configx != null) {
            var obj = eval('(' + configx + ')');
            _indexFun(obj.navIndex, obj.operatorIndex);
            $('.scc').attr('checked', obj.saveCurrentConfig);
            $('.ont').attr('checked', obj.openNewTab);
        } else {
            _indexFun(0, 0);
        }

        $('.input_wrap input').focus();

    };

    var _serCookie = function() {

        var navIndex = 0;
        var operatorIndex = 0;
        var saveCurrentConfig = false;
        var openNewTab = false;
        if ($('.scc').attr('checked') == 'checked') {
            navIndex = $('.nav a.current').index();
            operatorIndex = $('.formoperator input:checked').parents('label').index();
            saveCurrentConfig = true;
        }
        if ($('.ont').attr('checked') == 'checked') {
            openNewTab = true;
        }
        var configx = '{"navIndex":' + navIndex + ', "operatorIndex":' + operatorIndex + ', "saveCurrentConfig":' + saveCurrentConfig + ', "openNewTab":' + openNewTab + '}';
        // alert(configx);
        $.cookie('_configx', configx, { expires:365 });

    };

    _init();

    $('.nav a').click(function(){
        var index = $(this).index();
        _indexFun(index, 0);
        _serCookie();
    });

    $('.formoperator input').click(function(){
        _serCookie();
        $('.input_wrap input').focus();
    });

    $('.scc').click(function(){
        _serCookie();
    });

    $('.ont').click(function(){
        _serCookie();
    });
    
    $('.sethome').click(function(){
        try {
            this.style.behavior = "url(#default#homepage)";
            this.setHomePage('http://searchx.cloudfoundry.com');
        } catch (e) {
            alert("无法设为首页，请自行修改当前浏览器主页链接。");
        }
    });
    
    $('.addFavorite').click(function(){
        var webtitle = '巨能搜 - 聚合多家网页搜索,招聘等资源';
        var weburl = 'http://searchx.cloudfoundry.com';
        if (window.sidebar) {
            window.sidebar.addPanel(webtitle, weburl, "");
        } else if ( document.all ) {
            window.external.AddFavorite(weburl, webtitle);
        } else if ( window.opera && window.print ) {
            return true;
        }
    });
    
    $('form').submit(function(){
        var keywordx = $('.input_text').val();
        if (keywordx == "") {
            $('.input_text').val("");
            $('.input_wrap input').focus();
        } else {
			var optionx = $('.formoperator input:checked').val();
			if ($('.ont').attr('checked') == 'checked') {
				var webpage = urlx[optionx];
				// webpage = _replace(webpage, "${keyword}", keywordx);
				webpage = encodeURI(_replace(webpage, "${keyword}", keywordx));
				webpage = _replace(webpage, "#", "%23");
				// webpage = _replace(webpage, "&", "%26"); 稍后解决
				webpage = _replace(webpage, "+", "%2B");
				webpage = _replace(webpage, "%20", "+");
				window.location.href = webpage;
			}
		}
        return false;
    });
    
    $('html,body,div').click(function(){
        $('.input_wrap input').focus();
    });

});
