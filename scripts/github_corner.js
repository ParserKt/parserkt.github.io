var flagElement = function (e, flag) { var _a, _b; return _b = (_a = e) === null || _a === void 0 ? void 0 : _a.setAttribute(flag, ""), (_b !== null && _b !== void 0 ? _b : 0); }, unflagElement = function (e, flag) { var _a, _b; return _b = (_a = e) === null || _a === void 0 ? void 0 : _a.removeAttribute(flag), (_b !== null && _b !== void 0 ? _b : 0); };
var show = function (e) { e.hidden = false; };
var hide = function (e) { e.hidden = true; };
var animateFadeIn = function (e, anim_css) {
    if (!e.hidden)
        return;
    e.style.animation = null;
    e.onanimationend = function () { return e.classList.remove(anim_css); };
    show(e); //with-fadeIn
};
var animateFadeOut = function (e, anim_css) {
    if (e.hidden)
        return;
    e.style.animation = "fade-out 1s";
    e.style.animationIterationCount = 1;
    e.onanimationend = function () { hide(e); e.classList.add(anim_css); };
};
var registerGitHubCorner = function () {
    var _a, _b;
    var github = document.querySelector("#github"), githubHideFrom = document.querySelector("#github-hided");
    var GithubPageY_Threshold = (_b = (_a = githubHideFrom) === null || _a === void 0 ? void 0 : _a.offsetTop, (_b !== null && _b !== void 0 ? _b : 400));
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
