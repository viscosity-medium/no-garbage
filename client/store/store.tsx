import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sidebarReducer as sidebar} from "../components/_common/sidebar/sidebar.slice";
import {moderationDataWindowReducer as moderationDataWindow} from "../components/_moderation/data-window/data-window.slice";
import {filterSwitcherReducer as filterSwitcher} from "../components/_common/filter-switcher/filter-switcher.slice";
import {moderationLocationInfoSidebarSliceReducer as moderationLocationInfoSidebarSlice} from "../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import {navbarReducer as navbar} from "../components/_common/nav-bar/nav-bar.slice";
import {paginationReducer as moderationPagination} from "../components/_moderation/pagination-panel/pagination.slice";
import {filterBlockReducer as filterBlock} from "../components/_map/filters-block/filters-block.slice";
import {loginModalReducer as loginModal} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {locationInfoSidebarReducer as locationInfoSidebar} from "../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";
import {mapboxReducer as mapbox} from "../map/model/mapbox.slice";
import {mapPageReducer as mapPage} from "../pages/map/model/map-page.slice";
import {useDispatch} from "react-redux";
const store = configureStore({
    reducer: combineReducers({
        sidebar,
        moderationDataWindow,
        filterSwitcher,
        filterBlock,
        moderationLocationInfoSidebarSlice,
        navbar,
        moderationPagination,
        loginModal,
        locationInfoSidebar,
        mapbox,
        mapPage

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