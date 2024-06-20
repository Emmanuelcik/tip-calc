import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | {
      type: "add-item";
      payload: { item: MenuItem };
    }
  | { type: "remove-item"; payload: { itemId: MenuItem["id"] } }
  | {
      type: "place-order";
    }
  | {
      type: "add-tip";
      payload: { ammount: number };
    };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};
export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === "add-item") {
    let updatedOrder: OrderItem[] = [];

    const itemExists = state.order.find(
      (item) => item.id === action.payload.item.id
    );

    if (itemExists) {
      updatedOrder = state.order.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedOrder = [...state.order, { ...action.payload.item, quantity: 1 }];
    }
    return {
      ...state,
      order: updatedOrder,
    };
  }
  if (action.type === "remove-item") {
    return {
      ...state,
    };
  }
  if (action.type === "place-order") {
    return {
      ...state,
    };
  }
  if (action.type === "add-tip") {
    return {
      ...state,
    };
  }
};
