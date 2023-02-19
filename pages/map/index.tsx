import FiltersBlock from "../../components/_map/filters-block/filters-block";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import Mapbox from "../../components/_map/mapbox/mapbox";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import Sidebar from "../../components/_common/sidebar/sidebar";

const MapPage = () => {
    return (
        <>
            <NavBar backgroundColor={colors.pastelGray}/>
            <Div
                zIndex={2}
                height={"100%"}
                width={"100%"}
                position={"relative"}
            >
                <Mapbox size={"full"}/>
                <FiltersBlock/>
                <Sidebar
                    position={"absolute"}
                    top={"0"}
                    right={"0"}
                    sidebarWidth={["400px"]}
                    sidebarType={"static"}
                    color={colors.mapSidebarColor}
                />
            </Div>

        </>
    );
};

export default MapPage;