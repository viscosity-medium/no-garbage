import {SidebarSchema} from "../components/_common/sidebar/model/sidebar.slice";
import {FilterSwitchSchema} from "../components/_common/filter-switch/model/filter-switch.slice";
import {NavbarSchema} from "../components/_common/nav-bar/model/nav-bar.slice";
import {PaginationSchema} from "../components/_moderation/pagination-panel/model/pagination.slice";
import {FilterBlockSchema} from "../components/_map/filters-block/model/filters-block.slice";
import {
    LocationInfoSidebarSchema
} from "../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.types";
import {MapboxSchema} from "../map/model/mapbox.types";
import {
    ModerationLocationInfoSidebarSchema
} from "../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.types";
import {MapPageSchema} from "../pages/map/model/map-page.slice";
import {MainPageSchema} from "../pages/main-page/model/main-page.slice";
import {LoginFormSchema} from "../components/_common/login-form/model/login-form.types";
import {ModalWindowSchema} from "../components/_common/modal-window/model/modal-window.slice";
import {ModerationDataWindowSchema} from "../components/_moderation/data-window/model/data-window.types";

export interface StateSchema {
    sidebar: SidebarSchema
    moderationDataWindow: ModerationDataWindowSchema
    filterSwitcher: FilterSwitchSchema
    moderationLocationInfoSidebarSlice: ModerationLocationInfoSidebarSchema
    navbar: NavbarSchema
    moderationPagination: PaginationSchema
    filterBlock: FilterBlockSchema
    loginModal: LoginFormSchema
    mapbox: MapboxSchema
    locationInfoSidebar: LocationInfoSidebarSchema
    loginForm: LoginFormSchema
    modalWindow: ModalWindowSchema

    mapPage: MapPageSchema
    mainPage: MainPageSchema
}