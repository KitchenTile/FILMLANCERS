import FARLEY from "../images/ARTDEPARTMENT/FARLEY.jpg";
import GANGER_H from "../images/ARTDEPARTMENT/GANGER_H.jpg";
import LEARMONTH_HIRE from "../images/ARTDEPARTMENT/LEARMONTH_HIRE.jpg";
import LONDON_PROP_HIRE from "../images/ARTDEPARTMENT/LONDON_PROP_HIRE.jpg";
import STOCKYARD from "../images/ARTDEPARTMENT/STOCKYARD.jpg";
import SUPERHIRE from "../images/ARTDEPARTMENT/SUPERHIRE.jpg";
import THE_CLASSIC_PROP_HIRE from "../images/ARTDEPARTMENT/THE_CLASSIC_PROP_HIRE.jpg";
import THEME_TRADERS from "../images/ARTDEPARTMENT/THEME_TRADERS.jpg";


const PropData = [
    {name: "Superhigher", link: "https://www.superhire.com/",img: SUPERHIRE,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9926.468390049647!2d-0.2761432!3d51.5385825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611e817aac70f%3A0x121d997c920fb340!2sSuperhire%20Props%20Ltd!5e0!3m2!1sen!2suk!4v1711934550697!5m2!1sen!2suk"},
    {name: "Stockyard", link: "https://www.prophire-backdrophire.com/",img: STOCKYARD,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0280801520566!2d-0.2755804!3d51.5310448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611f38a2f11cb%3A0x316e2a5b8f35de9c!2sGenesis%20Business%20Park%2C%20Whitby%20Ave%2C%20London%20NW10%207SF!5e0!3m2!1sen!2suk!4v1711934804165!5m2!1sen!2suk"},
    {name: "London prop hire", link: "https://www.londonprophire.com/",img: LONDON_PROP_HIRE,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9949.202504914412!2d-0.1895319!3d51.4342727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605fdbac0b601%3A0x2f61925d5aedef35!2sGarratt%20Business%20Park!5e0!3m2!1sen!2suk!4v1711934839903!5m2!1sen!2suk"},
    {name: "Theme traders", link: "https://www.themetraders.com/self-select-and-collect/",img: THEME_TRADERS,  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9923.00645132426!2d-0.2186053!3d51.5544535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876105f57545739%3A0xc3760555eb6cea82!2sTheme%20Traders!5e0!3m2!1sen!2suk!4v1711934892394!5m2!1sen!2suk"},
    {name: "Granger Hertzog", link: "https://www.grangerhertzog.com/", img: GANGER_H,  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9693390422117!2d-0.2674543!3d51.532122199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611ec4c752d7b%3A0x2a6b5965e3eb70b1!2sCentral%20Way%20%26%20Central%20Pk%2C%20London%20NW10%207FY!5e0!3m2!1sen!2suk!4v1711934959333!5m2!1sen!2suk"},
    {name: "The classic prop hire company ", link: "https://classicprophire.com/", img: THE_CLASSIC_PROP_HIRE, map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.871921414211!2d-0.4024451!3d51.5000426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767296433c94c3%3A0x5163ba3bdcfb1e48!2sThe%20Classic%20Prop%20Hire%20Co%20Ltd!5e0!3m2!1sen!2suk!4v1711935017554!5m2!1sen!2suk"},
    {name: "Foxtrot costume and props Ltd", link: "https://www.foxtrotcostumeandprops.co.uk" ,map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.873589897142!2d-0.2500692!3d51.5155351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611d89157c95f%3A0xc492e6a510e6bfeb!2s3B%20Brassie%20Ave%2C%20London%20W3%207DE!5e0!3m2!1sen!2suk!4v1711927038015!5m2!1sen!2suk"},
    {name: "Learmoth Film and TV prop hire", link: "https://learmonthhire.co.uk/" ,img: LEARMONTH_HIRE, map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19859.637804742895!2d-0.27565!3d51.523219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e22b798056d%3A0x7b5adc250b6d9810!2sLearmonth%20Hire!5e0!3m2!1sen!2sus!4v1712172133718!5m2!1sen!2sus"},
    {name: "Farley", link: "https://farley.co.uk/", img: FARLEY, map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6494368979434!2d-0.2511271!3d51.519647199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611d966a42589%3A0x7e0ed1b176de7f96!2s1-21%20Brunel%20Rd%2C%20London%20W3%207XR!5e0!3m2!1sen!2suk!4v1711935095495!5m2!1sen!2suk"},
];

export default PropData;