export class ImageConstants {  
    public static readonly wineLogo: IImage = { id: 1, imageUrl: "https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" };
    public static readonly bottomBanner: IImage = { id: 2, imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" };
    public static readonly topBanner: IImage = { id: 3, imageUrl: "https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" };

}

export interface IImage {
    id: number;
    imageUrl: string;
}


