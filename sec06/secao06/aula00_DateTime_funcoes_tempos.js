/**
 * 
 * // TODO - Para checar o timestamp ver no site https://www.unixtimestamp.com/
 * 
 * 
 * 1º - console.log(to_time_stamp_from_now(unix = true));
 * 2º - console.log(`Data Montada template string: ${data_hora_Brasil_str()}`)
 * 3º - console.log(timestamps_javascript_unix_to_date_time(timestamp, unix = true));
 * 4º - console.log(str_to_timestamp('02/13/2020 23:31:30')); => str_to_timestamp('mes/dia/ano hora:min:segundo')
 * 5º - // TODO OK  
 *          str_to_javastring_date_time(utc, formato_entrada);
 *               utc = 1 e formato_entrada = 1  ==> dd/mm/yyyy hh:ii:ss
 *               utc = 1 e formato_entrada != 1  ==> yyyy-mm-dd hh:ii:ss
 *               utc != 1 e formato_entrada = 1  ==> dd/mm/yyyy hh:ii:ss
 *               utc != 1 e formato_entrada != 1  ==> yyyy-mm-dd hh:ii:ss
 * 
 *      utc é o formato de saída ou não, sendo a saída o formato BR timezone São Paulo.
 *      formato_entrada = como a data é informada na entrada para conversão
 * 
 */

//========================================
console.log('\n////////// OK 1º Data e horário atuais para timestamps unix e javascript ////////////////')
// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript

function to_time_stamp_from_now(unix = true){
    if (unix == true){
        // To get the timestamp in seconds, you can use:
        return Math.floor(Date.now() / 1000)

        //console.log(Math.floor(Date.now() / 1000));
        /*
            // This will give you a Unix timestamp (in seconds):
            var unix = Math.round(+new Date()/1000);
            console.log(unix);
            // Or alternatively you could use:
            console.log(Date.now() / 1000 | 0);
            // Which you can then convert to seconds like this:
            console.log(Math.round(new Date().getTime()/1000));
        */

    }else{
        // This will give you the milliseconds since the epoch (not Unix timestamp), is javascript timestamps 13 numeros:
        var milliseconds = new Date().getTime();
        //console.log(milliseconds);
        return milliseconds;
    }
}
console.log(to_time_stamp_from_now(unix = true));


//========================================
console.log('\n//////////// OK 2º Data e horário atuais formato Brasil //////////////')
// - Configuração e retorno de data em javascript

function data_hora_Brasil_str(){
    var d = new Date();
    var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var mes = months[d.getMonth()];
    var dia = d.getDate();
    var ano = d.getFullYear();
    var hora = d.getHours();
    var minuto = d.getMinutes();
    var segundo = d.getSeconds();
    var minutos = parseInt(minuto);
    var data_string = '';
    if(minutos < 10 ){
        var data_string = dia + "/" + mes + "/" + ano + " - " + hora + ":0" + minuto;  // "+"+segundo
    }else{
        var data_string = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto;  // "+"+segundo
    }
    //var data_string = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto;  // "+"+segundo
    var data_string = data_string.toString();
    
    return data_string;

}
console.log('Data Montada: '+data_hora_Brasil_str());
console.log(`Data Montada template string: ${data_hora_Brasil_str()}`);

//========================================
console.log('\n///////// OK 3º Timestamps unix ou javascript to date /////////////////')

var timestamp = 1581647490  // unix timestamp = 10 números
var timestamp1 = 1607110465663;  // javascript timestamp = 13 números
//var unix = true;

function timestamps_javascript_unix_to_date_time(timestamp, unix = true){
    var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var date = '';
    if(unix === true){
        var date = new Date(timestamp*1000);
    }else{
        var date = new Date(timestamp);
    }
    // var date = new Date(timestamp); TODO - javascript timestamp 13 numeros
    // var date = new Date(timestamp*1000); TODO - unix timestamp 10 numeros
    
    var minuto = date.getMinutes();
    var minutos = parseInt(minuto);
    var x = '';
    
    if(minutos < 10 ){
        var x = "Date: "+date.getDate()+
              "/"+ months[date.getMonth()]+  // +(date.getMonth()+1)+  => 13/2/2020 23:31:30
              "/"+date.getFullYear()+
              " "+date.getHours()+
              ":0"+date.getMinutes()+
              ":"+date.getSeconds();
    }else{
        var x = "Date: "+date.getDate()+
              "/"+ months[date.getMonth()]+  // +(date.getMonth()+1)+  => 13/2/2020 23:31:30
              "/"+date.getFullYear()+
              " "+date.getHours()+
              ":"+date.getMinutes()+
              ":"+date.getSeconds();
    }
    return x;
}
console.log(timestamps_javascript_unix_to_date_time(timestamp, unix = true));

