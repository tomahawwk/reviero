export type IMenu = {
    list?: IMenuItem[];
    isHeader?: boolean;
}

export type IMenuItem = {
    text: string;
    url: string;
}