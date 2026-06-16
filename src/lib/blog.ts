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

export function getPosts(category?: string): BlogPostData[] {
    if (!category) return posts;
    return posts.filter(post => post.category === category);
}

export function getCategories(): string[] {
    return Array.from(new Set(posts.map(post => post.category)));
}
