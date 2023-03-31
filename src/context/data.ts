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
                id: "java",
                name: "Java",
                color: "#155EA3",
                icon: "SiJava",
                description: "JDK 11, Concurrent, Lambda, Spring Boot, Spring Cloud, Sprint Security.",
            },
            {
                id: "aws",
                name: "AWS",
                icon: "SiAmazonaws",
                color: "#E98629",
                description: "EC2, S3, Lambda, EKS, ECR, IAM, VPC, Route 53.",
            },
            {
                id: "react",
                name: "React.JS",
                color: "#61dafb",
                icon: "SiReact",
                description: "Components, Hooks, Redux, Context, Router, API's.",
            },
            {
                id: "mysql",
                name: "MySQL",
                color: "#115479",
                icon: "SiMysql",
                description: "SQL, Table, Index, Stored Procedure, View",
            },
            {
                id: "mongodb",
                name: "MongoDB",
                color: "#1F7D45",
                icon: "SiMongodb",
                description: "Collections, Index, Replica, Query, API's.",
            },
            {
                id: "redis",
                name: "Redis",
                color: "#C92B24",
                icon: "SiRedis",
                description: "hash, set, Replica, Query, API's.",
            },
            {
                id: "Nginx",
                name: "Nginx",
                icon: "SiNginx",
                color: "#158534",
                description: "openresty, ssl, load balancer, reverse_proxy.",
            },
            {
                id: "vue",
                name: "Vue",
                icon: "SiVuedotjs",
                color: "#3DA875",
                description: "Components, Vuex, Transition, v-model.",
            },
            {
                id: "python",
                name: "Python",
                icon: "SiPython",
                color: "#334495",
                description: "Pandas, Lambda, Tuple",
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
                description: "Express, API's.",
            },
            {
                id: "tailwind",
                name: "Tailwind CSS",
                icon: "SiTailwindcss",
                color: "#38BDF8",
                description: "Animation, Responsive, Media Queries.",
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
        experiences: [{
            name: "BA Techworks",
            date: "2021 Dec | Now",
            role: "DevOps & Scrum Master",
        }, {
            name: "KPMG",
            date: "2018 Sep | 2021 Nov",
            role: "Senior Engineer",
        }, {
            name: "Liandisys",
            date: "2017 Jun | 2018 Sep",
            role: "Junior Engineer",
        }],
        projects: [{
            name: "Location Service",
            date: "2021 Dec | Now",
            role: "DevOps & Scrum Master",
        }, {
            name: "Low-code platform",
            date: "2021 Mar | 2021 Nov",
            role: "Fullstack Engineer",
        }, {
            name: "KCC",
            date: "2020 Oct | 2021 Mar",
            role: "Fullstack Engineer",
        }, {
            name: "Datalake",
            date: "2019 Mar | 2020 Oct",
            role: "Fullstack Engineer & Ops",
        }]
    }
};

export default data;
