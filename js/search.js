$(function(){
    
    urlx = new Array();
    
    // 网页搜索
    urlx['wbaidu'] = 'http://www.baidu.com/baidu?tn=baidu&word=${keyword}&submit=百度一下';
    urlx['wgoogle'] = 'http://www.google.com.tw/custom?hl=zh-CN&newwindow=1&safe=strict&q=${keyword}&btnG=Google+搜索&meta=';
    urlx['wbing'] = 'http://cn.bing.com/search?q=${keyword}';
    urlx['wjike'] = 'http://www.jike.com/so?q=${keyword}';
    urlx['wyoudao'] = 'http://www.yodao.com/search?q=${keyword}';
    urlx['fyoudao'] = 'http://dict.yodao.com/search?q=${keyword}';
    
    // 职位搜索
    urlx['joschina'] = 'http://www.oschina.net/job?tab=1&rank=1&q=${keyword}&type=0&addr_prv=&addr_city=';
    urlx['jindeed'] = 'http://cn.indeed.com/工作?q=${keyword}&l=';
    urlx['j51job'] = 'http://search.51job.com/jobsearch/search_result.php?fromJs=1&jobarea=000000%2C00&funtype=0000&industrytype=00&keyword=${keyword}&keywordtype=1&lang=c&stype=1&postchannel=0000&fromType=1';
    urlx['jzhaopin'] = 'http://sou.zhaopin.com/Jobs/searchresult.ashx?jl=北京&kw=${keyword}&sm=0&p=1&sf=0';
    urlx['jbaijobo'] = 'http://search.baijob.com/?wd=${keyword}&ie=utf-8&oe=utf-8&job_cit=北京市';
    urlx['jchinahr'] = 'http://jobsearch.chinahr.com/职位/?q=${keyword}&cy=cn';
    
    // 购物搜索
    urlx['staobao'] = 'http://s8.taobao.com/search?q=${keyword}&pid=mm_21226769_0_0';
    urlx['s360buy'] = 'http://search.360buy.com/Search?keyword=${keyword}&enc=utf-8&area=1';
    urlx['samazon'] = 'http://www.amazon.cn/search/search.asp?searchWord=${keyword}';

    // alert(decodeURI('http://www.baidu.com/baidu?tn=baidu&word=java&submit=%E7%99%BE%E5%BA%A6%E4%B8%80%E4%B8%8B'));

});
