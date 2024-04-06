import SOLA_LIGHTS from "../images/LIGHTS/SOLA_LIGHTS.jpg";
import CINE_LIGHTS from "../images/LIGHTS/CINE_LIGHTS.jpg";
import GLO_FILM_LIGHTING from "../images/LIGHTS/GLO_FILM_LIGHTING.jpg";
import PRO_LIGHT from "../images/LIGHTS/PRO_LIGHT.jpg";
import PRO_LIGHTING from "../images/LIGHTS/PRO_LIGHTING.jpg";
import FOCUS_CANNING from "../images/CAMREA�/FOCUS_CANNING.jpg";
import VMI from "../images/CAMREA�/VMI.jpg";
import CAMREAWORKS from "../images/CAMREA�/CAMREAWORKS.jpg";
import PIXELPIXEL from "../images/CAMREA�/PIXIPIXEL.jpg";
import FOMO_RENTALS from "../images/CAMREA�/FOMO_RENTALS.jpg";
import FERAL_FILMS from "../images/CAMREA�/FERAL_FILMS.jpg";
import MOONSHINE from "../images/CAMREA�/MOONSHINE.jpg";
import THE_KIT_ROOM from "../images/CAMREA�/THE_KIT_ROOM.jpg";
import SHIFT_4 from "../images/CAMREA�/SHIFT_4.jpg";





const LightingData = [
    {name: "Sola lighting", link: "https://solalights.com/",img: SOLA_LIGHTS,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.2773396853427!2d-0.25846421076636855!3d51.52138546188545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611ddbfa6a3cb%3A0x3c90e97be703ff61!2sVictoria%20Industrial%20Estate%2C%20Victoria%20Rd%2C%20London%20W3%206UU!5e0!3m2!1sen!2suk!4v1711927318936!5m2!1sen!2suk"},
    {name: "Glow film lighting", link: "https://www.glofilmlighting.london/",img: GLO_FILM_LIGHTING,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.0114775909365!2d-0.42937030000000004!3d51.40284380000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876745be9667995%3A0xca7008e71538073f!2s8%20The%20Crofts%2C%20Upper%20Halliford%20Grn%2C%20Upper%20Halliford%2C%20Shepperton%20TW17%208SD!5e0!3m2!1sen!2suk!4v1711971892826!5m2!1sen!2suk"},
    {name: "Cine light ", link: "https://cinelight.london/?gad_source=1&gbraid=0AAAAApjb3M8NaETE6RZZAQ5ALAk3fOT&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0Goj6rgrAldUx3sG_2TEP4RYfR8Pl0KMNB6pQNe5gfpSmEJO2MIABpy4aAsXQEALw_wcB",img: CINE_LIGHTS, map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9937.970703525622!2d-0.044405!3d51.4858259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603084f06dfbd%3A0xff4a09792246e456!2sCinelight%20London!5e0!3m2!1sen!2suk!4v1711972025009!5m2!1sen!2suk"},
    {name: "Pro light London", link: "https://prolight.london/",img: PRO_LIGHT,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.6790518899347!2d-0.36069051076643005!3d51.50664586242472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d5cfbd403b7%3A0x3014e197ccb1e008!2sGreat%20Western%20Industrial%20estate%2C%20Dean%20Way%2C%20London%20UB2%204SB!5e0!3m2!1sen!2suk!4v1711927468845!5m2!1sen!2suk"},
    {name: "Shift 4", link: "https://www.shift-4.com",img: SHIFT_4, map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9918.182265925501!2d-0.0921213!3d51.5765638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c751f6797c7%3A0x560e0d60e8240060!2sSHIFT%204%20-%20Equipment%20Hire%20%26%20Crew!5e0!3m2!1sen!2suk!4v1711926008621!5m2!1sen!2suk"},
    {name: "VMI", link: "https://vmi.tv/",img: VMI,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.242869518635!2d-0.2564506!3d51.5212747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876108fd164ce2d%3A0x458dd290f6498ef4!2sVMI.TV%20Ltd!5e0!3m2!1sen!2suk!4v1711926066161!5m2!1sen!2suk"},
    {name: "Focus24", link: "https://www.focus-canning.com", img:FOCUS_CANNING, map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.038268583354!2d-0.2757102!3d51.522213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbae65356f5%3A0x8b215d33e5a41f96!2sFocus%20Canning!5e0!3m2!1sen!2suk!4v1711926147460!5m2!1sen!2suk"},
    {name: "Cameraworks ", link: "https://www.cameraworks.co.uk/?gad_source=1&gbraid=0AAAAADkSyf4VujYWoJ2bjaXG50y0Grjon&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojvbwQJqVwZmbP439gs6fgqtbuTuRwjSP1ZayJTs1goQs0M9MWxa1MaAmYTEALw_wcB", img: CAMREAWORKS, map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.472358575298!2d-0.0780646!3d51.5248082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb095779ca9%3A0xc8545733bc3143a8!2sCAMERAWORKS!5e0!3m2!1sen!2suk!4v1711926230861!5m2!1sen!2suk"},
    {name: "Pixipixel", link: "https://pixipixel.com/",img: PIXELPIXEL,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.731056119645!2d-0.2755089!3d51.5006888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb97e11625d%3A0x364d0cdbd5cb0597!2sPixipixel%20(Studio%20%26%20Camera%20Division)!5e0!3m2!1sen!2suk!4v1711926309588!5m2!1sen!2suk"},
    {name: "FOMO rentals ", link: "https://www.fomorentals.co.uk",img: FOMO_RENTALS,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.299716205687!2d-0.0715748!3d51.5255999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603575a4c6d07%3A0xa3fc8a505a8f44f9!2sFOMO%20Rentals!5e0!3m2!1sen!2suk!4v1711926576433!5m2!1sen!2suk"},
    {name: "Feral rentals", link: "https://www.feralequipment.com/#",img: FERAL_FILMS,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19855.635542111984!2d-0.244517743220587!3d51.53239541751147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876106d1c3fa583%3A0xae3035e68a0af20d!2sFeral%20Equipment!5e0!3m2!1sen!2suk!4v1711926691842!5m2!1sen!2suk"},
    {name: "Moonshine", link: "https://moonshinefilm.com",img: MOONSHINE,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9935.913286991816!2d-0.1331912!3d51.4952653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605393b116c15%3A0x59bdab4b7995de0a!2sMoonshine%20Film%20Camera%20%26%20Lighting%20%26%20Equipment%20Hire!5e0!3m2!1sen!2suk!4v1711926744175!5m2!1sen!2suk"},
    {name: "The kit room ", link: "https://www.thekitroom.co.uk",img: THE_KIT_ROOM,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9928.643627381072!2d-0.0772878!3d51.5286085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0077f3cb21%3A0xee3abae952b9b89f!2sThe%20Kit%20Room!5e0!3m2!1sen!2suk!4v1711926781787!5m2!1sen!2suk"},
    {name: "Prolighting London", link: "http://www.prolightinglondon.com/",img: PRO_LIGHTING,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4960639835854!2d-0.06337770000000001!3d51.522460699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccedc56d305%3A0x496ef0f9c70cd5e!2s6-8%20Hemming%20St%2C%20London%20E1%205BL!5e0!3m2!1sen!2suk!4v1711927517253!5m2!1sen!2suk"},
];


export default LightingData;