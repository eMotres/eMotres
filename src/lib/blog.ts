export interface BlogPostData {
    imageUrl: string;
    category: string;
    title: string;
    excerpt: string;
    postUrl: string;
}

const posts: BlogPostData[] = [
    {
        imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/comparsion-qsbifcxazpnwcmim2cqcgafaf8bvoxj6wfchut4m7u.webp",
        category: "Comparation",
        title: "Inrunner motor with tangential magnets polarization vs Outrunner with radial magnets polarization",
        excerpt: "The torque equation in a synchronous motor or generator is directly proportional to...",
        postUrl: "https://emotres.com/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/",
    },
    {
        imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/motres-cooling-system-qsbf3fol1nhx3mpnc0kvu1v60hf0n4g1euzcmwxu2i.webp",
        category: "Comparation",
        title: "Comparation Radial GO and Axial motors technology",
        excerpt: "There is a powerful promotion of the superiority of the axial electric motor...",
        postUrl: "https://emotres.com/radial-go-and-axial-motors-technology/",
    },
    {
        imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/electric-motors-qsbmht61tg579fsdw5orftzqdghnz7xmpaiyntzere.webp",
        category: "Terminology",
        title: "Technology",
        excerpt: "Table of Contents Tangential magnets polarization The tangential polarization of our magnets significantly...",
        postUrl: "https://emotres.com/technology/",
    },
];

export function getPosts(category?: string): BlogPostData[] {
    if (!category) return posts;
    return posts.filter(post => post.category === category);
}

export function getCategories(): string[] {
    return Array.from(new Set(posts.map(post => post.category)));
}
