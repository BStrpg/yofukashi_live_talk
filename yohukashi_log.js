// 要素
const mc1_kagen = new Audio('./music/下弦の月.mp3');
const mc2_tsukiyo = new Audio('./music/プレギエーラの月夜に.mp3');
const mc3_inori = new Audio('./music/祈りのヴィオレット.mp3');
const mc4_hisui = new Audio('./music/翡翠のカヴィリエーレ.mp3');
const mc5_uruwashi = new Audio('./music/麗しきセデュース.mp3');
const mc6_mikkyou = new Audio('./music/密教の首飾り.mp3');
const mc7_zaika = new Audio('./music/罪過に契約の血を.mp3');
const mc8_gessyoku = new Audio('./music/月蝕のヴァニタス.mp3');
const mc9_tugunai = new Audio('./music/EUPHORIA　償いのレクイエム.mp3');
var music = mc1_kagen;
var play = document.getElementById('play1');

// 再生・停止
function maya_music() {
    if (!music.paused) {
        play.innerHTML = '<i class="fa-solid fa-music fa-sm"></i>';
        music.pause();
    } else {
        play.innerHTML = '<i class="fa-solid fa-pause fa-sm"></i>';
        music.play();
    }
};
// 再生ボタン
function play1() {
    maya_music();
    if (play !== document.getElementById('play1')) {
        play = document.getElementById('play1');
        music = mc1_kagen;
        maya_music();
    }
};

function play2() {
    maya_music();
    if (play !== document.getElementById('play2')) {
        play = document.getElementById('play2');
        music = mc2_tsukiyo;
        maya_music();
    }
};

function play3() {
    maya_music();
    if (play !== document.getElementById('play3')) {
        play = document.getElementById('play3');
        music = mc3_inori;
        maya_music();
    }
};

function play4() {
    maya_music();
    if (play !== document.getElementById('play4')) {
        play = document.getElementById('play4');
        music = mc4_hisui
        maya_music();
    }
};

function play5() {
    maya_music();
    if (play !== document.getElementById('play5')) {
        play = document.getElementById('play5');
        music = mc5_uruwashi;
        maya_music();
    }
};

function play6() {
    maya_music();
    if (play !== document.getElementById('play6')) {
        play = document.getElementById('play6');
        music = mc6_mikkyou;
        maya_music();
    }
};
function play7() {
    maya_music();
    if (play !== document.getElementById('play7')) {
        play = document.getElementById('play7');
        music = mc7_zaika;
        maya_music();
    }
};

function play8() {
    maya_music();
    if (play !== document.getElementById('play8')) {
        play = document.getElementById('play8');
        music = mc8_gessyoku;
        maya_music();
    }
};

function play9() {
    maya_music();
    if (play !== document.getElementById('play9')) {
        play = document.getElementById('play9');
        music = mc9_tugunai;
        maya_music();
    }
};


// スクロールすると表示される
$windowWidth = window.innerWidth;
$breakPointA = 768;

isMobileSize = ($windowWidth < $breakPointA);
isPcSize = ($windowWidth > $breakPointA);


if (isPcSize) {
    //PCの場合

    //visibility:byousha
    $(function () {
        $(window).scroll(function () {
            $(".byousha").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).addClass('LtoR-early');
                }
            });
        });
    });

    //visibility:left
    $(function () {
        $(window).scroll(function () {
            $(".left").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    //visibility:right
    $(function () {
        $(window).scroll(function () {
            $(".right").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('RtoL-delay');
                    $(this).children('p').addClass('RtoL');
                }
            });
        });
    });


    function opacityON() {
        $(".log div").css({ opacity: "0" });
        var end = $(window).height();
        var count = 0;

        $(".log div").each(function () {
            var position = $(this).offset().top;
            if (position <= end) {
                count++
            }
        });
        for (i = 0; i <= count - 2; i++) {
            var classname = $('.log div').eq(i).attr('class');
            if (classname.indexOf('byousha') !== -1) {
                $('.log div').eq(i).addClass('LtoR-early');
            }
            else {
                $('.log div').eq(i).css({ opacity: "1" });
                if (classname.indexOf('left') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else if (classname.indexOf('right') !== -1) {
                    $('.log div').eq(i).children('span').addClass('RtoL-delay');
                    $('.log div').eq(i).children('p').addClass('RtoL');
                }
                else {
                    $('.log div').eq(i).css({ 'opacity': '1' });
                }
            }
        }
    }
    opacityON();

}

else if (isMobileSize) {
    //スマホ用

    //visibility:byousha
    $(function () {
        $(window).scroll(function () {
            $(".byousha").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).addClass('LtoR-early');
                }
            });
        });
    });


    //visibility:left
    $(function () {
        $(window).scroll(function () {
            $(".left").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    //visibility:right
    $(function () {
        $(window).scroll(function () {
            $(".right").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    function opacityON() {
        $(".log div").css({ opacity: "0" });
        var end = $(window).height();
        var count = 0;

        $(".log div").each(function () {
            var position = $(this).offset().top;
            if (position <= end) {
                count++
            }
        });
        for (i = 0; i <= count - 2; i++) {
            var classname = $('.log div').eq(i).attr('class');
            if (classname.indexOf('byousha') !== -1) {
                $('.log div').eq(i).addClass('LtoR-early');
            }
            else {
                $('.log div').eq(i).css({ opacity: "1" });
                if (classname.indexOf('left') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else if (classname.indexOf('right') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else {
                    $('.log div').eq(i).css({ 'opacity': '1' });
                }
            }
        }
    }
    opacityON();

};
