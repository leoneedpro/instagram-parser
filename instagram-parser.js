// Copyright Леонид Залюбовский
try {
// Объявление переменных ------------------------------------------------------------
var a = document.getElementsByClassName("SrXZj YHaCL");   	// ul тег аккаунтов
var x = document.getElementsByClassName("j6cq2");           // div тег списка
var n = document.getElementsByClassName("NroHT");           // li тег аккаунтов
var timeoutID ='';
var t = 1;

// Выборка кол-ва подписчиков и подписок по языку RU-EN ---------
// Классы расположены на главной странице Подписчики-Подписки

if (document.getElementsByClassName("t48Bo fzjDT")[0].innerHTML =="Подписчики" || document.getElementsByClassName("t48Bo fzjDT")[0].innerHTML =="Followers" ){
var i = document.getElementsByClassName("g47SY")[1].innerHTML;
}else{
var i = document.getElementsByClassName("g47SY")[2].innerHTML;
}


// --------------------------------------------------------------------------------------------

i = i.match(/[^"]+/g);
i = i.join('');
i = i.match(/[^\s]+/g);
i = i.join('');
i = i.match(/[^,]+/g);
i = i.join('');
console.log('%cПАРСЕР ПОДПИСЧИКОВ INSTAGRAM', 'color: #1d6ba3; font-size:28px;');
console.log('%c--------------------------------------------------------------------------------------------//', 'color: #a22e1c; font-size:16px;');
console.log('%cРазработал Леонид Залюбовский 2018 | www.leoneed.pro | http://Instagram.com/leoneed.pro', 'color: #1d6ba3; font-size:14px;');
console.log('%c--------------------------------------------------------------------------------------------//', 'color: #a22e1c; font-size:16px;');
console.log('%cКол-во аккаунтов для сбора: '+i +' шт.', 'color: #13a555; font-size:20px;');
console.log('%cНачался сбор данных, дождитесь выполнения...', 'color: #13a555; font-size:20px;');
function start() {
  t++;
if (i == t){
off();
  console.log('%cАккаунтов собрано: '+n.length +' шт.', 'color: #13a555; font-size:20px;');
  if (i>n.length){console.log('%cСтранно, но '+(i - n.length) +' шт. не определились, ну и ладно=)', 'color: #13a555; font-size:20px;')};
  var text =  a[0].innerHTML;
  var result = text.match(/title="[^"]+"/g);
  result = result.join(' ');
  result = result.match(/"[^"]+"/g);
  result = result.join(' ');
  result = result.match(/[^"]+/g);
  result = result.join('');
  result = result.match(/[^\s]+/g);
  result = result.join('\n');
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #a22e1c; font-size:16px;');
  console.log(result);
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #a22e1c; font-size:16px;');
  console.log('%cПоздравляю! Выделите собранные имена аккаунтов выше и нажмите CTRL-C, чтобы скопировать. Перейдите в любой текстовый редактор и нажмите CTRL-V, чтобы вставить данные.', 'color: #13a555; font-size:24px;');
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #13a555; font-size:16px;');
  console.log('%cЗаходите подписывайтесь! Ставьте лайки! =) http://Instagram.com/leoneed.pro | www.leoneed.pro ', 'color: #1d6ba3; font-size:14px;');
}else{
x[0].scrollTop = x[0].scrollHeight;
run()
}
}

function run() {
 timeoutID = setTimeout(start, 100);
}
start();
}catch(e){
console.log('%cНажмите на странице Instagram на Подписчиков или Подписки, и запустите заново скрипт)', 'color: #a22e1c; font-size:28px;');
}
function off() {
    clearTimeout(timeoutID);
    timeoutID = null;
}
