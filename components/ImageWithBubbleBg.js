import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/ImageWithBgBooble.module.css'
import styled from 'styled-components'

const ImageContainer = styled.div`
position: relative;
height: inherit;
    ${({ props }) => (
        `&::before {
            content: '';
            position: absolute;
            ${props.height ? `height: ${props.height}` : ''};
            ${props.width ? `width: ${props.width}` : ''};
            ${props.top ? `top: ${props.top}` : ''};
            ${props.bottom ? `bottom: ${props.bottom}` : ''};
            ${props.left ? `left: ${props.left}` : ''};
            ${props.right ? `right: ${props.right}` : ''};
            ${props.borderRadius ? `border-radius: ${props.borderRadius}` : ''};
            ${props.background ? `background: ${props.background}` : ''};
            ${props.transform ? `transform: ${props.transform}` : ''};
        }`
    )}
`

const ImageWithBubbleBg = ({ className, src, imageHeight, ...bubble }) => {
    return (
        <div className={`${styles.container} ${className ? className : ''}`} style={{
            height: imageHeight
        }}>
            <ImageContainer props={bubble}>
                <Image src={src} width='1780' height='2732' alt='builder construction vest orange helmet with table' />
            </ImageContainer>
        </div>
    )
}

export default ImageWithBubbleBg