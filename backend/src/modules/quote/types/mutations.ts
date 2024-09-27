import { QuoteDTO } from "./common";

export interface CreateQuoteDTO
  extends Omit<Partial<QuoteDTO>, "id" | "createdAt" | "updatedAt"> {
  cart_id: string;
  draft_order_id: string;
  order_change_id: string;
}

export interface UpdateQuoteDTO extends Partial<QuoteDTO> {
  id: string;
}

export interface DeleteQuoteDTO {
  id: string;
}
