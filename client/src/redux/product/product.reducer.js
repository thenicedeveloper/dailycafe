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
  productItems: {}
};

const productReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS:
      let title = action.payload;
      // let j = title.toUpperCase();
      switch (title.toUpperCase()) {
        case "HOT COFFEES":
          state.productItems = Coffees;
          break;
        case "HOT TEAS":
          // cafeProducts = Teas;
          state.productItems = Teas;
          break;
        case "HOT DRINKS":
          // this.setState({ goods: HotDrinks });
          // cafeProducts =  HotDrinks;
          state.productItems =  HotDrinks;
          break;
        case "COLD COFFEES":
          // this.setState({ goods: ColdCoffees });
          // cafeProducts =  ColdCoffees;
          state.productItems =  ColdCoffees;
          break;
        case "COLD DRINKS":
          state.productItems = ColdDrinks;
          break;
        case "JUICES":
          state.productItems =  Juices;
          break;
        case "Baked Goods":
          console.log("Baked goods" + Bakegoods);
          state.productItems =  Bakegoods;
          break;
        case "SNACKS":
          state.productItems =  Snacks;
          break;
        case "YOGURTS":
          state.productItems =  Yogurts;
          break;
        default:
          break;
      }
      // console.log("Productitems " + JSON.stringify(state.productItems));
      console.log("default " + Bakegoods);
      return {state};
    default:
      return {state};
  }
};

export default productReducer;
