(function () {
    var dynamicLoading = {
        css: function (path) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        },
        js: function (path, callback, onFailed) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = path;
            script.type = 'text/javascript';
            script.async = false
            script.onload = script.onreadystatechange = function () {
                callback && callback()
            };
            if (onFailed && typeof (onFailed) == "function") {
                script.onerror = onFailed;
            }
            head.appendChild(script);
        },
        type: 'template',
        time: '1693981283'
    }

dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/html5_templates/js/deString.js?1693981283');
dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/html5_templates/js/jquery-3.5.1.min.js')
dynamicLoading.css('https://static.pubhtml5.com/resourceFiles/html5_templates/template/Handy/style/style.css?1693981283')
dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/html5_templates/template/Handy/javascript/book.min.js?1693981283')

var time = new Date().getTime()
var pageEditorJs = '../files/pageEditor.js?' + time;
var editorTextSvgConfigJs = '../files/textSvgConfig.js?' + time;
var indexEditorAppCss = 'https://static.pubhtml5.com/resourceFiles/yzReader/templates/Slide/css/app.css';
var indexEditorChunkVendorsCss = 'https://static.pubhtml5.com/resourceFiles/yzReader/templates/Slide/css/chunk-vendors.css';
var indexEditorAppJs = 'https://static.pubhtml5.com/resourceFiles/yzReader/templates/Slide/js/app.js';
var indexEditorChunkVendorsJs = 'https://static.pubhtml5.com/resourceFiles/yzReader/templates/Slide/js/chunk-vendors.js';


    // dynamicLoading.js(pageEditorJs, function () {
    //     window.readerConfigLoaded = true;
    //     if (window.readerConfig &&
    //         window.readerConfig.pages.length > 0
    //     ) {
    //         dynamicLoading.css(indexEditorAppCss)
    //         dynamicLoading.css(indexEditorChunkVendorsCss)
    //         dynamicLoading.js(editorTextSvgConfigJs)
    //         dynamicLoading.js(indexEditorAppJs)
    //         dynamicLoading.js(indexEditorChunkVendorsJs)
    //     }
    // }, function () {
        window.readerConfigLoaded = true;
    // })

if(window.htmlConfig && window.htmlConfig.pageEditor) window.pageEditor = window.htmlConfig.pageEditor;
window.pageEditorUrl = 'https://static.pubhtml5.com/resourceFiles/html5_templates/js/pageItems.min.js?1693981283';
if (window.pageEditor &&
    ((!pageEditor.pageAnnos && pageEditor.length > 0) ||
        (pageEditor.pageAnnos && pageEditor.pageAnnos.length > 0))) {
    dynamicLoading.js(pageEditorUrl)
}
window.pageEditorUrl = null;

window.pageSliderUrl = 'https://static.pubhtml5.com/resourceFiles/html5_templates/js/LoadSlider.js?1693981283';
if (window.sliderJS &&
    window.sliderJS.length > 0) {
    dynamicLoading.js(pageSliderUrl)
}
window.pageSliderUrl = null;

dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/html5_templates/template/Handy/javascript/main.min.js?1693981283')

    try {
        if(window.htmlConfig && window.htmlConfig.phoneTemplate) {
            if(window.htmlConfig.phoneTemplate.name && window.htmlConfig.phoneTemplate.name == 'neat') {
                var toolbarUrl = window.htmlConfig.phoneTemplate.path + 'PhoneToolBar.min.js?' + new Date().getTime();
                dynamicLoading.js(toolbarUrl)
            }
        }
    } catch (error) {
        
    }
    
    var interval = window.setInterval(function () {
        if (!window.bookConfig) return;

        window.clearInterval(interval);
        dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/js/encryption/encryption.min.js?1693981283')
        dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/js/visitinfo.js?1693981283')
        dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/js/statistic.js?1693981283')
        dynamicLoading.js('https://static.pubhtml5.com/resourceFiles/js/writeLog.js?1693981283')
    }, 100);
})();