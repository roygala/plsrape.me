var pageTitle = "::::::::::Mayhem::::::::::";
function animateTitle() {
    pageTitle = pageTitle.substring(1, pageTitle.length) + pageTitle.substring(0, 1);
    document.title = pageTitle;
    setTimeout("animateTitle()", 300);
}

$(document).ready(function() {
    animateTitle();

    var json = $.getJSON("./src/configs/config.json", function(data) {
        return data;
    });
    var config = json["links"];
    console.log(config);

    var downloadList = {
        "Mutiny Auto Config": {link: "./cheat_configs/olstore.con", blank: false, number: 0},
        "Aimware NoSpread": {link: "./cheat_configs/aimware_nospread.zip", blank: false, number: 1},
        "Aimware Spread": {link: "./cheat_configs/aimware_spread.zip", blank: false, number: 2},
        "Zeus Configs": {link: "https://paste.plsrape.me/user.php?user=mayhem", blank: true, number: 3}
    };

    var linkList = {
        "<span class=\"pink\">$</span>STEAM<span class=\"pink\">[<span style=\"color: #7cff02;\">?</span>];</span>": {link: "#", blank: false, cssID: "steamContainer"},
        "<span class=\"callFunction\">YOUTUBE</span>": {link: "https://youtube.com/user/roygala", blank: true},
        "<span class=\"pink\">$</span>CONFIG<span class=\"pink\">[<span style=\"color: #7cff02;\">?</span>];</span>": {link: "#", blank: false, cssID: "downloadContainer"},
        "<span class=\"callFunction\">HVH_SERVER</span>": {link: "steam://connect/5.196.142.77:27015", blank: false, lastLink: true}
    };

    var steamProfiles = {
        "MAIN ACCOUNT": {link: "http://steamcommunity.com/profiles/76561198236628206", number: 0},
        "WINGMAN": {link: "http://steamcommunity.com/profiles/76561198814050153", number: 1}
    };

    var downloadLinks = "";
    for(var prop in downloadList) {
        if(downloadList[prop]["blank"]) {
            downloadLinks += "<br /><a href=\"" + downloadList[prop]["link"] + "\" id=\"listItem\" target=\"_blank\"><span class=\"selectorLeft\"></span><span style=\"color:#7cff02;\">" + downloadList[prop]["number"] + "</span><span class=\"pink\">=</span>" + prop + "<span class=\"selectorRight\"></span></a>";
        } else {
            downloadLinks += "<br /><a href=\"" + downloadList[prop]["link"] + "\" id=\"listItem\"><span class=\"selectorLeft\"></span><span style=\"color:#7cff02;\">" + downloadList[prop]["number"] + "</span><span class=\"pink\">=</span>" + prop + "<span class=\"selectorRight\"></span></a>";
        }
    }

    var linkListHtml = "<span class=\"selectorLeft\">//</span> ";
    for(var prop in linkList) {
        if(linkList[prop]["blank"] && linkList[prop]["cssID"]) {
            if(linkList[prop]["lastLink"]) {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" target=\"_blank\" id=\"" + linkList[prop]["cssID"] + "\">" + prop + "</a> <span class=\"selectorRight\">\\\\</span>";
            } else {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" target=\"_blank\" id=\"" + linkList[prop]["cssID"] + "\">" + prop + "</a> <span class=\"dot\">•</span> ";
            }
        } else if(linkList[prop]["blank"] && !linkList[prop]["cssID"]) {
            if(linkList[prop]["lastLink"]) {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" target=\"_blank\">" + prop + "</a> <span class=\"selectorRight\">\\\\</span>";
            } else {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" target=\"_blank\">" + prop + "</a> <span class=\"dot\">•</span> ";
            }
        } else if(!linkList[prop]["blank"] && !linkList[prop]["cssID"]) {
            if(linkList[prop]["lastLink"]) {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\">" + prop + "</a> <span class=\"selectorRight\">\\\\</span>";
            } else {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\">" + prop + "</a> <span class=\"dot\">•</span> ";
            }
        } else if(!linkList[prop]["blank"] && linkList[prop]["cssID"]) {
            if(linkList[prop]["lastLink"]) {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" id=\"" + linkList[prop]["cssID"] + "\">" + prop + "</a> <span class=\"selectorRight\">\\\\</span>";
            } else {
                linkListHtml += "<a href=\"" + linkList[prop]["link"] + "\" id=\"" + linkList[prop]["cssID"] + "\">" + prop + "</a> <span class=\"dot\">•</span> ";
            }
        }
    }

    var steamLinks = "";
    for(var prop in steamProfiles) {
        steamLinks += "<br /><a href=\"" + steamProfiles[prop]["link"] + "\" id=\"listItem\" target=\"_blank\"><span class=\"selectorLeft\"></span><span style=\"color:#7cff02;\">" + steamProfiles[prop]["number"] + "</span><span class=\"pink\">=</span>" + prop + "<span class=\"selectorRight\"></span></a>";
    }
    
    $(".links2").html(linkListHtml);
    $(".links3").html("<br /><span class=\"config\"><span class=\"selectorLeft\">//</span> <span style=\"color: #f700ff;\">SELECT CONFIG</span> <span class=\"selectorRight\">\\\\</span></span>" + downloadLinks + "<br /><span id=\"backLink\"><span class=\"selectorLeft\"><<</span> <a href=\"#\" class=\"backLink\">BACK</a> <span class=\"selectorRight\">>></span></span>").hide();
    $(".links4").html("<br /><span class=\"steam\"><span class=\"selectorLeft\">//</span> <span style=\"color: #f700ff;\">WHICH PROFILE?</span> <span class=\"selectorRight\">\\\\</span></span>" + steamLinks + "<br /><span id=\"backLink2\"><span class=\"selectorLeft\"><<</span> <a href=\"#\" class=\"backLink2\">BACK</a> <span class=\"selectorRight\">>></span></span>").hide();

    $("a#listItem").hover(function() {
        $(this).find(".selectorRight").stop().animate({
            opacity: 1,
            left: 0
        }, 350);
        $(this).find(".selectorLeft").stop().animate({
            opacity: 1,
            right: 0
        }, 350);
    }, function() {
        $(this).find(".selectorRight").stop().animate({
            opacity: 0,
            left: -10
        }, 350);
        $(this).find(".selectorLeft").stop().animate({
            opacity: 0,
            right: -10
        }, 350);
    });

    $("#downloadContainer").click(function() {
        $(".links2").stop().fadeOut(350, function() {
            $(".links3").stop().fadeIn(350, function() {
                $(".config .selectorLeft").stop().animate({
                    opacity: 1,
                    right: 0
                });
                $(".config .selectorRight").stop().animate({
                    opacity: 1,
                    left: 0
                });
                $("#backLink .selectorLeft").stop().animate({
                    opacity: 1,
                    right: 0
                });
                $("#backLink .selectorRight").stop().animate({
                    opacity: 1,
                    left: 0
                });
            });
        });
    });

    $("#steamContainer").click(function() {
        $(".links2").stop().fadeOut(350, function() {
            $(".links4").stop().fadeIn(350, function() {
                $(".steam .selectorLeft").stop().animate({
                    opacity: 1,
                    right: 0
                });
                $(".steam .selectorRight").stop().animate({
                    opacity: 1,
                    left: 0
                });
                $("#backLink2 .selectorLeft").stop().animate({
                    opacity: 1,
                    right: 0
                });
                $("#backLink2 .selectorRight").stop().animate({
                    opacity: 1,
                    left: 0
                });
            });
        });
    });

    $(".backLink").click(function() {
        $(".config .selectorLeft").stop().animate({
            opacity: 0,
            right: -10
        }, 400);
        $(".config .selectorRight").stop().animate({
            opacity: 0,
            left: -10
        }, 400);
        $("#backLink .selectorLeft").stop().animate({
            opacity: 0,
            right: -10
        }, 400);
        $("#backLink .selectorRight").stop().animate({
            opacity: 0,
            left: -10
        }, 400, function() {
            $(".links3").stop().fadeOut(350, function() {
                $(".links2").stop().fadeIn(350);
            });
        });
    });

    $(".backLink2").click(function() {
        $(".steam .selectorLeft").stop().animate({
            opacity: 0,
            right: -10
        }, 400);
        $(".steam .selectorRight").stop().animate({
            opacity: 0,
            left: -10
        }, 400);
        $("#backLink2 .selectorLeft").stop().animate({
            opacity: 0,
            right: -10
        }, 400);
        $("#backLink2 .selectorRight").stop().animate({
            opacity: 0,
            left: -10
        }, 400, function() {
            $(".links4").stop().fadeOut(350, function() {
                $(".links2").stop().fadeIn(350);
            });
        });
    });

    $("#loading").animate({
        opacity: 0
    }, 1000, function() {
        $("#loading").remove();
        $(".mayhem").animate({
            opacity: 1
        }, 700, function() {
            $(".mayhemSmall").animate({
                opacity: 1
            }, 300, function() {
                $(".links").animate({
                    opacity: 1
                }, 500, function() {
                    $(".links").find(".selectorRight").animate({
                        opacity: 1,
                        left: 0
                    }, 400);
                    $(".links").find(".selectorLeft").animate({
                        opacity: 1,
                        right: 0
                    }, 400);
                });
                $(".links2").animate({
                    opacity: 1
                }, 500, function() {
                    $(".links2").find(".selectorRight").animate({
                        opacity: 1,
                        left: 0
                    }, 400);
                    $(".links2").find(".selectorLeft").animate({
                        opacity: 1,
                        right: 0
                    }, 400);
                });
            });
        });
    });

    $("video#bgvid").prop("volume", 0);
    $("audio#bgmusic").prop("volume", 0.3);

    $("video#bgvid").animate({
        opacity: 0.3
    }, 3000);

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
    }, function() {
        $(this).stop().animate({
            color: "#e5ff00"
        }, 300);
    });
});