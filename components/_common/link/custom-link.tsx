import Link from 'next/link'
import {FC, useState} from "react";
import {StyledCustomLink} from "./custom-link.styled";
import CustomDiv from "../custom-div/custom-div";
import CustomImage from "../custom-image/custom-image";
import LinkFiller from "./link-filler/link-filler";
import colors from "../../../styles/globals/colors";


export interface ICustomLink {
    padding?: string
    linkName?: string
    href?: string
    externalHref?: string
    color?: string
    backgroundColor?: string
    fontColor?: string
    fontHoverColor?: string
    backgroundImage?: string
    width: string
    height?: string
    scale?: boolean
    size?: string
    weight?: number
    textDecoration?: string
}

const CustomLink: FC<ICustomLink> = ({
    padding= "0 10px",
    linkName="",
    width = "100%",
    height = "100%",
    externalHref,
    href,
    color,
    backgroundColor,
    fontColor = colors.white,
    fontHoverColor,
    backgroundImage,
    scale,
    size= "16px",
    weight = 600,
    textDecoration = "none"
}) => {

    const [isHovered, setIsHovered] = useState(false);
    const changeIsHovered = () => {
        setIsHovered(prevState => !prevState);
    }

    return (
        href ? (
            <Link
                href={href}
                style={{
                    width,
                    height,
                    color: isHovered ? fontHoverColor : fontColor
                }}
                onMouseEnter={changeIsHovered}
                onMouseLeave={changeIsHovered}
            >
                <LinkFiller
                    padding={padding}
                    width={width}
                    height={height}
                    linkName={linkName}
                    backgroundColor={backgroundColor}
                    backgroundImage={backgroundImage}
                    scale={scale}
                    size={size}
                    weight={weight}
                    textDecoration={textDecoration}
                />
            </Link>
        ) : externalHref ? (
            <a
                target="_blank"
                rel="noreferrer"
                href={externalHref}
            >
            <LinkFiller
                    padding={padding}
                    width={width}
                    height={height}
                    linkName={linkName}
                    backgroundColor={backgroundColor}
                    backgroundImage={backgroundImage}
                    scale={scale}
                    size={size}
                    weight={weight}
                    textDecoration={textDecoration}
                />
            </a>
        ): null
    )
}

export default CustomLink