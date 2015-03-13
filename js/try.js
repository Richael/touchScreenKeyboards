$('.qwerty').keyboard({
    position: {
        of: null, // null = attach to input/textarea; use $(sel) to attach elsewhere
        my: 'center top',
        at: 'center top',
        at2: 'center bottom' // used when "usePreview" is false
    },
    layout: 'custom',
    customLayout: {
        'default': [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p [ ] \\',
            'a s d f g h j k l ; {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '.com .org .biz',
            '{accept} {space} {cancel}',
            '{accept}{clear}'],
            'shift': [
            'A E I O U Y C',
            '` \' " ~ {sp:1} {dec}',
            '{t} {sp:1} {e} {sp:1} {b}',
            '{shift} {space}',
            '{a} {sp:1} {c} {sp:1} {s}']
    },
    usePreview: false,
    visible: function (e, keyboard, el) {
        addNav(keyboard);
    },
    // prevent entering more than one state
    change: function (e, keyboard, el) {
        var v = keyboard.$el.val();
        //if (v.length > 10) {
        //    keyboard.$el.val(v.slice(-2));
        //}
    },
    beforeClose: function (e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("button.ui-keyboard-widekey").removeClass('state-button');
        $("body").css('padding-bottom', '0px');
    }
});

.addTyping();


/*
$('.digits').keyboard({
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
    .addTyping();

$('.email').keyboard({
    layout: 'custom',
    autoAccept: 'false',
    maxLength: 10,
    customLayout: {
        'default': [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p [ ] \\',
            'a s d f g h j k l ; {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '@gmail @yahoo @hotmail @aol',
            '.com .org .biz ',
            '{accept} {space} {cancel}',
            '{accept}{clear}'
        ],
            'shift': [
                    'A E I O U Y C',
                    '` \' " ~ {sp:1} {dec}',
                    '{t} {sp:1} {e} {sp:1} {b}',
                    '{shift} {space}',
                    '{a} {sp:1} {c} {sp:1} {s}'
            ]
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
    .addTyping();  


















