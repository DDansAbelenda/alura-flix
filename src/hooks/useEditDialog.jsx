import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { actionConst } from "../util/actionConstants";

function useEditDialog() {
    const { state, dispatch } = useContext(GlobalContext);

    const openDialog = (video, rect) => {
        const payload = {
            video,
            dialogPosition: { top: rect.top + window.scrollY }
        }

        dispatch({
            type: actionConst.MANAGE_OPEN_AND_CLOSE_EDIT_DIALOG,
            payload: { ...payload }
        })
    }


    const closeDialog = () => {
        dispatch({
            type: actionConst.MANAGE_OPEN_AND_CLOSE_EDIT_DIALOG, payload: {
                video: null,
                dialogPosition: { top: 0 }
            }
        })
    }

    const videoSeleccionado = state.videoSeleccionado;

    const isDialogOpen = state.modalAbierto;

    const dialogPosition = state.dialogPosition;
    return { videoSeleccionado, isDialogOpen, openDialog, closeDialog, dialogPosition }
}

export default useEditDialog;