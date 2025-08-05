interface EmailTemplateProps {
    data: {
        user_name: string;
        order_address: string;
        order_id: string;
        order: {
            display_id: string;
            items: any[];
            currency_code: string;
            shipping_methods: {
                amount: number;
                name: string;
            }[];
            total: number;
            email: string;
            shipping_address: {
                first_name: string;
                last_name: string;
                company: string;
                address_1: string;
                address_2: string;
                city: string;
                province: string;
                postal_code: string;
                phone: string;
            };
        };
    };
}
export declare const BuyerNewOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>>;
export {};
//# sourceMappingURL=buyer-new-order.d.ts.map