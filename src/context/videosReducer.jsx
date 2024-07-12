import { actionConst } from "../util/actionConstants";

export const initialState = {
  categorias: [],
  videos: [],
  videoSeleccionado: null,
  modalAbierto: false,
  dialogPosition: { top: 0 }
};

export const videosReducer = (state, action) => {
  switch (action.type) {
    case actionConst.CREATE_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      }
    case actionConst.UPDATE_VIDEO:
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id === action.payload.id ? action.payload : video
        ),
      }
    case actionConst.DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
      }
    case actionConst.VIEW_VIDEO:
      return;
    case actionConst.MANAGE_OPEN_AND_CLOSE_EDIT_DIALOG:
      return {
        ...state,
        videoSeleccionado: action.payload.video,
        modalAbierto: action.payload.video != null ? true : false,
        dialogPosition: action.payload.dialogPosition
      };
    case actionConst.FETCH_VIDEOS:
      console.log("FETCH VIDEOS")
      return { ...state, videos: action.payload };
    case actionConst.FETCH_CATEGORY:
      console.log("FETCH CATEGORY")
      return { ...state, categorias: action.payload };
    default:
      return state;
  }
};

