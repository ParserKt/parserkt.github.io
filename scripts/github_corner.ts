const
  flagElement = (e, flag) => e==null? 0 : e.setAttribute(flag,""),
  unflagElement = (e, flag) => e==null? 0 : e.removeAttribute(flag);

const domAttrHidden = 'hidden';
const show = (e) => unflagElement(e, domAttrHidden);
const hide = (e) => flagElement(e, domAttrHidden);

const animateFadeIn = (e, anim_css) => {
  if (e.style.animation !== null) e.style.animation = null;
  e.onanimationend = () => e.classList.remove(anim_css);
  show(e);
};
const animateFadeOut = (e, anim_css) => {
  e.style.animation = "fadeout 1s"; e.style.animationIterationCount = 1;
  e.onanimationend = () => { hide(e); e.classList.add(anim_css); };
};

const registerGitHubCorner = () => {
  const
    github = document.querySelector('#github'),
    githubHideFrom = document.querySelector('#github-hided') as HTMLElement;

  const GithubPageY_Threshold = (githubHideFrom!=null? githubHideFrom.offsetTop : 400);

  const fadeInAnim = "github-animate-opacity";

  document.body.onscroll = (scroll) => {
    let newY = window.pageYOffset;
    if (newY >= GithubPageY_Threshold) {
      animateFadeOut(github, fadeInAnim);
    } else {
      animateFadeIn(github, fadeInAnim);
    }
  };

  show(github); //JavaScript enabled
};
document.addEventListener("DOMContentLoaded", registerGitHubCorner);
