const greeting = {
    title: "Hi, I'm Dean",
    logo_name: "Dean W. Andreakis",
    logo_img_show: false, // if true than show image(logo) in home page instant of text(logo)
    logo_img: "https://img.icons8.com/name",
    full_name: "Dean W. Andreakis",
    email: "dean@deanware.biz",
    subTitle:
    "I'm a professional software developer and architect. I'm a continuous learner who loves to work across technologies and domains.",
    Programming: true,  // if true, Show 'Programming' section in home page, if false than not show
    developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
    designer: false,  // if true, Show 'designer' section in home page, if false than not show
    cloud_infra_architecture:true,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
    data_Science: false,  // if true, Show 'data_Science' section in home page, if false than not show
    ml_ai: false,  // if true, Show 'ml_ai' section in home page, if false than not show
    Robotic: false,  // if true, Show 'Robotic' section in home page, if false than not show
    gamedev: false,  // if true, Show 'gamedev' section in home page, if false than not show
};

const BlogData = {
    // this show your dev.to blog in your Portfolio blog
    show_Blog: true,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section convert to skill Section.
    devto_username: "deanandreakis",
    Blog_Bio : [
        // this is visible in '/blog' section if show_Blog: true, else show in skill section
        "Here are links to Blog articles I have written at DEV.to"
    ]
};


const socialMedia = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    /* {
        icon: "facebook",
        img: "https://img.icons8.com/facebook0",
        link: "https://www.facebook.com/deanware55"
    }, */
    {
        icon: "twitter",
        img: "https://img.icons8.com/twitter",
        link: "https://www.twitter.com/deanandreakis"
    },
    {
        icon: "github",
        img: "https://img.icons8.com/github",
        link: "https://www.github.com/deanandreakis"
    },
    {
        icon: "devto",
        img: "https://img.icons8.com/developer",
        link: "https://dev.to/deanandreakis"
    },
    /* {
        icon: "stackoverflow",
        img: "https://img.icons8.com/stack-overflow",
        link: "https://stackoverflow.com/users/35499/dean?tab=profile"
    }, */
    {
        icon: "linkedin",
        img: "https://img.icons8.com/linkedin",
        link: "https://www.linkedin.com/in/deanandreakis"
    },
    {
        icon: "mail",
        img: "https://img.icons8.com/mail",
        link: "mailto:dean@deanware.biz"
    }

];

const ProgrammingSkill = [
    // https://img.icons8.com/ all logo list
    // you can use it by changing tool name
    {
        icon: "c-programming",
        img: "https://img.icons8.com/wired/64/000000/c-programming.png"
    },
    {
        icon: "c-plus",
        img: "https://img.icons8.com/c-plus-plus"
    },
    {
        icon: "ruby",
        img: "https://img.icons8.com/ios/100/000000/ruby-gemstone.png"
    },
    {
        icon: "python",
        img: "https://img.icons8.com/python"
    },
    {
        icon: "c-sharp-logo",
        img: "https://img.icons8.com/c-sharp-logo"
    },
    {
        icon: "swift",
        img: "https://img.icons8.com/swift"
    },
    {
        icon: "javascript",
        img: "https://img.icons8.com/javascript"
    },
    {
        icon: "html",
        img: "https://img.icons8.com/html"
    },
    {
        icon: "css",
        img: "https://img.icons8.com/css3"
    },
];

const DevSkill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "react",
        img: "https://img.icons8.com/react-native"
    },
    {
        icon: "apple-logo",
        img: "https://img.icons8.com/apple-logo"
    },
    {
        icon: "node",
        img: "https://img.icons8.com/windows/128/000000/nodejs.png"
    },
    {
        icon: "ruby on rails",
        img: "https://img.icons8.com/windows/128/000000/ruby-on-rails.png"
    },
    {
        icon: ".NET",
        img: "https://img.icons8.com/microsoft"
    },
];

const DesignSkill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "figma",
        img: "https://img.icons8.com/figma"
    },
    {
        icon: "sketch",
        img: "https://img.icons8.com/sketch"
    },
    {
        icon: "adobe-after-effects",
        img: "https://img.icons8.com/adobe-after-effects"
    },
    {
        icon: "adobe-xd",
        img: "https://img.icons8.com/adobe-xd"
    },
    {
        icon: "adobe-illustrator",
        img: "https://img.icons8.com/adobe-illustrator"
    },
    {
        icon: "adobe-photoshop",
        img: "https://img.icons8.com/adobe-photoshop"
    },
    {
        icon: "adobe-premiere-pro",
        img: "https://img.icons8.com/adobe-premiere-pro"
    }

];
const cloud_infra_architecture_Skill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "gcp",
        img: "https://img.icons8.com/ios/50/000000/google-cloud-platform.png"
    },
    {
        icon: "aws",
        img: "https://img.icons8.com/windows/128/000000/amazon-web-services.png"
    }
];
const data_Science_Skill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://img.icons8.com/python"
    },
    {
        icon: "kaggle",
        img: "https://img.icons8.com/kaggle"
    },
    {
        icon: "tensorflow",
        img: "https://img.icons8.com/tensorflow"
    },
    {
        icon: "jupyter",
        img: "https://img.icons8.com/jupyter"
    }

];
const Ml_ai_Skill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://img.icons8.com/python"
    },
    {
        icon: "tensorflow",
        img: "https://img.icons8.com/tensorflow"
    },
    {
        icon: "arduino",
        img: "https://img.icons8.com/arduino"
    }

];

