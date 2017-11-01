var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
	    
	     rr=1;
	    document.addEventListener("offline", onOffline, false);
 
function onOffline() {
$('#BtnEnt').hide();
$('#inetOff').show();
var ref = cordova.InAppBrowser.open('http://smarthomealma.controlsoft.kz/fr7/index.html?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
ref.close();
}
document.addEventListener("online", onOnline, false);
 
function onOnline() {
var ref = cordova.InAppBrowser.open('http://smarthomealma.controlsoft.kz/fr7/index.html?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('#inetOff').hide();
$('#BtnEnt').show();
}
	    
if(localStorage.ipush){}
else{
$('.loader1').css('height',screen.width+'px');
$('.loader1').fadeIn();
}
		

	    
var i = 0;
(function() {
    if (i < 8) {
var arr = ["Подготовка списка домов...", "Подготовка изображений...", "Загрузка иконок...", "Настройка данных..."];
	    $('#loaderInfo').text(arr[i]);
        i++;
        setTimeout(arguments.callee, 5000);
    } else {
 $('#loaderInfo').text("Настройка данных...");
    } 
})(); 
	    

$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://smarthomealma.controlsoft.kz/fr7/index.html?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
function didReceiveRemoteNotificationCallBack(jsonData) {
	rr=2;
var ref = cordova.InAppBrowser.open(jsonData.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}
function didOpenRemoteNotificationCallBack(jsonData) {
	rr=2;
var ref = cordova.InAppBrowser.open(jsonData.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');

}       
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("5ced1550-2eb8-4666-9d66-ef701a9c1b97")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
          .handleNotificationOpened(didOpenRemoteNotificationCallBack)
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
        
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
	if(rr==1)
            {
$('.loader1').hide();
localStorage.ipush=ipush;
var ref = cordova.InAppBrowser.open('http://smarthomealma.controlsoft.kz/fr7/index.html?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('.loader2').show();
	    }
});
        

    }
};

app.initialize();
