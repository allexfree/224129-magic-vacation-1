// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import pageLoad from './modules/load-page';
import FullPageScroll from './modules/full-page-scroll';
import timer from './modules/timer.js';
import AccentTypographyBuild from './modules/typography-animation';

// init modules
mobileHeight();
pageLoad();
slider();
menu();
footer();
chat();
result();
form();
social();
timer();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
