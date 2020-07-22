export default function resetFont() {
    document.body.style['-webkit-text-size-adjust']='100% !important';
    if (
        typeof WeixinJSBridge == 'object' &&
        typeof WeixinJSBridge.invoke == 'function'
    ) {
        handleFontSize();
    } else {
        document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
    }
    function handleFontSize() {
        WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        });
    }
}
