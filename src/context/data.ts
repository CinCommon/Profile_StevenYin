export interface Data {
    user: {
        name: string,
        email: string,
        socialNetworks: Icon[],
        technologies: Icon[],
        introduction: string[],
        information: GeneralItem[],
        summary: GeneralItem[],
        experiences: Experience[],
        projects: Experience[]
    };
}

export interface GeneralItem {
    label: string;
    value: number | string;
    icon?: Icon;
}

export interface Icon {
    name: string,
    icon: string,
    id: string,
    url?: string,
    color?: string,
    description?: string
}

export interface Experience {
    name: string;
    date: string;
    role: string;
    description?: string;
    link?: string
}

const data: Data = {
    user: {
        name: "Steven Yin",
        email: "yinzifancn@gmail.com",
        socialNetworks: [
            {
                id: "facebook",
                name: "facebook",
                icon: "FaFacebook",
                url: "https://www.facebook.com/CinCommon/",
            },
            {
                id: "twitter",
                name: "twitter",
                icon: "FaTwitter",
                url: "https://twitter.com/CommonCin",
            },
            {
                id: "linkedin",
                name: "linkedin",
                icon: "FaLinkedinIn",
                url: "https://www.linkedin.com/in/steven-yin/",
            },
            {
                id: "github",
                name: "github",
                icon: "FaGithub",
                url: "https://github.com/CinCommon",
            },
        ],
        technologies: [
            {
                id: "react",
                name: "React.JS",
                color: "#61dafb",
                icon: "SiJava",
                description: "Components, Hooks, Reduce, Context, Router, Listas, API's.",
            },
            {
                id: "angular",
                name: "Angular",
                icon: "SiPython",
                color: "#C4002B",
                description: "Components, Renderização, Interface, Diretivas, Listas.",
            },
            {
                id: "next",
                name: "Next.JS",
                icon: "SiNextdotjs",
                color: "#FFFFFF",
                description: "Components, Nested Routes, API's.",
            },
            {
                id: "typescript",
                name: "Typescript",
                icon: "SiTypescript",
                color: "#3178C6",
                description: "Interface, Type, Props.",
            },
            {
                id: "node",
                name: "Node.JS",
                icon: "SiNodedotjs",
                color: "#44883e",
                description: "Rotas, Express, API's.",
            },
            {
                id: "js",
                name: "JavaScript",
                icon: "DiJsBadge",
                color: "#f0db4f",
                description: "DOM, Functions, Objects, API's, Local Storage, JSON.",
            },
            {
                id: "jquery",
                name: "jQuery",
                icon: "SiJquery",
                color: "#0769ad",
                description: "Eventos, Ajax, JSON, Local Storage.",
            },
            {
                id: "tailwind",
                name: "Tailwind CSS",
                icon: "SiTailwindcss",
                color: "#38BDF8",
                description: "Animações, Responsividade, Media Queries.",
            },
            {
                id: "sass",
                name: "Sass",
                icon: "DiSass",
                color: "#CD6799",
                description: "Variables, Mixins, Includes.",
            },
            {
                id: "bootstrap",
                name: "Bootstrap",
                icon: "SiBootstrap",
                color: "#6E2CF1",
                description: "Grids, Cards, Alerts, Tables",
            },
        ],
        introduction: [
            "Hello, I'm Steven, and I am a DevOps and Scrum Master with expertise in a range of technologies, including Java, React, Vue, Python, Kotlin, Linux, AWS, and Terraform. With a passion for continuous improvement and a commitment to best practices, I help organizations achieve their development goals through effective collaboration and agile methodologies.",
            "In addition to my technical skills, I am also a lifelong learner who enjoys reading, working out, getting tattoos, driving, and sampling various types of coffee. I believe that a healthy body and mind are crucial for success in any field, and I enjoy exploring new experiences that broaden my horizons.",
            "I'm also a language and culture enthusiast and enjoy learning new languages as well as experiencing different cultures, I can speak Chinese, English and Japanese, and I can read German, and Esperanto, enabling me to work effectively with diverse teams and stakeholders around the world. I believe that effective communication is key to success in any project, and I take pride in my ability to bridge cultural and linguistic barriers to create a positive and productive work environment.",
            "When I'm not working, I enjoy cheering on my favorite football team, Liverpool. I find that my passion for sports translates well to my work in technology, as both require discipline, focus, and teamwork to succeed.",
            "Let's connect and explore how we can work together to achieve success."
        ],
        summary: [
            {label: "Freelancers", value: 3},
            {label: "Project", value: 14},
            {label: "Commits", value: 600},
            {label: "Certifications", value: 4},],
        information: [
            {
                label: "Telephone",
                value: "(86) 15751837892",
                icon: {
                    id: "phone-icon",
                    icon: "AiFillPhone",
                    name: "phone"
                }
            },
            {
                label: "E-mail",
                value: "yinzifancn@gmail.com",
                icon: {
                    id: "email-icon",
                    icon: "AiOutlineMail",
                    name: "email"
                }
            },
            {
                label: "Location",
                value: "Nanjing, China",
                icon: {
                    id: "pin-icon",
                    icon: "AiFillEnvironment",
                    name: "location"
                }
            },
        ],
        experiences: [],
        projects: []
    }
};

export default data;
