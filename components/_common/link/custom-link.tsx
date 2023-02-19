import Link from 'next/link'
import {FC} from "react";
import {StyledCustomLink} from "./custom-link.styled";
import CustomDiv from "../custom-div/custom-div";
import CustomImage from "../custom-image/custom-image";
import LinkFiller from "./link-filler/link-filler";


export interface ICustomLink {
    padding?: string
    linkName?: string
    href?: string
    externalHref?: string
    background?: string
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
    background,
    backgroundImage,
    scale,
    size= "16px",
    weight = 400,
    textDecoration = "none"
}) => {
    return (
        href ? (
            <Link
                href={href}
                style={{
                    width,
                    height
                }}
            >
                <LinkFiller
                    padding={padding}
                    width={width}
                    height={height}
                    linkName={linkName}
                    background={background}
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
                    background={background}
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