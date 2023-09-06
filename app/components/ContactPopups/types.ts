export interface IContactPopupView {
    title: string;
    children: React.ReactNode;
    onClose(): void;
    heightFit?: boolean;
}