//========================================
console.log("\n///////// OK 4º string date to timestamp (str_to_timestamp('mes/dia/ano hora:min:segundo') /////////////////")

function str_to_timestamp(strDate){
    const toTimestamp1 = (strDate) => {  
        const dt = Date.parse(strDate);  
        return dt / 1000;  
      }        
      return toTimestamp1(strDate)

    // 2º forma com .getTime()
    // const toTimestamp = (strDate) => {  
    //     const dt = new Date(strDate).getTime();  
    //     return dt / 1000;  
    //   }      
    //console.log(toTimestamp('02/13/2020 23:31:30'));
    //console.log(toTimestamp('mes/dia/ano hora:min:segundo'));    
}
// Testar retorno no https://www.unixtimestamp.com/
// TODO - como usar ==> str_to_timestamp('mes/dia/ano hora:min:segundo')
console.log(str_to_timestamp('02/13/2020 23:31:30'));
//console.log(str_to_timestamp('mes/dia/ano hora:min:segundo'));

//========================================

console.log('\n///////// OK 5º string date to javascript date time /////////////////')

function str_to_javastring_date_time(utc = 0, formato_entrada = 1){
    String.prototype.toDate = function(format)
    {
      var normalized      = this.replace(/[^a-zA-Z0-9]/g, '-');
      var normalizedFormat= format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
      var formatItems     = normalizedFormat.split('-');
      var dateItems       = normalized.split('-');
    
      var monthIndex  = formatItems.indexOf("mm");
      var dayIndex    = formatItems.indexOf("dd");
      var yearIndex   = formatItems.indexOf("yyyy");
      var hourIndex     = formatItems.indexOf("hh");
      var minutesIndex  = formatItems.indexOf("ii");
      var secondsIndex  = formatItems.indexOf("ss");
    
      var today = new Date();
    
      var year  = yearIndex>-1  ? dateItems[yearIndex]    : today.getFullYear();
      var month = monthIndex>-1 ? dateItems[monthIndex]-1 : today.getMonth()-1;
      var day   = dayIndex>-1   ? dateItems[dayIndex]     : today.getDate();
    
      var hour    = hourIndex>-1      ? dateItems[hourIndex]    : today.getHours();
      var minute  = minutesIndex>-1   ? dateItems[minutesIndex] : today.getMinutes();
      var second  = secondsIndex>-1   ? dateItems[secondsIndex] : today.getSeconds();
    
      return new Date(year,month,day,hour,minute,second);
    };
    
    if(utc == 1){
        // TODO - Data em UTC
        if(formato_entrada == 1){
            console.log("26/11/2021 13:51:00".toDate("dd/mm/yyyy hh:ii:ss"));
        }else{
            console.log("2016-03-29 18:30:00".toDate("yyyy-mm-dd hh:ii:ss"));
        }
    }else{
        // TODO - Data no formato Brasil com timezone
        if(formato_entrada == 1){
            var x = "26/11/2021 13:51:00".toDate("dd/mm/yyyy hh:ii:ss");
            var tempo = new Date(x).toLocaleString("pt-Br", {timeZone: "America/Sao_Paulo"})
            console.log(`forma data e hora Brasil 0->1: ${tempo}`);
        }else{
            var x = "2016-03-29 18:30:00".toDate("yyyy-mm-dd hh:ii:ss");
            var tempo = new Date(x).toLocaleString("pt-Br", {timeZone: "America/Sao_Paulo"})
            console.log(`forma data e hora Brasil 0->0: ${tempo}`);
        }
    }
    
}
str_to_javastring_date_time(utc = 0, formato_entrada = 0);

//========================================