const RoboticSkill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "tensorflow",
        img: "https://img.icons8.com/tensorflow"
    },
    {
        icon: "arduino",
        img: "https://img.icons8.com/arduino"
    },
    {
        icon: "python",
        img: "https://img.icons8.com/python"
    },

];

const Gamedev_Skill = [
    // https://img.icons8.com/ all logo list
    // you can use by changing tool name
    {
        icon: "unity",
        img: "https://img.icons8.com/unity"
    },
    {
        icon: "c-programming",
        img: "https://img.icons8.com/c-programming"
    },
    {
        icon: "c-sharp",
        img: "https://img.icons8.com/c-sharp-logo"
    }

];


const projects = [
    {
        id: "1",
        name: "Master-Portfolio",
        Description: "This web app!",
        Code_Link: "https://github.com/deanandreakis/Master-Portfolio",
        Live_link: "https://www.deanware.biz",
        tool_used: "JS,HTML,CSS,React,Git,Netlify",
        img: ""
    }
];
const certificate = [
    {
        id: "1",
        name: "Purdue University",
        Description: "This is my BSEE Degree",
        Link: "https://www.purdue.edu",
        img: "images/purdue.svg"
    },
    {
        id: "2",
        name: "DePaul University",
        Description: "This is my MSCS Degree",
        Link: "https://www.depaul.edu",
        img: "images/depaul.svg"
    },
    {
        id: "3",
        name: "GCP Professional Cloud Architect",
        Description: "This is my GCP Cloud Architect Certification",
        Link: "https://www.credential.net/6554ea1d-24f7-4373-acf9-04cdc1504619",
        img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/32391752"
    }
];

const ProgrammingBio = [
    "I am proficient in C/C+, Ruby, Python, C#, Swift, JavaScript, HTML and CSS"
];

const DevBio = [
    "Building responsive web application front-ends using React",
    'Developing mobile applications using Apple native frameworks (UIKit, SwiftUI)',
    'Creating application back-ends in Node, Ruby On Rails, and .NET'
];

const DesignBio = [
    'Designing attractive user interface for mobile and web applications',
    'Customizing logo designs',
    'Editing video'
]


const AboutBio =[
    ' I’m currently adding to my Full Stack Development and Software Architecture skills.',
    ' I’m currently working with Node/Express, React, Mongodb, Javascript, Swift, etc',
    ' I’m a student pursuing {course} in {department} from {university}',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
    ' I am From {City}',
    ' I am available on almost every social media. You can message me'
];
const EducationBio =[
    ' I am a continuous learner. I learn best by doing and also by watching technical videos (YouTube, LinkedIn Learning, Udemy).',
    ' I earned my bachelor\'s degree in Electrical Engineering from Purdue University.',
    ' I earned my master\'s degree in Computer Science from DePaul Univeristy.',
];
const ProjectsBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc'
];
const ContactBio =[
    'I\'m a student pursuing {course} in {department} from {university}',
    ' I am From {City}',
    ' I am available on almost every social media. You can message me'

];

const cloud_infra_architecture_Bio = [
    "Experience working on multiple cloud platforms",
];

const data_Science_Bio = [
    "You can Remove this section in name.js",
    "Developing highly scalable production ready models for various deeplearning and statistical use cases",
    "you can change below skill icons"
];

const Ml_ai_Bio = [
    "You can Remove this section in name.js",
    "Complex quantitative modelling",
    "you can change below skill icons"
];

const RoboticBio = [
    "You can Remove this section in name.js",
    "Complex Robotic modelling",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

const Gamedev_Bio = [
    "You can Remove this section in name.js",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

export {
    greeting,
    socialMedia,
    DevSkill,
    DesignSkill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio,
    BlogData,
    ProgrammingSkill,
    RoboticSkill,
    cloud_infra_architecture_Skill,
    data_Science_Skill,
    Ml_ai_Skill,
    Gamedev_Skill,
    cloud_infra_architecture_Bio,
    data_Science_Bio,
    Ml_ai_Bio,
    Gamedev_Bio,
    ProgrammingBio,
    RoboticBio
};
