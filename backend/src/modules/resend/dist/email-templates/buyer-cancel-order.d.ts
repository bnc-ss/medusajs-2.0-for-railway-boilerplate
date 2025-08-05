interface EmailTemplateProps {
    data: {
        order_address: string;
        order: {
            id: string;
            display_id?: string;
            items: any[];
            item?: any;
        };
    };
}
export declare const BuyerCancelOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>>;
export {};
//# sourceMappingURL=buyer-cancel-order.d.ts.map