function dateFilter(date,format){
    let formatRegex = /yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s/g;
    return format.replace(formatRegex, name => representations[name](date));
}

const representations = {
    yyyy: function (date) {
        return new Date(date).getFullYear().toString();
    },
    yy: function (date) {
        return new Date(date).getFullYear().toString().substring(2);
    },
    MM: function (date) {
        return new Date(date).getMonth() > 8 ? (new Date(date).getMonth() + 1).toString() : `0${(new Date(date).getMonth() + 1)}`;
    },
    M: function (date) {
        return new Date(date).getMonth() > 8 ? (new Date(date).getMonth() + 1).toString() : (new Date(date).getMonth() + 1).toString();
    },
    dd: function (date) {
        return new Date(date).getDate() > 9 ? new Date(date).getDate().toString() : `0${new Date(date).getDate()}`;
    },
    d: function (date) {
        return new Date(date).getDate().toString();
    },
    HH: function (date) {
        return new Date(date).getHours() > 9 ? new Date(date).getHours() : `0${new Date(date).getHours()}`;
    },
    H: function (date) {
        return new Date(date).getHours();
    },
    mm: function (date) {
        return new Date(date).getMinutes() > 9 ? new Date(date).getMinutes() : `0${new Date(date).getMinutes()}`;
    },
    m: function (date) {
        return new Date(date).getMinutes();
    },
    ss: function (date) {
        return new Date(date).getSeconds() > 9 ? new Date(date).getSeconds() : `0${new Date(date).getSeconds()}`;
    },
    s: function (date) {
        return new Date(date).getSeconds();
    }
};





/* 'HH:mm' :'00:00',
'dd/MM/yyyy' : '01/01/1970',
'd/M/yy H%m' : '1/1/70 0%0',
'ss@mm == s@m' : '00@00 == 0@0' 

**yyyy** : 4 digit representation of a year,padded (1970-9999)
 **yy** : 2 digit representation of a year, padded (00-99)
 **MM** : Month in a year, padded (01-12)
 **M** : Month in a year (1-12)
 **dd** : Day in a month, padded (01-31)
 **d** : Day in a month (1-13)
 **HH** : Hour in a day, padded (00-23)
 **H** : Hour in a day (0-23)
 **mm** : Minute in hour, padded (00-59)
 **m** : Minute in hour (0-59)
 **ss** : Second in minute, padded (00-59)
 **s** : Second in minute (0-59) */