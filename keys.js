define(function () {
    var isMac = navigator.platform.toLowerCase().indexOf('mac') >= 0;
    var separator = ','; // TODO:should return actual separator, based on keyboard language
    var decimal = '.'; // TODO:should return actual decimal, based on keyboard language

    function processKeyNumber(e) {
        var key = e.keyCode || e.which;

        var keyMap = {
            3: 'Cancel',
            6: 'Help',
            8: 'Backspace',
            9: 'Tab',
            12: isMac ? 'Clear' : '5',
            13: 'Enter',
            14: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            21: 'KanaMode/HangulMode', // TODO: Find a way if keyboard is japanese or korean
            22: 'Eisu',
            23: 'JunjaMode',
            24: 'FinalMode',
            25: 'KanjiMode/HanjaMode', // TODO: Find a way if keyboard is japanese or korean
            27: 'Escape',
            28: 'Convert',
            29: 'NonConvert',
            30: 'Accept',
            31: 'ModeChange',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'LeftArrow',
            38: 'UpArrow',
            39: 'RightArrow',
            40: 'DownArrow',
            41: 'Select',
            42: 'Print',
            43: 'Execute',
            44: 'PrintScreen',
            45: 'Insert',
            46: 'Delete',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            58: ':',
            59: ';',
            60: '<',
            61: '=',
            62: '>',
            63: '?',
            64: '@',
            65: 'a',
            66: 'b',
            67: 'c',
            68: 'd',
            69: 'e',
            70: 'f',
            71: 'g',
            72: 'h',
            73: 'i',
            74: 'j',
            75: 'k',
            76: 'l',
            77: 'm',
            78: 'n',
            79: 'o',
            80: 'p',
            81: 'q',
            82: 'r',
            83: 's',
            84: 't',
            85: 'u',
            86: 'v',
            87: 'w',
            88: 'x',
            89: 'y',
            90: 'z',
            91: 'Meta',
            93: 'ContextMenu',
            95: 'Sleep',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            106: '*',
            107: '+',
            108: separator,
            109: '-',
            110: decimal,
            111: '/',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            124: 'F13',
            125: 'F14',
            126: 'F15',
            127: 'F16',
            128: 'F17',
            129: 'F18',
            130: 'F19',
            131: 'F20',
            132: 'F21',
            133: 'F22',
            134: 'F23',
            135: 'F24',
            144: 'NumLock',
            145: 'ScrollLock',
            160: '^',
            161: '!',
            162: '"',
            163: '#',
            164: '$',
            165: '%',
            166: '&',
            167: '_',
            168: '(',
            169: ')',
            170: '*',
            171: '+',
            172: '|',
            173: '-',
            174: '{',
            175: '}',
            176: '~',
            181: 'AudioVolumeMute',
            182: 'AudioVolumeDown',
            183: 'AudioVolumeUp',
            186: ';', // TODO: Q on Greek, " on Japanese (JIS)
            187: '=', // TODO: ; on Greek, - (with Shift) on Japanese (JIS)
            188: ',',
            189: '-', // TODO: Also has some edge cases for mac
            190: '.',
            191: '/',
            192: '`',
            194: separator,
            219: '[', // TODO: ] on Japanese
            220: '\\',
            221: ']', // TODO: [ on Japanese
            222: '\'',
            224: 'Meta',
            225: 'AltGraph',
            251: 'ZoomToggle',
            254: 'Clear'
        };

        return keyMap[key] || 'Unidentified'; // TODO: Shift combinations are not working yet
    }

    function normalizeKeyString(e) {
        var key = e.key || e.keyIdentifier;

        switch (key) {
            case 'Unidentified':
            case '':
                return processKeyNumber(e);
            case 'Esc':
                return 'Escape';
            case 'Spacebar':
            case '\u00A0':
                return ' ';
            case 'Left':
            case 'Up':
            case 'Right':
            case 'Down':
                return 'Arrow' + key;
            case 'Del':
                return 'Delete';
            case 'Win':
            case 'OS':
                return 'Meta';
            case 'Apps':
            case 'Menu':
                return 'ContextMenu';
            case 'Multiply':
                return '*';
            case 'Add':
                return '+';
            case 'Separator':
                return separator;
            case 'Subtract':
                return '-';
            case 'Decimal':
                return decimal; // TODO:should return actual decimal, based on language
            case 'Divide':
                return '00F7';
            case 'Scroll':
                return 'ScrollLock';
            case 'VolumeMute':
            case 'VolumeDown':
            case 'VolumeUp':
                return 'Audio' + key;
            case 'MediaNextTrack':
                return 'MediaTrackNext';
            case 'MediaPreviousTrack':
                return 'MediaTrackPrevious';
            case 'FastFwd':
                return 'MediaFastForward';
            case 'SelectMedia':
            case 'MediaSelect':
                return 'LaunchMediaPlayer';
            case 'LaunchCalculator':
                return 'LaunchApplication1';
            case 'LaunchMyComputer':
                return 'LaunchApplication2';
            case 'Zoom':
                return 'ZoomToggle';
            case 'Nonconvert':
                return 'NonConvert';
        }

        return key;
    }

    return function (e) {
        if (typeof e.key !== 'undefined' || typeof e.keyIdentifier !== 'undefined') {
            return normalizeKeyString(e);
        }

        return processKeyNumber(e);
    };
});