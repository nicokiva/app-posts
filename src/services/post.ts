export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};


export const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            return null;
        }
        
        const posts = (await response.json() as Array<Post>);

        return posts;
    } catch {
        return null;
    }
};