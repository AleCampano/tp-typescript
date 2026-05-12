export interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface Post {
    id: string;
    imageUrl: string;
    username: string;
    userImage: string;
    likes: number;
    description: string;
}

export interface UserProfile {
    username: string;
    fullName: string;
    bio: string;
    postsCount: number;
    followers: number;
    following: number;
    profilePicture: string;
}