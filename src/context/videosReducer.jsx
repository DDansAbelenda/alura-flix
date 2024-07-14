import { actionConst } from "../util/actionConstants";

export const initialState = {
  categorias: [],
  videos: [],
  videoSeleccionado: null,
  modalAbierto: false,
  dialogPosition: { top: 0 },
  notifications: [],
  serverNotification: { typeError: "", error: false, isLoad: false }
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
    case actionConst.MANAGE_OPEN_AND_CLOSE_EDIT_DIALOG:
      return {
        ...state,
        videoSeleccionado: action.payload.video,
        modalAbierto: action.payload.video != null ? true : false,
        dialogPosition: action.payload.dialogPosition
      };
    case actionConst.FETCH_VIDEOS:
      return { ...state, videos: action.payload };
    case actionConst.FETCH_CATEGORY:
      return { ...state, categorias: action.payload };
    case actionConst.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case actionConst.SET_SERVER_NOTIFICATION:
      return { ...state, serverNotification: action.payload }
    default:
      return state;
  }
};

