var pageTitle = "::::::::::Mayhem::::::::::";
function animateTitle() {
    pageTitle = pageTitle.substring(1, pageTitle.length) + pageTitle.substring(0, 1);
    document.title = pageTitle;
    setTimeout("animateTitle()", 300);
}

$(document).ready(function() {
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        iconSource: "fontAwesome",
        soundPath: "./src/sounds/"
    });

    Lobibox.base.DEFAULTS = $.extend({}, Lobibox.base.DEFAULTS, {
        iconSource: "fontAwesome"
    });

    animateTitle();

    $("video#bgvid").prop("volume", 0);
    $("audio#bgmusic").prop("volume", 0.3);

    $("video#bgvid").animate({
        opacity: 0.3
    }, 3000);

    $(".mayhem").animate({
        opacity: 1
    }, 1000, function() {
        $(".mayhemSmall").animate({
            opacity: 1
        }, 500, function() {
            $(".links").animate({
                opacity: 1
            }, 500);
        });
    });

    function loop() {
        $(".mayhem").animate({
            color: "#c6007d"
        }, 1200, function() {
            $(".mayhem").animate({
                color: "#7000c6"
            }, 1200, function() {
                $(".mayhem").animate({
                    color: "#009ec6"
                }, 1200, function() {
                    $(".mayhem").animate({
                        color: "#00c67d"
                    }, 1200, function() {
                        $(".mayhem").animate({
                            color: "#02ffc0"
                        }, 1200, function() {
                            $(".mayhem").animate({
                                color: "#a8c600"
                            }, 1200, function() {
                                $(".mayhem").animate({
                                    color: "#d9ff02"
                                }, 1200, function() {
                                    loop();
                                    return true;
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    loop();
    
    $("a").hover(function() {
        $(this).stop().animate({
            color: "#00fff2"
        }, 300);
    });
    
    $("a").mouseout(function() {
        $(this).stop().animate({
            color: "#e5ff00"
        }, 300);
    });

    $("#downloadContainer").click(function() {
        var downloadList = {
            "Mutiny Auto Config": {link: "./olstore.con", blank: false},
            "Aimware Config Pack": {link: "./aimware_configs.zip", blank: false},
            "Zeus Configs": {link: "https://paste.plsrape.me/user.php?user=mayhem", blank: true}
        };

        var downloadLinks = "";
        for(var prop in downloadList) {
            if(downloadList[prop]["blank"]) {
                downloadLinks += "<a href=\"" + downloadList[prop]["link"] + "\" id=\"download\" target=\"_blank\">" + prop + "</a><br />";
            } else {
                downloadLinks += "<a href=\"" + downloadList[prop]["link"] + "\" id=\"download\">" + prop + "</a><br />";
            }
        }
    
        var currentBox = Lobibox.alert("info", {
            title: "Choose a config",
            msg: downloadLinks,
            buttons: {
                custom: {
                    closeOnClick: true,
                    text: "Close"
                }
            }
        });
        
        $("a#download").click(function() {
            currentBox.destroy();
            var clickedLink = $(this);
            Lobibox.notify("success", {
                msg: "Thanks for downloading \"" + clickedLink.text() + "\"!",
                delay: 10000
            });
        });
    });
});