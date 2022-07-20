export class IconConstants {  
    public static readonly github: IIcon = { id: 1, name: "github", url: "https://github.com/" };
    public static readonly twitter: IIcon = { id: 2, name: "twitter", url: "https://twitter.com/" };
    public static readonly instagram: IIcon = { id: 3, name: "instagram", url: "https://instagram.com/" };
    public static readonly wordpress: IIcon = { id: 4, name: "wordpress", url: "https://wordpress.com/" };
    public static readonly star: IIcon = { id: 5, name: "star", url: "" };
    public static readonly starHalf: IIcon = { id: 5, name: "star-half-full", url: "" };

    static getIcons(): IIcon[] {
        return [IconConstants.github, IconConstants.twitter, IconConstants.instagram, IconConstants.wordpress];
    }
}

export interface IIcon {
    id: number;
    name: string;
    url: string;
}


