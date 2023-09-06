export interface IProductInfo {
    isCard: boolean;
    minPrice: number;
    maxPrice?: number;
    showPercent?: boolean;
    annualPercent: {
        min: number;
        max?: number;
    }
}