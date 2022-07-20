import { NumberSymbol } from "@angular/common"

export class MenuConstants {
    public static readonly redwine : IWineMenu = { id: 1, name: "Red wine", url : ""}
    public static readonly whitewine : IWineMenu = { id: 2, name: "White wine", url : ""}
    public static readonly rosewine : IWineMenu = { id: 3, name: "Rose wine", url : ""}
    public static readonly champagne : IWineMenu = { id: 4, name: "Champagne", url : ""}

    static getWineMenuList() : IWineMenu[] {
        return [MenuConstants.redwine, MenuConstants.whitewine, MenuConstants.rosewine, MenuConstants.champagne];
    }

}

export interface IWineMenu {
    id: number;
    name: string;
    url: string;
}