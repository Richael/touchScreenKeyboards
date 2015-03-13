$('.fullName').keyboard({
    layout: 'custom',
    autoAccept: 'false',
    maxLength: 10,
    customLayout: {
        'default': [
            '{tab} q w e r t y u i o p [ ] \\',
            'a s d f g h j k l ; {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '{accept} {space} {cancel} {bksp}',
            '{accept}{clear}']
    },
    usePreview: false,
    visible: function (e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function (e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});

$('.pNumber').keyboard({
    layout: 'custom',
    autoAccept: 'false',
    maxLength: 10,
    customLayout: {
        'default': [
            '7 8 9',
            '4 5 6',
            '1 2 3',
            '0 {bksp}',
            '{accept}']
    },
    usePreview: false,
    visible: function (e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function (e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});

$('.email').keyboard({
    layout: 'custom',
    autoAccept: 'false',
    maxLength: 10,
    customLayout: {
        'default': [
            '` 1 2 3 4 5 6 7 8 9 0 - = + \\ ',
            '{tab} q w e r t y u i o p [ ] {bksp}',
            'a s d f g h j k l ; {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '@gmail @hotmail @yahoo @comcast',
            '{accept} .com {space} {cancel} {clear}']
    },
    usePreview: false,
    visible: function (e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function (e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});
