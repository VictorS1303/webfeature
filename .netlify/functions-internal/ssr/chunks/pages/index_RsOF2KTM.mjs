import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_DTQOkFno.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';

const $$Astro$g = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-pux6a34n> <i class="fas fa-bars toggle-mobile-menu-button" id="mobile_menu_toggle_btn" data-astro-cid-pux6a34n></i> <nav class="main-nav" id="main_nav" data-astro-cid-pux6a34n> <a href="#top" data-astro-cid-pux6a34n> <h1 class="logo" data-astro-cid-pux6a34n>GirlTalk</h1> </a> <ul data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n> <a href="#home" class="active" data-astro-cid-pux6a34n>Hjem</a> </li> <li data-astro-cid-pux6a34n> <a href="#interview" data-astro-cid-pux6a34n>Interview</a> </li> <li data-astro-cid-pux6a34n> <a href="#offers" data-astro-cid-pux6a34n>Tilbud</a> </li> <li data-astro-cid-pux6a34n> <a href="#volunteer" data-astro-cid-pux6a34n>Bliv Frivillig</a> </li> </ul> </nav> </header>  `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Navigation.astro", void 0);

const $$Astro$f = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(className, "class")}${addAttribute(id, "id")} data-astro-cid-sh445jdo> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Section.astro", void 0);

const $$Astro$e = createAstro();
const $$Overlay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Overlay;
  return renderTemplate`${maybeRenderHead()}<div class="overlay" data-astro-cid-aguojgpj></div> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Overlay.astro", void 0);

const $$Astro$d = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "hero", "id": "hero", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Overlay", $$Overlay, { "data-astro-cid-bbe6dxrz": true })} ${maybeRenderHead()}<img src="public/images/hero/hero_placeholder_bg_image.webp" alt="" data-astro-cid-bbe6dxrz> <div class="container hero-container" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>GirlTalk</h1> <p class="slogan" data-astro-cid-bbe6dxrz>Mødestedet for piger — af piger</p> </div> ` })} `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Hero.astro", void 0);

const $$Astro$c = createAstro();
const $$VideoControls = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$VideoControls;
  return renderTemplate`${maybeRenderHead()}<div class="container video-controls-container" data-astro-cid-dzivdrdk> <div class="play-pause-audio-container" data-astro-cid-dzivdrdk> <i class="fas fa-play control play-pause-btn" id="play_pause_btn" data-astro-cid-dzivdrdk></i> <div data-astro-cid-dzivdrdk> <span data-astro-cid-dzivdrdk>0</span> <input type="range" min="0" max="1" step=".01" class="control volume-control" id="volume_control" data-astro-cid-dzivdrdk> <span class="volume current-volume" id="current_volume" data-astro-cid-dzivdrdk>0</span> </div> </div> <div data-astro-cid-dzivdrdk> <i class="fa-solid fa-expand control fullscreen-btn" id="fullscreen_btn" data-astro-cid-dzivdrdk></i> </div> </div>  `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/VideoControls.astro", void 0);

const $$Astro$b = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Video;
  const { src, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video${addAttribute(src, "src")}${addAttribute(id, "id")}></video>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Video.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const { className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(className, "class")}${addAttribute(id, "id")} data-astro-cid-3ef6ksr2> ${renderSlot($$result, $$slots["default"])} </header> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Interview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Interview;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "interview", "id": "interview", "data-astro-cid-hpkrisyi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "interview-header", "id": "interview_header", "data-astro-cid-hpkrisyi": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-hpkrisyi>LIVET SOM FRIVILLIG</h1> <p data-astro-cid-hpkrisyi>
Hvordan er livet som frivillig i GirlTalk?
            Få et dybere indblik i videoen herunder og se, om det skulle være noget for dig.
</p> ` })} <div class="container video-container" data-astro-cid-hpkrisyi> <div class="wrapper video-wrapper" data-astro-cid-hpkrisyi> ${renderComponent($$result2, "Video", $$Video, { "src": "../../public/videos/placeholder_video.mp4", "id": "video", "data-astro-cid-hpkrisyi": true })} ${renderComponent($$result2, "VideoControls", $$VideoControls, { "data-astro-cid-hpkrisyi": true })} </div> </div> ` })} `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Interview.astro", void 0);

const $$Astro$8 = createAstro();
const $$OfferCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OfferCard;
  const frontIcons = ["fas fa-handshake fa-4x", "fas fa-rocket fa-4x", "fas fa-network-wired fa-4x", "fas fa-briefcase fa-4x", "fas fa-life-ring fa-4x", "fas fa-face-smile fa-4x"];
  const backIcons = ["fas fa-handshake fa-2x", "fas fa-rocket fa-2x", "fas fa-network-wired fa-2x", "fas fa-briefcase fa-2x", "fas fa-life-ring fa-2x", "fas fa-face-smile fa-2x"];
  const titles = ["F\xF8lelsen af at g\xF8re en forskel", "Personlig udvikling", "Netv\xE6rksmuligheder", "Faglig erfaring", "Tr\xE6ning og st\xF8tte", "Tilfredshed"];
  const descriptions = ["Du styrker unge piger og kvinder personligt og professionelt.", "Mulighed for udvikling af blandt andet dine samarbejds-, kommunikative, ledelsesm\xE6ssige f\xE6rdigheder.", " Du samarbejder personale fra andre frivilligorganisationer og de personer, de hj\xE6lper.", "Dit frivillige arbejder giver dig v\xE6rdifuld erfaring b\xE5de personligt og professionelt.", "GirlTalk tilbyder dig st\xF8tte, s\xE5 du er sikker p\xE5 at kunne udf\xF8re dit arbejde professionelt.", " Din hj\xE6lp giver dig en f\xF8lelse af personlig tilfredshed og f\xF8lelsen af at have gjort en positiv forskel."];
  const cards = titles.map((title, index) => ({
    title,
    description: descriptions[index],
    frontIcon: frontIcons[index],
    backIcon: backIcons[index]
  }));
  return renderTemplate`${maybeRenderHead()}<div class="container offer-cards-container" data-astro-cid-ealfz74n> ${cards.map((card) => renderTemplate`<div class="card-container" data-astro-cid-ealfz74n> <div class="card offer-card" data-astro-cid-ealfz74n> <div class="offer-card-front" data-astro-cid-ealfz74n> <i${addAttribute(card.frontIcon, "class")} data-astro-cid-ealfz74n></i> <h3 data-astro-cid-ealfz74n>${card.title}</h3> </div> <div class="offer-card-back" data-astro-cid-ealfz74n> <i${addAttribute(card.backIcon, "class")} data-astro-cid-ealfz74n></i> <h3 data-astro-cid-ealfz74n>${card.description}</h3> </div> </div> </div>`)} </div> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/OfferCard.astro", void 0);

