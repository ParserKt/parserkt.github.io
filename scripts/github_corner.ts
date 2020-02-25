const
  flagElement = (e, flag) => e?.setAttribute(flag,"") ?? 0,
  unflagElement = (e, flag) => e?.removeAttribute(flag) ?? 0;

const show = (e) => { e.hidden = false };
const hide = (e) => { e.hidden = true };

const animateFadeIn = (e, anim_css) => {
  if (!e.hidden) return;
  e.style.animation = null;
  e.onanimationend = () => e.classList.remove(anim_css);
  show(e); //with-fadeIn
};
const animateFadeOut = (e, anim_css) => {
  if (e.hidden) return;
  e.style.animation = "fade-out 1s"; e.style.animationIterationCount = 1;
  e.onanimationend = () => { hide(e); e.classList.add(anim_css); };
};

const registerGitHubCorner = () => {
  const
    github = document.querySelector("#github"),
    githubHideFrom = document.querySelector("#github-hided") as HTMLElement;

  const GithubPageY_Threshold = githubHideFrom?.offsetTop ?? 400;

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
