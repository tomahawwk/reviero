export interface ITextField {
    onChange?(e: any): void;
    label: string;
    placeholder?: string;
    className?: string;
    type?: string;
    step?: number;
    min?: number;
    value?: any;
}