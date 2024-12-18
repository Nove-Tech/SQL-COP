// 创建并加载 gtag.js 脚本
(function() {
    // 创建一个新的 script 元素
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-L4H3K7PSDR';
    
    // 将脚本添加到文档的 head 部分
    document.head.appendChild(script);
  
    // 初始化 dataLayer 数组
    window.dataLayer = window.dataLayer || [];
    
    // 定义 gtag 函数，用于推送事件到 dataLayer
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
  
    // 配置 gtag
    gtag('js', new Date());
    gtag('config', 'G-L4H3K7PSDR');
  })();
