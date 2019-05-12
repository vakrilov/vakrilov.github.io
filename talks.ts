declare type Flag = "🇺🇸" | "🇧🇬" | "🇳🇱";
interface Talk {
    title: string;
    conference: string;
    city: string;
    date: string;
    flag: Flag;
    slides?: string;
    video?: string;
}



export const talks: Talk[] = [
    {
        title: "Using Redux For Building Applications With NativeScript Angular",
        conference: "NativeScript Developer Day 2016",
        city: "Boston, USA",
        date: "October 2016",
        flag: "🇺🇸",
        slides: "https://slides.com/alexandervakrilov/nativescriptredux",
        video: "https://www.youtube.com/watch?v=jH5I8ZPzXWE",
    },
    {
        title: "Optimizing the Startup time of NativeScript Angular Apps (with Stanimira Vlaeva)",
        conference: "NativeScript Developer Day EU 2017",
        city: "Rotterdam, Netherlands",
        date: "October 2017",
        flag: "🇳🇱",
        slides: "https://docs.google.com/presentation/d/1i7kbdMMn-oe4AME5d6PN9SAKTPCaEoIEU2NN9bhG660/edit?usp=sharing",
        video: "https://www.youtube.com/watch?v=jakxE0p4sFg",
    },
    {
        title: "NativeScript Angular 101",
        conference: "DevReach 2017",
        city: "Sofia, Bulgaria",
        date: "14th November 2017",
        flag: "🇧🇬",
        slides: "https://docs.google.com/presentation/d/1QZ_iWU4TraGX4Q_ALANImAsoB_purjB8d08qSqyw5L0/edit?usp=sharing",
        video: "https://www.youtube.com/watch?v=kSKtPEflkxU",
    },
    {
        title: "NativeScript Angular 101",
        conference: "JSTalks Bulgaria 2017",
        city: "Sofia, Bulgaria",
        date: "18th November 2017",
        flag: "🇧🇬",
        slides: "https://docs.google.com/presentation/d/1DovFhYb2Se6GMIzEGjJKNCzEJZRKH2el-vkxcWK6LcM/edit?usp=sharing",
    },
    {
        title: "React-Angular-Vue Architecture Geek Out",
        conference: "Dev.bg JavaScript User-group",
        city: "Sofia, Bulgaria",
        date: "21st November 2018",
        flag: "🇧🇬",
        slides: "https://docs.google.com/presentation/d/1J_hDakS85_aZhvUUqIgDRWxF_LayoD5AoolH1MbHOEM/edit?usp=sharing",
    },
    {
        title: "Thoughts on Change Detection in Angular, React and Vue",
        conference: "NG Christmas",
        city: "Sofia, Bulgaria",
        date: "11th December 2018",
        flag: "🇧🇬",
        slides: "https://docs.google.com/presentation/d/1PJhz6t__2Tvs0LA29w_ka8CYA_NI9zDQAwqXz_VBKqg/edit?usp=sharing",
    },
    {
        title: "State Management for NativeScript Apps",
        conference: "NativeScript Developer Day EU 2019",
        city: "Amsterdam, Netherlands",
        date: "12nd April 2019",
        flag: "🇳🇱",
        slides: "https://docs.google.com/presentation/d/1kHjDQf8xA-FHfIOm3rn9OkGLRnJMW6N2k1ajKwbQXFQ/edit?usp=sharing",
        video: "https://www.youtube.com/watch?v=SVXUGVsQRHw"
    },
    {
        title: "React-Angular-Vue Architecture Geek Out",
        conference: "Astea Conference 2019",
        city: "Sofia, Bulgaria",
        date: "18th May 2019",
        flag: "🇧🇬",
        slides: "https://docs.google.com/presentation/d/1Au4wnbpXZFmjb3o3dD1VcHasSgYf8mkjpF_xsKK95Kw/edit?usp=sharing",
    },
]