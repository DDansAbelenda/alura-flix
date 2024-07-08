import { actionConst } from "../util/actionConstants";

export const initialState = {
  categorias: [],
  videos: [],
  videoSeleccionado: null,
  modalAbierto: false
};

export const videosReducer = (state, action) => {
  switch (action.type) {
    case actionConst.CREATE_VIDEO:
      return;
    case actionConst.UPDATE_VIDEO:
      return;
    case actionConst.DELETE_VIDEO:
      return;
    case actionConst.VIEW_VIDEO:
      return;
    case actionConst.OPEN_EDIT_POPUP:
      console.log("OPEN EDIT POPUP")
      return {
        ...state, videoSeleccionado: action.payload, modalAbierto: true
      };
    case actionConst.CLOSE_EDIT_POPUP:
      console.log("CLOSE EDIT POPUP")
      return;
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

/**
 * 
 * const initialState = {
    consulta: '',
    fotosDeGaleria: [],
    fotoSeleccionada: null,
    modalAbierto: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload };
        case 'SET_FOTOS_DE_GALERIA':
            return { ...state, fotosDeGaleria: action.payload };
        case 'SET_FOTO_SELECCIONADA':
            return {
                ...state,
                fotoSeleccionada: action.payload,
                modalAbierto: action.payload != null ? true : false
            };
        case 'ALTERNAR_FAVORITO':
            const fotosDeGaleria = state.fotosDeGaleria.map(fotoDeGaleria => {
                return {
                    ...fotoDeGaleria,
                    favorita: fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita
                }
            });
            if (action.payload.id === state.fotoSeleccionada?.id) {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,
                    fotoSeleccionada: {
                        ...state.fotoSeleccionada, favorita: !state.fotoSeleccionada.favorita
                    }
                }
            } else {
                return {
                    ...state, fotosDeGaleria: fotosDeGaleria
                }
            }
        default:
            return state;
    }
};
 */
