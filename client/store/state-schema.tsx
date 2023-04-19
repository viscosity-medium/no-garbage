import {SidebarSchema} from "../components/_common/sidebar/sidebar.slice";
import {FilterSwitchSchema} from "../components/_common/filter-switcher/filter-switcher.slice";
import {NavbarSchema} from "../components/_common/nav-bar/nav-bar.slice";
import {PaginationSchema} from "../components/_moderation/pagination-panel/pagination.slice";
import {ModerationDataWindowSchema} from "../components/_moderation/data-window/data-window.slice";
import {FilterBlockSchema} from "../components/_map/filters-block/filters-block.slice";
import {LoginModalSchema} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {ModalSchema} from "../components/_moderation/modal/model/modal.types";
import {MapboxSchema} from "../map/model/mapbox.types";

export interface StateSchema {
    sidebar: SidebarSchema
    moderationDataWindow: ModerationDataWindowSchema
    filterSwitcher: FilterSwitchSchema
    modal: ModalSchema
    navbar: NavbarSchema
    moderationPagination: PaginationSchema
    filterBlock: FilterBlockSchema
    loginModal: LoginModalSchema
    mapbox: MapboxSchema
}