<template lang="html">
    <div class="new-footer">
        <div class="footer-legal">
            <ul>
                <li class="footer-item footer-item-mama">
                    <div class="footer-mama footer-text"></div>
                    <div class="status-arrow"></div>
                    <div class="bubble-container">
                        <div class="bubble bubble-mama">
                            <div class="bubble-content">
                                <div class="item"><a href="http://www.nick.com" target="_blank">nick</a></div>
                                <div class="item"><a href="http://www.teennick.com" target="_blank">teennick</a></div>
                                <div class="item"><a href="http://www.nickjr.com" target="_blank">nick jr.</a></div>
                                <div class="item"><a href="http://www.nickatnite.com" target="_blank">nick at nite</a></div>
                            </div>
                            <div class="bubble-arrow"></div>
                        </div>
                    </div>
                </li>
                <li class="footer-item footer-item-privacy">
                    <div class="footer-text">PRIVACY</div>
                    <div class="status-arrow"></div>
                    <div class="bubble-container">
                        <div class="bubble bubble-privacy">
                            <div class="bubble-content">
                                <div class="item"><a id="Privacy Policy (updated 4/4/2017)" href="http://www.nick.com/legal/nickelodeon-privacy-policy/" target="_blank">Privacy Policy (updated 4/4/2017)</a></div>
                                <div class="item"><a id="Terms of Use" href="http://www.nick.com/club/parents-terms-of-use.html" target="_blank">Terms of Use</a></div>
                            </div>
                            <div class="bubble-arrow"></div>
                        </div>
                    </div>
                </li>
                <li class="footer-item footer-item-more">
                    <div class="footer-text">MORE</div>
                    <div class="status-arrow"></div>
                    <div class="bubble-container">
                        <div class="bubble bubble-more">
                            <div class="bubble-content">
                                <ul class="more-items-left">
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/legal/nickelodeon-privacy-policy/" target="_blank">Privacy Policy (updated 4/4/2017)</a>
                                        </div>
                                    </li>
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/info/report-a-concern.html" target="_blank">Report A Concern</a>
                                        </div>
                                    </li>
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/club/parents-terms-of-use.html" target="_blank">Terms of Use</a>
                                        </div>
                                    </li>
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/shows/tvschedule/" target="_blank">TV Schedule</a>
                                        </div>
                                    </li>
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/club/parents-online-safety-guide.html" target="_blank">Safety</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="more-items-right">
                                    <li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://exodus.nick.com/site/signup" target="_blank">Newsletter</a>
                                        </div>
                                    </li><li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://media.viacom.com/accessibility/" target="_blank">Closed Captioning Contact</a>
                                        </div>
                                    </li><li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/sitemap" target="_blank">Sitemap</a>
                                        </div>
                                    </li><li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://www.nick.com/info/copyright.html" target="_blank">Copyright Compliance</a>
                                        </div>
                                    </li><li class="bubble-more-item">
                                        <div data-index="" class="item">
                                            <a href="http://srp.viacom.com/sitefaq.html" target="_blank">Ad Choices</a>
                                        </div>
                                   </li>
                                </ul>
                                <div class="icon-nick-kid-and-teens"></div>
                                <div class="copyright-info">
                                    &copy; 2017 Viacom International Inc. All Rights Reserved. Nick and all related titles, logos and characters are trademarks of Viacom International Inc.
                                </div>
                            </div>
                            <div class="bubble-arrow"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var footerItemMamaShowing = false;
        var footerItemPrivacyShowing = false;
        var footerItemMoreShowing = false;

        [].forEach.call(document.querySelectorAll(".footer-item-mama"), function(el) {
            el.addEventListener("click", function() {
                if (footerItemMamaShowing == true) {
                    footerItemMamaShowing = false;

                    [].forEach.call( document.querySelectorAll('.footer-item-mama .bubble-container'), function(el) {
                      el.style.display = 'none';
                    });
                    [].forEach.call( document.querySelectorAll('.footer-item-mama .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });
                } else {
                    footerItemMamaShowing = true;
                    footerItemPrivacyShowing = false;
                    footerItemMoreShowing = false;

                    [].forEach.call( document.querySelectorAll('.bubble-container'), function(el) {
                      el.style.display = 'none';
                    });
                    [].forEach.call( document.querySelectorAll('.status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });

                    [].forEach.call( document.querySelectorAll('.footer-item-mama .bubble-container'), function(el) {
                      el.style.display = 'block';
                    });
                    [].forEach.call( document.querySelectorAll('.footer-item-mama .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -64px';
                    });
                }
            });
        });


        [].forEach.call(document.querySelectorAll(".footer-item-privacy"), function(el) {
            el.addEventListener("click", function() {
                if (footerItemPrivacyShowing == true) {
                    footerItemPrivacyShowing = false;

                    [].forEach.call( document.querySelectorAll('.footer-item-privacy .bubble-container'), function(el) {
                      el.style.display = 'none';
                    });
                    [].forEach.call( document.querySelectorAll('.footer-item-privacy .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });
                } else {
                    footerItemPrivacyShowing = true;
                    footerItemMamaShowing = false;
                    footerItemMoreShowing = false;

                    [].forEach.call( document.querySelectorAll('.bubble-container'), function(el) {
                      el.style.display = 'none';
                    });
                    [].forEach.call( document.querySelectorAll('.status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });

                    [].forEach.call( document.querySelectorAll('.footer-item-privacy .bubble-container'), function(el) {
                      el.style.display = 'block';
                    });
                    [].forEach.call( document.querySelectorAll('.footer-item-privacy .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -64px';
                    });
                }
            });
        });

        [].forEach.call(document.querySelectorAll(".footer-item-more"), function(el) {
            el.addEventListener("click", function() {
                if (footerItemMoreShowing == true) {
                    footerItemMoreShowing = false;

                    [].forEach.call( document.querySelectorAll('.footer-item-more .bubble-container'), function(el) {
                      el.style.display = 'none';
                    });

                    [].forEach.call( document.querySelectorAll('.footer-item-more .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });
                } else {
                    footerItemMoreShowing = true;
                    footerItemMamaShowing = false;
                    footerItemPrivacyShowing = false;

                    [].forEach.call( document.querySelectorAll('.bubble-container'), function(el) {
                      el.style.display = 'none';
                    });
                    [].forEach.call( document.querySelectorAll('.status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -56px';
                    });

                    [].forEach.call( document.querySelectorAll('.footer-item-more .bubble-container'), function(el) {
                      el.style.display = 'block';
                    });
                    [].forEach.call( document.querySelectorAll('.footer-item-more .status-arrow'), function(el) {
                      el.style.backgroundPosition = '-57px -64px';
                    });
                }
            });
        });
    },
};
</script>

<style lang="scss">
.new-footer {
        background-color: black;
        bottom: 0;
        left: 0;
        // min-width: 994px;
        min-width: 0;
        position: absolute;
        width: 100%;
    }
    .new-footer div.footer-legal {
        background-color: transparent;
        margin: 0;
        padding: 0 31px 0 0;
        position: static;
        text-align: right;
        width: auto;
    }
    .footer-legal ul {
        margin: 10px 0 0;
        font-size: 16px;
}
.new-footer div.footer-legal li {
    border: medium none;
    float: none;
}
li.footer-item {
    display: inline-block;
    height: 15px;
    margin-right: 4px;
    padding-left: 8px;
    position: relative;
}
li.footer-item .footer-text.footer-mama {
    background: url("http://nick.mtvnimages.com/nick/nick-web/img/footer-sprite.png") no-repeat scroll -9px -39px rgba(0, 0, 0, 0);
    height: 16px;
    margin-top: -3px;
    width: 101px;
}
li.footer-item .footer-text {
    color: #fff;
    cursor: pointer;
    float: left;
    font-family: Arial;
    font-size: 10px;
    font-weight: 700;
    margin-top: 2px;
}
li.footer-item .status-arrow {
    background: url("http://nick.mtvnimages.com/nick/nick-web/img/footer-sprite.png") no-repeat scroll -57px -56px rgba(0, 0, 0, 0);
    float: right;
    height: 7px;
    margin-left: 10px;
    margin-top: 5px;
    width: 9px;
}
li.footer-item .bubble-container {
    display: none;
    position: relative;
    z-index: 99;
}
li.footer-item .bubble-container .bubble {
    background-color: #fff;
    border-radius: 8px;
    bottom: 30px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.3);
    min-width: 255px;
    position: absolute;
    right: -20px;
    z-index: 2;
}
li.footer-item .bubble-container .bubble .bubble-content {
    padding: 9px 15px 15px;
}
li.footer-item .bubble-container .bubble .bubble-content .item {
    box-sizing: border-box;
    clear: both;
    float: left;
    height: 25px;
    line-height: 10px;
    margin-bottom: 5px;
    padding-right: 20px;
    text-align: left;
    text-transform: uppercase;
}
li.footer-item .bubble-container .bubble .bubble-content .item a {
    color: #333;
    font-family: Arial;
    font-size: 11px;
}
li.footer-item .bubble-container .bubble .bubble-content .item a:hover {
    color: #ff6700;
    text-decoration: none;
}
.new-footer div.footer-legal a {
    border: medium none;
    font-weight: normal;
}
li.footer-item a {
    text-decoration: none;
}
li.footer-item .bubble-container .bubble .bubble-arrow {
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 8px 10px 0;
    bottom: -7px;
    height: 0;
    margin: 0 auto;
    position: absolute;
    right: 16px;
    width: 0;
}
li.footer-item .bubble-container .bubble.bubble-privacy {
    min-width: 264px;
}
li.footer-item .bubble-container .bubble.bubble-more {
    min-width: 518px;
}
li.footer-item .bubble-container .bubble .bubble-content ul {
    display: inline-block;
    float: left;
    list-style-type: none;
    margin: 0;
    max-width: 50%;
    padding: 0 0 0 10px;
}
.new-footer div.footer-legal li {
    border: medium none;
    float: none;
}
li.footer-item .bubble-container .bubble .bubble-content .icon-nick-kid-and-teens {
    background: url("http://nick.mtvnimages.com/nick/nick-web/img/footer-sprite.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    clear: left;
    float: left;
    height: 39px;
    width: 120px;
}
li.footer-item .bubble-container .bubble .bubble-content .copyright-info {
    float: right;
    font-family: Arial;
    font-size: 9px;
    padding-bottom: 5px;
    width: 220px;
}
</style>
