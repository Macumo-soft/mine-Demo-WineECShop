
export class SelectConstants {
    public static readonly topRated : ISelect = { id: 1, title: "Top rated", value : "1"}
    public static readonly recommended : ISelect = { id: 2, title: "Recommended", value : "2"}
    public static readonly sale : ISelect = { id: 3, title: "Sale", value : "3"}
    public static readonly new : ISelect = { id: 4, title: "New", value : "4"}

    static getSelectList() : ISelect[] {
        return [SelectConstants.topRated, SelectConstants.recommended, SelectConstants.sale, SelectConstants.new];
    }

}

export interface ISelect {
    id: number;
    title: string;
    value: string;
}