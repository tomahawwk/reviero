export interface ISliderRange {
    max: number;
    min: number;
    value: number;
    step?: number;
    setValue(value: number): void;
}