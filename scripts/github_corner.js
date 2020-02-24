var flagElement = function (e, flag) { return e == null ? 0 : e.setAttribute(flag, ""); }, unflagElement = function (e, flag) { return e == null ? 0 : e.removeAttribute(flag); };
var domAttrHidden = 'hidden';
var show = function (e) { return unflagElement(e, domAttrHidden); };
var hide = function (e) { return flagElement(e, domAttrHidden); };
var animateFadeIn = function (e, anim_css) {
    if (e.style.animation !== null)
        e.style.animation = null;
    e.onanimationend = function () { return e.classList.remove(anim_css); };
    show(e);
};
var animateFadeOut = function (e, anim_css) {
    e.style.animation = "fadeout 1s";
    e.style.animationIterationCount = 1;
    e.onanimationend = function () { hide(e); e.classList.add(anim_css); };
};
var registerGitHubCorner = function () {
    var github = document.querySelector('#github'), githubHideFrom = document.querySelector('#github-hided');
    var GithubPageY_Threshold = (githubHideFrom != null ? githubHideFrom.offsetTop : 400);
    var fadeInAnim = "github-animate-opacity";
    document.body.onscroll = function (scroll) {
        var newY = window.pageYOffset;
        if (newY >= GithubPageY_Threshold) {
            animateFadeOut(github, fadeInAnim);
        }
        else {
            animateFadeIn(github, fadeInAnim);
        }
    };
    show(github); //JavaScript enabled
};
document.addEventListener("DOMContentLoaded", registerGitHubCorner);
