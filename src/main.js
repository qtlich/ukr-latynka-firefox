const cyrillic = {
    consonants: {
        'b': 'б',
        'v': 'в',
        'g': 'г',
        'ĝ': 'ґ',
        'd': 'д',
        'ž': 'ж',
        'z': 'з',
        'j': 'й',
        'k': 'к',
        'l': 'л',
        'm': 'м',
        'n': 'н',
        'p': 'п',
        'r': 'р',
        's': 'с',
        't': 'т',
        'f': 'ф',
        'h': 'х',
        'c': 'ц',
        'č': 'ч',
        'š': 'ш',
        'B': 'Б',
        'V': 'В',
        'G': 'Г',
        'Ĝ': 'Ґ',
        'D': 'Д',
        'Ž': 'Ж',
        'Z': 'З',
        'J': 'Й',
        'K': 'К',
        'L': 'Л',
        'M': 'М',
        'N': 'Н',
        'P': 'П',
        'R': 'Р',
        'S': 'С',
        'T': 'Т',
        'F': 'Ф',
        'H': 'Х',
        'C': 'Ц',
        'Č': 'Ч',
        'Š': 'Ш'
    },
    vowels: {
        'a': 'а',
        'e': 'е',
        'y': 'и',
        'i': 'і',
        'o': 'о',
        'u': 'у',
        'A': 'А',
        'E': 'Е',
        'Y': 'И',
        'I': 'І',
        'O': 'О',
        'U': 'У'
    },
    iotted: {
        'a': 'я',
        'e': 'є',
        'i': 'ї',
        'o': 'ьо',
        'u': 'ю',
        'A': 'Я',
        'E': 'Є',
        'I': 'Ї',
        'O': 'ЬО',
        'U': 'Ю',
    },
    from: function (src){
        const consonants = this.consonants;
        const vowels = this.vowels;
        const iotted = this.iotted;
        let e = 0;
        let escaped = [];
        return src.replaceAll(/`[^`]+`/g, function (m){ //escaped
                escaped.push(m.slice(1, -1));
                return '¨¨';
            }).replaceAll(/[bvgĝdžzjklmnprstfhcčšBVGĜDŽZJKLMNPRSTFHCČŠ](I[aeouAEOU])|(i[AEOU])/g, function (m){ //upper
                return consonants[ m[0] ] + iotted[ m[2].toUpperCase() ];
            }).replaceAll(/[bvgĝdžzjklmnprstfhcčšBVGĜDŽZJKLMNPRSTFHCČŠ]i[aeou]/g, function (m){ //lower
                return consonants[ m[0] ] + iotted[ m[2] ];
            }).replaceAll(/[bvgĝdžzjklmnprstfhcčšBVGĜDŽZJKLMNPRSTFHCČŠ](J[aeouAEOU])|(j[AEOU])/g, function (m){ //upper
                return consonants[ m[0] ] + "'" + iotted[ m[2].toUpperCase() ];
            }).replaceAll(/[bvgĝdžzjklmnprstfhcčšBVGĜDŽZJKLMNPRSTFHCČŠ]j[aeou]/g, function (m){ //lower
                return consonants[ m[0] ] + "'" + iotted[ m[2] ];
            }).replaceAll(/J[aeouAEOU]/g, function (m){ //upper
                return iotted[ m[1].toUpperCase() ];
            }).replaceAll(/j[aeou]/g, function (m){ //lower
                return iotted[ m[1] ];
            }).replaceAll(/[BVGĜDŽZJKLMNPRSTFHCČŠ]'[BVGĜDŽZJKLMNPRSTFHCČŠ]/g, function(m){ //upper
                return consonants[ m[0] ] + 'Ь' + consonants[ m[2] ];
            }).replaceAll(/\S[BVGĜDŽZJKLMNPRSTFHCČŠ]'/g, function(m){ //upper
                return (consonants[ m[0] ] || vowels[ m[0] ] || m[0]) + consonants[ m[1] ] + 'Ь';
            }).replaceAll(/[bvgĝdžzjklmnprstfhcčšBVGĜDŽZJKLMNPRSTFHCČŠ]'/g, function(m){ //lower
                return consonants[ m[0] ] + 'ь';
            }).replaceAll('šč', 'щ').replaceAll('Šč', 'Щ').replaceAll('ŠČ', 'Щ').replaceAll(/[a-zA-ZčĝšžČĜŠŽ]/g, function(m) { //everything else
                return consonants[m] || vowels[m]; 
            }).replaceAll(/¨¨/g, escaped[e++]);
            
    }
};

const latin = {
    consonants: {
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'ґ': 'ĝ',
        'д': 'd',
        'ж': 'ž',
        'з': 'z',
        'й': 'j',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'ф': 'f',
        'х': 'h',
        'ц': 'c',
        'ч': 'č',
        'ш': 'š',
        'ь': "'",
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Ґ': 'Ĝ',
        'Д': 'D',
        'Ж': 'Ž',
        'З': 'Z',
        'Й': 'J',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'Ф': 'F',
        'Х': 'H',
        'Ц': 'C',
        'Ч': 'Č',
        'Ш': 'Š',
        'Ь': "'"
    },
    vowels: {
        'а': 'a',
        'е': 'e',
        'и': 'y',
        'і': 'i',
        'о': 'o',
        'у': 'u',
        'А': 'A',
        'Е': 'E',
        'И': 'Y',
        'І': 'I',
        'О': 'O',
        'У': 'U'
    },
    deiotted: {
        'я': 'a',
        'є': 'e',
        'ї': 'i',
        'ю': 'u',
        'Я': 'A',
        'Є': 'E',
        'Ї': 'I',
        'Ю': 'U'
    },
    from: function(src){
        const consonants = this.consonants;
        const vowels = this.vowels;
        const deiotted = this.deiotted;
        return src.replaceAll(/[a-zA-ZčĝšžČĜŠŽ]+/g, function (m){ //escape some parts
                return '`' + m + '`';
            }).replaceAll(/[БВГҐДЖЗЙКЛМНПРСТФХЦЧШЩ]'[ЯЄЇЮ]/g, function (m){ //upper
                return consonants[ m[0] ] + 'J' + deiotted[ m[2] ];
            }).replaceAll(/[бвгґджзйклмнпрстфхцчшщБВГҐДЖЗЙКЛМНПРСТФХЦЧШЩ]'[яєїю]/g, function (m){ //lower
                return consonants[ m[0] ] + 'j' + deiotted[ m[2] ];
            }).replaceAll(/[БВГҐДЖЗЙКЛМНПРСТФХЦЧШЩ][ЯЄЇЮ]/g, function (m){ //consonant + screaming
                return consonants[ m[0] ] + 'I' + deiotted[ m[1] ];
            }).replaceAll(/[бвгґджзйклмнпрстфхцчшщБВГҐДЖЗЙКЛМНПРСТФХЦЧШЩ][яєїю]/g, function (m){ //consonant + non-screaming
                return consonants[ m[0] ] + 'i' + deiotted[ m[1] ];
            }).replaceAll(/[АЕИЇОУEIUA][ЯЄЇЮ]/g, function (m){ //vowel + screaming  
                return (vowels[ m[0] ] || m[0] ) + 'J' + deiotted[ m[1] ];
            }).replaceAll(/[ЯЄЇЮ][А-ЩІҐЬEIUA]/g, function (m){ //screaming + next
                return  'J' + deiotted[ m[0] ] + ( consonants[ m[1] ] || vowels [ m[1] ] || m[1] );
            }).replaceAll(/[ЯЄЇЮ]/g, function (m){ //upper
                return 'J' + deiotted[ m[0].toLowerCase() ];
            }).replaceAll(/[яєїю]/g, function (m){ //lower
                return 'j' + deiotted[ m[0] ];
            }).replaceAll(/Щ[А-ЩІҐЬEIUA]/g, 'ŠČ').replaceAll(/[А-ЩІҐЬEIUA]Щ/g, 'ŠČ').replaceAll('Щ', 'Šč').replaceAll('щ', 'šč').replaceAll(/[а-щіґьА-ЩІҐЬ]/g, function(m) {
                return consonants[m] || vowels[m]; 
            });
    }
};

/*
document.addEventListener('keydown', function(event) {
    if (event.code === 'ControlRight'){
        let activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            const selected = activeElement.value.slice(start || 0, end || 0);
            //activeElement.value = activeElement.value.slice(0, start) + ( (ctrl) ? cyrillic.from(selected): latin.from(selected) ) + activeElement.value.slice(end);
            activeElement.value = cyrillic.from(activeElement.value);
        }
    }
    else if (event.code === 'ControlLeft'){
        let activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            const selected = activeElement.value.slice(start || 0, end || 0);
            //activeElement.value = activeElement.value.slice(0, start) + ( (ctrl) ? cyrillic.from(selected): latin.from(selected) ) + activeElement.value.slice(end);
            activeElement.value = latin.from(activeElement.value);
        }
    }
   });
*/