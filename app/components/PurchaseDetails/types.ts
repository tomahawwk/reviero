export type IPurchaseItem = {
    title: string;
    children: React.ReactNode;
    summary: string;
}

export type IPurchasePacket = {
    name: string;
    cost: number;
}