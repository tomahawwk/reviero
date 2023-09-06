export interface IProductCrumbs {
    next: IProductCrumb;
    prev: IProductCrumb;
    count: IProductCrumbCount;
    loading?: boolean;
}

type IProductCrumb = {
    text: string;
    link: string;
}

type IProductCrumbCount = {
    text: string;
    from: number;
    total: number;
}