export interface BlogPostData {
    imageUrl: string;
    category: string;
    title: string;
    excerpt: string;
    postUrl: string;
}

const posts: BlogPostData[] = [
    {
        imageUrl: "/images/outranner-vs-inranner-1024x479.webp",
        category: "Comparison",
        title: "Inrunner motor with tangential magnets polarization vs Outrunner with radial magnets polarization",
        excerpt: "The torque equation in a synchronous motor or generator is directly proportional to the stator field strength, rotor field strength and the sine of angle between them...",
        postUrl: "/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization",
    },
    {
        imageUrl: "/images/motres-cooling-system.png",
        category: "Comparison",
        title: "Radial GO and Axial motors technology",
        excerpt: "There is a powerful promotion of the superiority of the axial electric motor. We decided to do a comparison between the radial motor with GO steel and the axial motor...",
        postUrl: "/radial-go-and-axial-motors-technology",
    },
    {
        imageUrl: "/images/Tangential-magnetic-polarization.webp",
        category: "Technology",
        title: "Patented Motor Technology",
        excerpt: "Tangential magnet polarization, grain-oriented steel, rectangular copper wire, IP65 sealing, and high-efficiency cooling — the five technologies inside every eMotres motor...",
        postUrl: "/technology",
    },
];

const zhPosts: BlogPostData[] = [
    {
        imageUrl: "/images/outranner-vs-inranner-1024x479.webp",
        category: "对比分析",
        title: "切向极化磁体内转子电机 vs 径向极化磁体外转子电机",
        excerpt: "同步电机或发电机的扭矩方程与定子磁场强度、转子磁场强度以及两者夹角的正弦值成正比……",
        postUrl: "/zh/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/",
    },
    {
        imageUrl: "/images/motres-cooling-system.png",
        category: "对比分析",
        title: "径向 GO 钢电机与轴向电机技术",
        excerpt: "业界大力宣传轴向电机的优越性。我们决定对采用取向硅钢（GO 钢）的径向电机与轴向电机做一次对比……",
        postUrl: "/zh/radial-go-and-axial-motors-technology/",
    },
    {
        imageUrl: "/images/Tangential-magnetic-polarization.webp",
        category: "技术",
        title: "专利电机技术",
        excerpt: "切向磁化、取向硅钢、扁平铜线、IP65 密封与高效散热——每一台 eMotres 电机内部的五项核心技术……",
        postUrl: "/zh/technology/",
    },
];

export type BlogLocale = 'en' | 'zh';

function postsFor(locale: BlogLocale): BlogPostData[] {
    return locale === 'zh' ? zhPosts : posts;
}

export function getPosts(category?: string, locale: BlogLocale = 'en'): BlogPostData[] {
    const list = postsFor(locale);
    if (!category) return list;
    return list.filter(post => post.category === category);
}

export function getCategories(locale: BlogLocale = 'en'): string[] {
    return Array.from(new Set(postsFor(locale).map(post => post.category)));
}