const $$Astro$7 = createAstro();
const $$Offers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Offers;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "offers", "id": "offers" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OfferCard", $$OfferCard, {})} ` })}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Offers.astro", void 0);

const $$Astro$6 = createAstro();
const $$Volunteer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Volunteer;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "offer", "id": "offer", "data-astro-cid-4euvt5yj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "offer-heading", "id": "offer_heading", "data-astro-cid-4euvt5yj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-4euvt5yj>HVAD FÅR MAN SOM FRIVILLIG?</h1> ` })} ${renderComponent($$result2, "Offers", $$Offers, { "data-astro-cid-4euvt5yj": true })} ` })} `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Volunteer.astro", void 0);

const $$Astro$5 = createAstro();
const $$ScrollToTopButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ScrollToTopButton;
  return renderTemplate`${maybeRenderHead()}<a href="#top" class="button scroll-to-top-button" id="scroll_to_top_button" data-astro-cid-uo4ntx7p> <i class="fas fa-arrow-up" data-astro-cid-uo4ntx7p></i> </a>  `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/ScrollToTopButton.astro", void 0);

const $$Astro$4 = createAstro();
const $$CallToActionButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CallToActionButton;
  const { callToActionButtonText, url, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="cta-btn" id="cta_btn" data-astro-cid-tyit7iv3> <a${addAttribute(`https://${url}`, "href")} target="{_target}" data-astro-cid-tyit7iv3> ${callToActionButtonText} </a> </button> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/CallToActionButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Recruit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Recruit;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "volunteer", "id": "volunteer", "data-astro-cid-5omddmhs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-5omddmhs> <h1 data-astro-cid-5omddmhs>Bliv en del af holdet</h1> </header> <p data-astro-cid-5omddmhs>
Hvis ovenstående har givet dig blod på tanden til at gøre en forskel for unge piger, er det nu, du skal gribe muligheden.
        Klik på knappen nedenfor og se, hvilke muligheder du har for at gøre præcis den forskel, du ønsker.
</p> ${renderComponent($$result2, "CallToActionButton", $$CallToActionButton, { "callToActionButtonText": "Bliv Frivillig", "url": "www.girltalk.dk/om/bliv-frivillig/", "target": "blank", "data-astro-cid-5omddmhs": true })} ` })} `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Recruit.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" id="footer" data-astro-cid-sz7xmlte> <div class="company" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>GirlTalk</span> <span class="divider" data-astro-cid-sz7xmlte>&#x2022;</span> </div> <div class="address" data-astro-cid-sz7xmlte> <div class="street-location" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Martinsvej 7, 1</span> <span class="divider" data-astro-cid-sz7xmlte>&#x2022;</span> </div> <div class="zip-and-city" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>1926, Frederiksberg C</span> <span class="divider" data-astro-cid-sz7xmlte>&#x2022;</span> </div> </div> <div class="cvr" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>CVR 30 14 53 48</span> </div> <div class="socials" data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/GirlTalkdk" target="_blank" data-astro-cid-sz7xmlte> <i class="fab fa-facebook-f fa-2x" data-astro-cid-sz7xmlte></i> </a> <a href="https://www.instagram.com/girltalkdk/?hl=da" target="_blank" data-astro-cid-sz7xmlte> <i class="fab fa-instagram fa-2x" data-astro-cid-sz7xmlte></i> </a> <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.tiktok.com/%40girltalkdk&ved=2ahUKEwiB272e9ciFAxVaQ_EDHa5uBUUQFnoECBYQAQ&usg=AOvVaw0V3zfuKj1UikxlV2gXRSf_" target="_blank" data-astro-cid-sz7xmlte> <i class="fab fa-tiktok fa-2x" data-astro-cid-sz7xmlte></i> </a> </div> </footer> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://kit.fontawesome.com/e05f21b32e.js" crossorigin="anonymous"><\/script><title>', "</title>", "</head> <body> ", " ", " ", " ", " ", " ", " ", " </body></html>"])), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderComponent($$result, "Hero", $$Hero, {}), renderComponent($$result, "Interview", $$Interview, {}), renderComponent($$result, "Volunteer", $$Volunteer, {}), renderComponent($$result, "Recruit", $$Recruit, {}), renderComponent($$result, "ScrollToTopButton", $$ScrollToTopButton, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/pages/index.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
