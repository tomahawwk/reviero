export interface IApartmentProperties {
    items: IApartmentProperty[];
    isLarge?: boolean;
}

type IApartmentProperty = {
    icon?: string;
    text?: string;
    id: number;
}
