let tl = gsap.timeline();

tl.to('h2',{duration : 2, opacity:1,stagger:0.5});
tl.to('.slider',{duration : 1 , y : "-100%"},"+=1");
tl.to('.intro',{duration : 1, y : "-100%"},"-=1");
tl.to('nav',{duration: 1,opacity:1});
tl.to('.slogan',{duration: 1,opacity:1 , y : -30, ease:"elastic"},"-=1");