function setDoisDigitos(tempo){
    if (tempo < 10){ return "0" + tempo}
    else { return tempo}
}
var agora = new Date();

console.log(setDoisDigitos(agora.getHours()));
console.log(setDoisDigitos(agora.getMinutes()));
console.log(setDoisDigitos(agora.getSeconds()));
console.log(`Agora são ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`)

//========================================
console.log('\n///////// Outras e timezones /////////////////')
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
console.log(currentTimeZoneOffsetInHours);

// Data no formato Brasil com timezone
var x = "26/11/2021 13:51:00".toDate("dd/mm/yyyy hh:ii:ss");
var tempo = new Date(x).toLocaleString("en-US", {timeZone: "America/Detroit"});
var horas = new Date(tempo).toLocaleTimeString('en-US');
console.log(`forma data e hora USA: ${tempo}`);
console.log(`forma hora USA: ${horas}`);

// Data no formato Brasil com timezone
var x = "26/11/2021 13:51:00".toDate("dd/mm/yyyy hh:ii:ss");
var tempo = new Date(x).toLocaleString("pt-Br", {timeZone: "America/Sao_Paulo"});
var horas = new Date(x).toLocaleTimeString('pt-Br')
console.log(`forma data e hora Brasil: ${tempo}`);
console.log(`forma hora Brasil: ${horas}`);

