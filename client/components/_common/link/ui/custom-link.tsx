import Link from 'next/link'
import {FC, ReactNode, useState} from "react";
import LinkFiller from "./link-filler/link-filler";
import colors from "../../../../styles/globals/colors";


export interface ICustomLink {
    margin?: string
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
    children?: ReactNode
}

const CustomLink: FC<ICustomLink> = ({
    margin,
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
    textDecoration = "none",
    children
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
                    margin,
                    width,
                    height,
                    color: isHovered ? fontHoverColor : fontColor
                }}
                onMouseEnter={changeIsHovered}
                onMouseLeave={changeIsHovered}
            >
                {
                    children ? (children) : (
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
                    )
                }
            </Link>
        ) : externalHref ? (
            <a
                target="_blank"
                rel="noreferrer"
                href={externalHref}
                style={{
                    margin,
                    width,
                    height,
                    color: isHovered ? fontHoverColor : fontColor
                }}
            >
            {
                children ? (children) : (
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
                )
            }
            </a>
        ): null
    )
}

export { CustomLink };