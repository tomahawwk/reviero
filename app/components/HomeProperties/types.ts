export interface IHomeProperties {
    items: IHomeProperty[];
    isList?: boolean;
}

type IHomeProperty = {
    name: string;
    id: string;
    icon: string;
}