/*
// Data no formato Brasil com timezone
var x = "26/11/2021 13:51:00".toDate("dd/mm/yyyy hh:ii:ss");
var tempo = new Date(x).toLocaleString("pt-Br", {timeZone: "America/Sao_Paulo"})
console.log(`forma data e hora Brasil: ${tempo}`);


  var world_timezones =
  [
      'Europe/Andorra',
      'Asia/Dubai',
      'Asia/Kabul',
      'Europe/Tirane',
      'Asia/Yerevan',
      'Antarctica/Casey',
      'Antarctica/Davis',
      'Antarctica/DumontDUrville', 
      'Antarctica/Mawson',
      'Antarctica/Palmer',
      'Antarctica/Rothera',
      'Antarctica/Syowa',
      'Antarctica/Troll',
      'Antarctica/Vostok',
      'America/Argentina/Buenos_Aires',
      'America/Argentina/Cordoba',
      'America/Argentina/Salta',
      'America/Argentina/Jujuy',
      'America/Argentina/Tucuman',
      'America/Argentina/Catamarca',
      'America/Argentina/La_Rioja',
      'America/Argentina/San_Juan',
      'America/Argentina/Mendoza',
      'America/Argentina/San_Luis',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Ushuaia',
      'Pacific/Pago_Pago',
      'Europe/Vienna',
      'Australia/Lord_Howe',
      'Antarctica/Macquarie',
      'Australia/Hobart',
      'Australia/Currie',
      'Australia/Melbourne',
      'Australia/Sydney',
      'Australia/Broken_Hill',
      'Australia/Brisbane',
      'Australia/Lindeman',
      'Australia/Adelaide',
      'Australia/Darwin',
      'Australia/Perth',
      'Australia/Eucla',
      'Asia/Baku',
      'America/Barbados',
      'Asia/Dhaka',
      'Europe/Brussels',
      'Europe/Sofia',
      'Atlantic/Bermuda',
      'Asia/Brunei',
      'America/La_Paz',
      'America/Noronha',
      'America/Belem',
      'America/Fortaleza',
      'America/Recife',
      'America/Araguaina',
      'America/Maceio',
      'America/Bahia',
      'America/Sao_Paulo',
      'America/Campo_Grande',
      'America/Cuiaba',
      'America/Santarem',
      'America/Porto_Velho',
      'America/Boa_Vista',
      'America/Manaus',
      'America/Eirunepe',
      'America/Rio_Branco',
      'America/Nassau',
      'Asia/Thimphu',
      'Europe/Minsk',
      'America/Belize',
      'America/St_Johns',
      'America/Halifax',
      'America/Glace_Bay',
      'America/Moncton',
      'America/Goose_Bay',
      'America/Blanc-Sablon',
      'America/Toronto',
      'America/Nipigon',
      'America/Thunder_Bay',
      'America/Iqaluit',
      'America/Pangnirtung',
      'America/Atikokan',
      'America/Winnipeg',
      'America/Rainy_River',
      'America/Resolute',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Swift_Current',
      'America/Edmonton',
      'America/Cambridge_Bay',
      'America/Yellowknife',
      'America/Inuvik',
      'America/Creston',
      'America/Dawson_Creek',
      'America/Fort_Nelson',
      'America/Vancouver',
      'America/Whitehorse',
      'America/Dawson',
      'Indian/Cocos',
      'Europe/Zurich',
      'Africa/Abidjan',
      'Pacific/Rarotonga',
      'America/Santiago',
      'America/Punta_Arenas',
      'Pacific/Easter',
      'Asia/Shanghai',
      'Asia/Urumqi',
      'America/Bogota',
      'America/Costa_Rica',
      'America/Havana',
      'Atlantic/Cape_Verde',
      'America/Curacao',
      'Indian/Christmas',
      'Asia/Nicosia',
      'Asia/Famagusta',
      'Europe/Prague',
      'Europe/Berlin',
      'Europe/Copenhagen',
      'America/Santo_Domingo',
      'Africa/Algiers',
      'America/Guayaquil',
      'Pacific/Galapagos',
      'Europe/Tallinn',
      'Africa/Cairo',
      'Africa/El_Aaiun',
      'Europe/Madrid',
      'Africa/Ceuta',
      'Atlantic/Canary',
      'Europe/Helsinki',
      'Pacific/Fiji',
      'Atlantic/Stanley',
      'Pacific/Chuuk',
      'Pacific/Pohnpei',
      'Pacific/Kosrae',
      'Atlantic/Faroe',
      'Europe/Paris',
      'Europe/London',
      'Asia/Tbilisi',
      'America/Cayenne',
      'Africa/Accra',
      'Europe/Gibraltar',
      'America/Godthab',
      'America/Danmarkshavn',
      'America/Scoresbysund',
      'America/Thule',
      'Europe/Athens',
      'Atlantic/South_Georgia',
      'America/Guatemala',
      'Pacific/Guam',
      'Africa/Bissau',
      'America/Guyana',
      'Asia/Hong_Kong',
      'America/Tegucigalpa',
      'America/Port-au-Prince',
      'Europe/Budapest',
      'Asia/Jakarta',
      'Asia/Pontianak',
      'Asia/Makassar',
      'Asia/Jayapura',
      'Europe/Dublin',
      'Asia/Jerusalem',
      'Asia/Kolkata',
      'Indian/Chagos',
      'Asia/Baghdad',
      'Asia/Tehran',
      'Atlantic/Reykjavik',
      'Europe/Rome',
      'America/Jamaica',
      'Asia/Amman',
      'Asia/Tokyo',
      'Africa/Nairobi',
      'Asia/Bishkek',
      'Pacific/Tarawa',
      'Pacific/Enderbury',
      'Pacific/Kiritimati',
      'Asia/Pyongyang',
      'Asia/Seoul',
      'Asia/Almaty',
      'Asia/Qyzylorda',
      'Asia/Qostanay', 
      'Asia/Aqtobe',
      'Asia/Aqtau',
      'Asia/Atyrau',
      'Asia/Oral',
      'Asia/Beirut',
      'Asia/Colombo',
      'Africa/Monrovia',
      'Europe/Vilnius',
      'Europe/Luxembourg',
      'Europe/Riga',
      'Africa/Tripoli',
      'Africa/Casablanca',
      'Europe/Monaco',
      'Europe/Chisinau',
      'Pacific/Majuro',
      'Pacific/Kwajalein',
      'Asia/Yangon',
      'Asia/Ulaanbaatar',
      'Asia/Hovd',
      'Asia/Choibalsan',
      'Asia/Macau',
      'America/Martinique',
      'Europe/Malta',
      'Indian/Mauritius',
      'Indian/Maldives',
      'America/Mexico_City',
      'America/Cancun',
      'America/Merida',
      'America/Monterrey',
      'America/Matamoros',
      'America/Mazatlan',
      'America/Chihuahua',
      'America/Ojinaga',
      'America/Hermosillo',
      'America/Tijuana',
      'America/Bahia_Banderas',
      'Asia/Kuala_Lumpur',
      'Asia/Kuching',
      'Africa/Maputo',
      'Africa/Windhoek',
      'Pacific/Noumea',
      'Pacific/Norfolk',
      'Africa/Lagos',
      'America/Managua',
      'Europe/Amsterdam',
      'Europe/Oslo',
      'Asia/Kathmandu',
      'Pacific/Nauru',
      'Pacific/Niue',
      'Pacific/Auckland',
      'Pacific/Chatham',
      'America/Panama',
      'America/Lima',
      'Pacific/Tahiti',
      'Pacific/Marquesas',
      'Pacific/Gambier',
      'Pacific/Port_Moresby',
      'Pacific/Bougainville',
      'Asia/Manila',
      'Asia/Karachi',
      'Europe/Warsaw',
      'America/Miquelon',
      'Pacific/Pitcairn',
      'America/Puerto_Rico',
      'Asia/Gaza',
      'Asia/Hebron',
      'Europe/Lisbon',
      'Atlantic/Madeira',
      'Atlantic/Azores',
      'Pacific/Palau',
      'America/Asuncion',
      'Asia/Qatar',
      'Indian/Reunion',
      'Europe/Bucharest',
      'Europe/Belgrade',
      'Europe/Kaliningrad',
      'Europe/Moscow',
      'Europe/Simferopol',
      'Europe/Kirov',
      'Europe/Astrakhan',
      'Europe/Volgograd',
      'Europe/Saratov',
      'Europe/Ulyanovsk',
      'Europe/Samara',
      'Asia/Yekaterinburg',
      'Asia/Omsk',
      'Asia/Novosibirsk',
      'Asia/Barnaul',
      'Asia/Tomsk',
      'Asia/Novokuznetsk',
      'Asia/Krasnoyarsk',
      'Asia/Irkutsk',
      'Asia/Chita',
      'Asia/Yakutsk',
      'Asia/Khandyga',
      'Asia/Vladivostok',
      'Asia/Ust-Nera',
      'Asia/Magadan',
      'Asia/Sakhalin',
      'Asia/Srednekolymsk',
      'Asia/Kamchatka',
      'Asia/Anadyr',
      'Asia/Riyadh',
      'Pacific/Guadalcanal',
      'Indian/Mahe',
      'Africa/Khartoum',
      'Europe/Stockholm',
      'Asia/Singapore',
      'America/Paramaribo',
      'Africa/Juba',
      'Africa/Sao_Tome',
      'America/El_Salvador',
      'Asia/Damascus',
      'America/Grand_Turk',
      'Africa/Ndjamena',
      'Indian/Kerguelen',
      'Asia/Bangkok',
      'Asia/Dushanbe',
      'Pacific/Fakaofo',
      'Asia/Dili',
      'Asia/Ashgabat',
      'Africa/Tunis',
      'Pacific/Tongatapu',
      'Europe/Istanbul',
      'America/Port_of_Spain',
      'Pacific/Funafuti',
      'Asia/Taipei',
      'Europe/Kiev',
      'Europe/Uzhgorod',
      'Europe/Zaporozhye',
      'Pacific/Wake',
      'America/New_York',
      'America/Detroit',
      'America/Kentucky/Louisville',
      'America/Kentucky/Monticello',
      'America/Indiana/Indianapolis',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Indiana/Marengo',
      'America/Indiana/Petersburg',
      'America/Indiana/Vevay',
      'America/Chicago',
      'America/Indiana/Tell_City',
      'America/Indiana/Knox',
      'America/Menominee',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/North_Dakota/Beulah',
      'America/Denver',
      'America/Boise',
      'America/Phoenix',
      'America/Los_Angeles',
      'America/Anchorage',
      'America/Juneau',
      'America/Sitka',
      'America/Metlakatla',
      'America/Yakutat',
      'America/Nome',
      'America/Adak',
      'Pacific/Honolulu',
      'America/Montevideo',
      'Asia/Samarkand',
      'Asia/Tashkent',
      'America/Caracas',
      'Asia/Ho_Chi_Minh',
      'Pacific/Efate',
      'Pacific/Wallis',
      'Pacific/Apia',
      'Africa/Johannesburg'
  ];


*/

