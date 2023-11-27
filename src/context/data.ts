export interface Data {
    user: {
        name: string,
        email: string,
        resume: string,
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
        name: "Steven Zifan Yin",
        email: "yinzifancn@gmail.com",
        resume: "https://stevenyinbuckets.s3.ap-southeast-2.amazonaws.com/SE-CV-ZifanYin.pdf",
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
                url: "https://twitter.com/StevenYinKop/",
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
                url: "https://github.com/StevenYinKop/",
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
            "Hello, I'm Steven.",
            "Accomplished Software Engineer with 6+ years’ experience specializing in Java, Node.js, React.js, Vue.js, AWS, Python, and DevOps. Proven history of delivering complex solutions from design through implementation leveraging strong communication and analytical abilities.",
            "Results-driven professional with a customer-centric mindset, excelling in complex software projects. Adaptable in dynamic environments, skilled in Scaled Agile Framework (SAFe). Strong communication, attention to detail, and creative problem-solving.",
            "Proactive team player in high-performing engineering teams, contributing analytical prowess and creativity. Actively pursues continuous improvement and learning new technologies. Recognized for customer-focused solutions and engagement throughout the software development lifecycle.",
            "Motivated, results-oriented individual committed to excellence in team settings. Thrives in fast-paced, Agile environments, ensuring successful project outcomes."
        ],
        summary: [
            {label: "Freelancers", value: 3},
            {label: "Project", value: 14},
            {label: "Commits", value: 600},
            {label: "Certifications", value: 4},],
        information: [
            {
                label: "Telephone",
                value: "(61) 0413 271 608",
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
                value: "Melbourne, Australia",
                icon: {
                    id: "pin-icon",
                    icon: "AiFillEnvironment",
                    name: "location"
                }
            },
        ],
        experiences: [{
            name: "BA Techworks",
            date: "2021 Dec | 2023 Oct",
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
            date: "2021 Dec | 2023 Oct",
            role: "DevOps & Scrum Master",
        }, {
            name: "KPMG Smart Application Factory",
            date: "2021 Mar | 2021 Nov",
            role: "Fullstack Engineer",
        }, {
            name: "KPMG Collaboration Centre",
            date: "2020 Oct | 2021 Mar",
            role: "Fullstack Engineer",
        }, {
            name: "KPMG Datalake",
            date: "2019 Mar | 2020 Oct",
            role: "Fullstack Engineer & DevOps",
        }]
    }
};

export default data;
