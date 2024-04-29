import COSPROP from "../images/COSTUME/COSPROP.jpg";
import ACADEMY_COSTUMES from "../images/COSTUME/ACADEMY_COSTUMES.jpg";
import ANGELS from "../images/COSTUME/ANGELS.jpg";
import COSTUME_STUDIO from "../images/COSTUME/COSTUME_STUDIO.jpg";
import FOXTROT from "../images/COSTUME/FOXTROT.jpg";
import NASHNAL_THEATER from "../images/COSTUME/NASHNAL_THEATER.jpg";
import SANDS from "../images/COSTUME/SANDS.jpg";


const CostumeData = [
    // {name: "Costume studio", link: "https://costumestudio.co.uk/content/about-us",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.19237887315!2d-0.08232249999999999!3d51.5463713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c9003d0bbaf%3A0x83bf31be8bef6027!2s159-161%20Balls%20Pond%20Rd%2C%20London%20N1%204BG!5e0!3m2!1sen!2suk!4v1711926833070!5m2!1sen!2suk"},
    // {name: "Angels", link: "https://www.angels.co.uk/" ,map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.2995313861175!2d-0.2415476!3d51.581073499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611217d292e8d%3A0xd0cba7e2ced964b6!2s1%20Garrick%20Rd%2C%20London%20NW9%206AA!5e0!3m2!1sen!2suk!4v1711926884465!5m2!1sen!2suk"},
    // {name: "Cosprop", link: "https://www.cosprop.com" ,map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4107708904357!2d-0.1236598!3d51.560702799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ba6cb72d567%3A0xb9c5c4348703d1cb!2s469%2C%20475%20Holloway%20Rd%2C%20Archway%2C%20London%20N7%206LB!5e0!3m2!1sen!2suk!4v1711926936754!5m2!1sen!2suk"},
    // {name: "Academy costumes", link:"http://www.academycostumes.co.uk/" ,map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9936.854604764192!2d-0.0930483!3d51.4909467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a454caf9a5%3A0xa1bf98f6c537dd1c!2sAcademy%20Costumes!5e0!3m2!1sen!2suk!4v1711926985463!5m2!1sen!2suk"},
    // {name: "Foxtrot costume and props Ltd", link: "https://www.foxtrotcostumeandprops.co.uk" ,map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.873589897142!2d-0.2500692!3d51.5155351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611d89157c95f%3A0xc492e6a510e6bfeb!2s3B%20Brassie%20Ave%2C%20London%20W3%207DE!5e0!3m2!1sen!2suk!4v1711927038015!5m2!1sen!2suk"},
    // {name: "National theatre costume hire", link: "https://www.nationaltheatre.org.uk/your-visit/hire-us/costume-and-props-hire/", map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3706317934007!2d-0.11345529999999998!3d51.506415999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b11e7f1ffb%3A0x917373d9ec2aa170!2sUpper%20Ground%2C%20London%20SE1%209PX!5e0!3m2!1sen!2suk!4v1711927095712!5m2!1sen!2suk"},
    // {name: "Sands films studios", link:"https://www.sandsfilms.co.uk/" ,map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.637819432827!2d-0.0534092!3d51.501513499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603242e744117%3A0xb2eb05866e7823e1!2s82%20Saint%20Marychurch%20St%2C%20London%20SE16%204HZ!5e0!3m2!1sen!2suk!4v1711927184459!5m2!1sen!2suk"},

    {name: "Foxtrot costume and props Ltd",
     link: "https://www.foxtrotcostumeandprops.co.uk" ,
     img: FOXTROT,
     map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.873589897142!2d-0.2500692!3d51.5155351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611d89157c95f%3A0xc492e6a510e6bfeb!2s3B%20Brassie%20Ave%2C%20London%20W3%207DE!5e0!3m2!1sen!2suk!4v1711927038015!5m2!1sen!2suk",
     info: "Foxtrot Costume and Props supply a wide range of uniforms for Film and TV. They supply replica weapons and props that accompany their costumes and armoury.",
     keywords: "armoury, weapons, firearms, firearm, replica, taser, police, prison, security, medical, firefighter, military, aviation, workwear, driver, postal, traffic warden, lollypop person, school, brownies, graduation, legal, priest, radios, optics, night vision, surveillance, cameras, earphones, feature films, play, musicals, documentaries, comedies, commercials, music videos, low budget",
     placeId: "ChIJMWjlhdgRdkgRObDtQc4Yfu4"
    },

    {name: "Sands films studios",
     link:"https://www.sandsfilms.co.uk/" ,
     img: SANDS,
     map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.637819432827!2d-0.0534092!3d51.501513499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603242e744117%3A0xb2eb05866e7823e1!2s82%20Saint%20Marychurch%20St%2C%20London%20SE16%204HZ!5e0!3m2!1sen!2suk!4v1711927184459!5m2!1sen!2suk",
     info: "Sands films is a well-established costumer with a large stock of period costumes for hire. Sands’ reputation is built on the quality of its costumes. They work with small independent films and larger Hollywood productions.",
     keywords: "20th century, 19th century, 1900s, 1800s, 18th century, 1700s, bespoke, custom, tailored, feature films, play, musicals, jewellery, documentaries, comedies, commercials, music videos, low budget",
     placeId: "ChIJK5OJLiQDdkgRySv0sK8iDjk"
    },

    {name: "Costume studio",
     link: "https://costumestudio.co.uk/content/about-us",
     img: COSTUME_STUDIO, map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.19237887315!2d-0.08232249999999999!3d51.5463713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c9003d0bbaf%3A0x83bf31be8bef6027!2s159-161%20Balls%20Pond%20Rd%2C%20London%20N1%204BG!5e0!3m2!1sen!2suk!4v1711926833070!5m2!1sen!2suk",
     info: "They provide costumes for Day-to-day clothing, military uniforms, the services, medical, legal and more! They are great for feature films, play, musicals, documentaries, comedies, commercials and music videos. They respond quickly to enquires with a personal touch. ",
     keywords: "Military uniforms, military, the services, medical, wigs, footwear, armoury, gun, guns, knife, knifes, swords, swords, legal, Roman, Romans, Viking, Vikings, Knights, Armour, World war, pirate, 20th century, 19th century, 1800s, 1900s, feature films, play, musicals, documentaries, comedies, commercials, music videos, low budget, bespoke, custom",
     placeId: "ChIJY3WQqpocdkgRvjjW-mX_GXM"
    },

    {name: "Angels",
     link: "https://www.angels.co.uk/" ,
     img: ANGELS, 
     map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.2995313861175!2d-0.2415476!3d51.581073499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611217d292e8d%3A0xd0cba7e2ced964b6!2s1%20Garrick%20Rd%2C%20London%20NW9%206AA!5e0!3m2!1sen!2suk!4v1711926884465!5m2!1sen!2suk",
     info: "They are the largest privately owned collection of costume for film, theatre and television anywhere in the world. with over one million items and eight miles of hanging costume they can supply whatever you need for your production – large or small.",
     keywords: "Day-to-day, clothing, military uniforms, military, police uniforms, police, the services, medical, samurai, Roman, Romans, Viking, Vikings, Knights, Armour, chainmail, World war, pirate, 20th century, 19th century, 18th century, 17th Century, 1700s, 1800s, 1900s, feature films, play, musicals, jewellery, documentaries, comedies, commercials, music videos, low budget, bespoke, custom, watches, pocket watches, pins, brooches, chatelaines, Feathered headdresses, fascinators, elaborate combs, cigarette holders, monocles, walking sticks, shoes, bags, Navy, Army and Airforce",
     placeId: "ChIJAQBAfSERdkgRePlWmoM3P2A"
    },

    {name: "Academy costumes",
     link:"http://www.academycostumes.co.uk/" ,
     img: ACADEMY_COSTUMES,
     map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9936.854604764192!2d-0.0930483!3d51.4909467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a454caf9a5%3A0xa1bf98f6c537dd1c!2sAcademy%20Costumes!5e0!3m2!1sen!2suk!4v1711926985463!5m2!1sen!2suk",
     info: "The rentals department of Academy is a beautifully kept collection of 1900s to 1980s clothing with an equally impressive range of accessories including hats, shoes and jewellery. Also in the collection is a full stock of 1900s to 1940s distressed clothing. They also do bespoke costumes. In addition, they have some special items such as show girls, astronauts, pregnancy and body padding, angel wings, wedding dresses and coloured formal wear.",
     keywords: "accessories, hats, shoes, jewellery, bespoke, show girls, astronauts, pregnancy, body padding, angel wings, wedding dresses, coloured formal wear, day, evening, 20th century, 19th century, 1900s, 1800s, period, bespoke, custom",
     placeId: "ChIJpfnKVKQEdkgRHN03xfaYv6E"
    },

    {name: "Cosprop",
     link: "https://www.cosprop.com",
     img: COSPROP, 
     map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4107708904357!2d-0.1236598!3d51.560702799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ba6cb72d567%3A0xb9c5c4348703d1cb!2s469%2C%20475%20Holloway%20Rd%2C%20Archway%2C%20London%20N7%206LB!5e0!3m2!1sen!2suk!4v1711926936754!5m2!1sen!2suk",
     info: "They specialise in the hire and making of period costume. The service they offer to costume designers is to realise their creative brief on a production by providing authentic, high quality period costume for hire.",
     keywords: "20th century, 19th century, 18th century, 17th Century, 1900s, 1800s, 1700s, 1600s, corsets, children, children’s clothing, jewellery pieces, handbags, masks, headdresses, parasols, canes, gloves, hats, alterations, feature film, high budget, theatre, hats, bonnets, headpieces, tailoring, dressmaking, bespoke, custom, alterations, props",
     placeId: "ChIJv2cQzaYbdkgREvO0XdtZ67c"
    },

    {name: "National theatre costume hire",
     link: "https://www.nationaltheatre.org.uk/your-visit/hire-us/costume-and-props-hire/",
     img:NASHNAL_THEATER, 
     map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3706317934007!2d-0.11345529999999998!3d51.506415999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b11e7f1ffb%3A0x917373d9ec2aa170!2sUpper%20Ground%2C%20London%20SE1%209PX!5e0!3m2!1sen!2suk!4v1711927095712!5m2!1sen!2suk",
     info: "Our Costume and Props Hire department offers thousands of beautifully crafted costumes, furniture props and armour from past National Theatre productions. We offer our services to: Theatre (including amateur dramatics), Opera, Education (secondary & higher education), Film & TV, Photographers, Editorial & Styling, Events",
     keywords: "Costumes, furniture props, armour, Theatre, Opera, Education, higher education, Film, TV, Photographers, Editorial, Styling, Events, period pieces, fake food, restraining chairs, stuffed animals, severed heads, 20th century, 19th century, 1900s, 1800s, shoes, luggage, 18th century, 1700s, ",
     placeId: "ChIJj88HvWEEdkgR1-IRE8i96_E"
    },


];


export default CostumeData;