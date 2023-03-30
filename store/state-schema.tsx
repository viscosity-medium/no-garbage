import {ISidebarSchema} from "../components/_common/sidebar/sidebar-slice";
import {IFilterSwitchSchema} from "../components/_common/filter-switcher/filter-switcher-slice";
import {INavbarSchema} from "../components/_common/nav-bar/nav-bar-slice";
import {IPaginationSchema} from "../components/_moderation/pagination-panel/pagination-slice";
import {IModerationDataWindowSchema} from "../components/_moderation/data-window/data-window-slice";
import {IFilterBlock} from "../components/_map/filters-block/filters-block-slice";
import {LoginModalSlice} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {IModalSchema} from "../components/_moderation/modal/model/modal.types";

export interface IStateSchema {
    sidebar: ISidebarSchema
    moderationDataWindow: IModerationDataWindowSchema
    filterSwitcher: IFilterSwitchSchema
    modal: IModalSchema
    navbar: INavbarSchema
    moderationPagination: IPaginationSchema,
    filterBlock: IFilterBlock
    loginModal: LoginModalSlice
}