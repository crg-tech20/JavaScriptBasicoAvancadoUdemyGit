function calcular_idade1(ano_nascimento){
    const data = new Date(); // gera a a data atual 

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}



let ret = calcular_idade1(1971);
// console.log(ret + 3);


//calcular_idade2(1998);


const data = new Date();

console.log('Data Completa: ' + data);

console.log('Ano: ' + data.getFullYear());

//console.log('Mês: ' + data.getMonth()); // 0 para janeiro, 1 para feveiro....

// Fique esperto!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6)); // 10

console.log(somar(4)); // ?? NaN - Not a Number

console.log(somar(4, 6, 8)); // 10 

console.log(somar(4, 6, 8, 3, 2, 1, 19)); // 10

// - Configuração e retorno de data em javascript
var d = new Date();
var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var mes = months[d.getMonth()];
var dia = d.getDate();
var ano = d.getFullYear();
var hora = d.getHours();
var minuto = d.getMinutes();
var minutos = parseInt(minuto);
var data_string = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto;
var data_string = data_string.toString();
console.log('Data Montada: '+data_string);
console.log(`Data Montada template string: ${data_string}`)
//console.log(minutos);
// timestamp e unix time  ================================

function unixTime(unixtime) {

    var u = new Date(unixtime*1000);

      return u.getUTCFullYear() +
        '-' + ('0' + u.getUTCMonth()).slice(-2) +
        '-' + ('0' + u.getUTCDate()).slice(-2) + 
        ' ' + ('0' + u.getUTCHours()).slice(-2) +
        ':' + ('0' + u.getUTCMinutes()).slice(-2) +
        ':' + ('0' + u.getUTCSeconds()).slice(-2) +
        '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) 
    };

console.log(unixTime(1370001284));  // <== NO FORMATO UNIX DE 10 DIGITOS
console.log(unixTime(1620220562));
// Resp: 2016-04-30 08:36:26.000

/* 


Here are the simple ways to every date format confusions:

for current date:

var current_date=new Date();

to get the Timestamp of current date:

var timestamp=new Date().getTime();

to convert a particular Date into Timestamp:

var timestamp_formation=new Date('mm/dd/yyyy').getTime();

to convert timestamp into Date:

    var timestamp=new Date('02/10/2016').getTime();
    var todate=new Date(timestamp).getDate();
    var tomonth=new Date(timestamp).getMonth()+1;
    var toyear=new Date(timestamp).getFullYear();
    var original_date=tomonth+'/'+todate+'/'+toyear;

  OUTPUT:
 02/10/2016


*/


/*
formatDate is the function you can call it and pass the date you want to format to dd/mm/yyyy

var unformatedDate = new Date("2017-08-10 18:30:00");
 
$("#hello").append(formatDate(unformatedDate));
function formatDate(nowDate) {
	return nowDate.getDate() +"/"+ (nowDate.getMonth() + 1) + '/'+ nowDate.getFullYear();
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="hello">

*/



/* // MOMENT ==========================================================
https://momentjs.com/
https://momentjs.com/docs/#/displaying/
https://momentjs.com/timezone/
<script src="moment.min.js"></script>

Browser
=======
<script src="moment.js"></script>
<script>
    moment().format();
</script>

Unix Timestamp (seconds) 
=======================
moment().unix();
moment(1318874398806).unix(); // 1318874398

As Javascript Date 
==================
moment().toDate();

Default format
==============
moment.defaultFormat = "DD.MM.YYYY HH:mm";
// parse with .toDate()
moment('20.07.2018 09:19').toDate() // Invalid date
// format the date string with the new defaultFormat then parse
moment('20.07.2018 09:19', moment.defaultFormat).toDate() // Fri Jul 20 2018 09:19:00 GMT+0300

---------------------------------------------------------------------------------------------------------------

// moment tem que colocar o moment.js do site https://momentjs.com/docs/#/displaying/format/ ----------------------
// Moment.js can convert unix timestamps into any custom format

// In this case : var time = moment(1382086394000).format("DD-MM-YYYY h:mm:ss");

// will print 18-10-2013 11:53:14;

// Here's a plunker that demonstrates this.

Format 1.0.0+
edit

moment().format();
moment().format(String);

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment().format("[Today is] dddd");               // "Today is Sunday"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"
*/


/*
This is what I did for the instagram API. converted timestamp with date method by multiplying by 1000. and then added all entity individually like (year, months, etc)

created the custom month list name and mapped with getMonth() method which returns the index of the month.

convertStampDate(unixtimestamp){

// Unixtimestamp

// Months array
var months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Convert timestamp to milliseconds
var date = new Date(unixtimestamp*1000);

// Year
var year = date.getFullYear();

// Month
var month = months_arr[date.getMonth()];

// Day
var day = date.getDate();

// Hours
var hours = date.getHours();

// Minutes
var minutes = "0" + date.getMinutes();

// Seconds
var seconds = "0" + date.getSeconds();

// Display date time in MM-dd-yyyy h:m:s format
var fulldate = month+' '+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// filtered fate
var convdataTime = month+' '+day;
return convdataTime;
}

Call with stamp argument convertStampDate('1382086394000')



*/

//========================================
console.log('\n//////////////////////////')
// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript

// To get the timestamp in seconds, you can use:
console.log(Math.floor(Date.now() / 1000));

// Or alternatively you could use:
console.log(Date.now() / 1000 | 0);

// Which you can then convert to seconds like this:
console.log(Math.round(new Date().getTime()/1000));

//This will give you the milliseconds since the epoch (not Unix timestamp):
var milliseconds = new Date().getTime();
console.log(milliseconds);


// This will give you a Unix timestamp (in seconds):
var unix = Math.round(+new Date()/1000);
console.log(unix);

// This will give you the milliseconds since the epoch (not Unix timestamp):
var milliseconds = new Date().getTime();
console.log(milliseconds);





