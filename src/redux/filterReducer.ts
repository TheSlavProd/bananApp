import ilus1 from "../Assets/illustration.png";
import ilus2 from "../Assets/illus2.png";
import ilus3 from "../Assets/illus3.png";
import ilus4 from "../Assets/illus4.png";
import { ImageTypeEnum, IImage } from "../types/globalTypes";
import { stat } from "fs";

type defaultStateType = {
  images: IImage[];
  items: any;
};

interface IActionIMG {
  type: string;
  payload: any;
}

const defaultState: defaultStateType = {
  items: [],
  images: [
    {
      id: 1,
      url: ilus1,
      favorite: true,
      rating: 5400,
      date: "01.02.2022",
      type: ImageTypeEnum.Popular,
    },
    {
      id: 2,
      url: ilus2,
      type: ImageTypeEnum.New,
    },
    {
      id: 3,
      url: ilus3,
      type: ImageTypeEnum.Favorite,
    },
    {
      id: 4,
      url: ilus4,
      type: ImageTypeEnum.Favorite,
    },
  ],
};

const GET_ITEMS = "GET_ITEMS";
const LOAD_MORE = "LOAD_MORE";
export function filterReducer(state = defaultState, action: IActionIMG): any {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_MORE:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    default:
      return state;
  }
}
