import ProductActionTypes from "./product.types";
// Temp data ************************
import Coffees from "../../data/Coffees";
import Teas from "../../data/Teas";
import Bakegoods from "../../data/Bakegoods";
import ColdDrinks from "../../data/ColdDrinks";
import ColdCoffees from "../../data/ColdCoffees";
import HotDrinks from "../../data/HotDrinks";
import Juices from "../../data/Juices";
import Snacks from "../../data/Snacks";
import Yogurts from "../../data/Yogurts";
// **********************************

const INITIAL_STATE = {
  productItems: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS:
      let title = action.payload;

      switch (title.toUpperCase()) {
        case "HOT COFFEES":
          return Coffees;
        case "HOT TEAS":
          return Teas;
        case "HOT DRINKS":
          return HotDrinks;
        case "COLD COFFEES":
          return ColdCoffees;
        case "COLD DRINKS":
          return ColdDrinks;
        case "JUICES":
          return Juices;
        case "BAKED GOODS":
          return Bakegoods;
        case "SNACKS":
          return Snacks;
        case "YOGURTS":
          return Yogurts;
        default:
          return state;
      }

    // case ProductActionTypes.LIST_PRODUCTS:
      // return state;
    default:
      return state;
  }
};

export default productReducer;
