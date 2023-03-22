import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sidebarReducer as sidebar} from "../components/_common/sidebar/sidebar-slice";
import {moderationDataWindowReducer as moderationDataWindow} from "../components/_moderation/data-window/data-window-slice";
import {filterSwitcherReducer as filterSwitcher} from "../components/_common/filter-switcher/filter-switcher-slice";
import {wasteBlockReducer as wasteBlock} from "../components/_add-location/waste-block/waste-block-slice";
import {modalReducer as modal} from "../components/_moderation/modal/modal.slice";
import {navbarReducer as navbar} from "../components/_common/nav-bar/nav-bar-slice";
import {paginationReducer as moderationPagination} from "../components/_moderation/pagination-panel/pagination-slice";
import {filterBlockReducer as filterBlock} from "../components/_map/filters-block/filters-block-slice";
import {loginModalReducer as loginModal} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {useDispatch} from "react-redux";
const store = configureStore({
    reducer: combineReducers({
        sidebar,
        moderationDataWindow,
        filterSwitcher,
        filterBlock,
        wasteBlock,
        modal,
        navbar,
        moderationPagination,
        loginModal
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export {
    store
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type TRootState = ReturnType<typeof store.getState>