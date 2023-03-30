export interface Data {
    user: {
        name: string,
        email: string,
        socialNetworks: {
            name: string,
            icon: string,
            url: string
        }[]
    };
}

const data: Data = {
    user: {
        name: "Steven Yin",
        email: "yinzifancn@gmail.com",
        socialNetworks: [
            {
                name: "facebook",
                icon: "FaFacebook",
                url: "https://www.facebook.com/CinCommon/",
            },
            {
                name: "twitter",
                icon: "FaTwitter",
                url: "https://twitter.com/CommonCin",
            },
            {
                name: "linkedin",
                icon: "FaLinkedinIn",
                url: "https://www.linkedin.com/in/steven-yin/",
            },
            {
                name: "github",
                icon: "FaGithub",
                url: "https://github.com/CinCommon",
            },
        ]
    }
};

export default data;
