// @ts-ignore
export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};


// as <Array<Post>>
export const fetchPosts: any = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            return null;
        }
        
        const posts = await response.json();

        return posts as Array<Post>;
    } catch {
        return null;
    }
};