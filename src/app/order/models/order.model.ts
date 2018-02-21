import { OrderRecord } from './order-record.model';

export class Order {
    constructor(
        public orderId: number,
        public products: OrderRecord[],
        public deliveryAddress: string,
        public phone: string,
        public confirmedByCustomer: boolean,
        public confirmedByAdmin: boolean
    ) {
    }
}
