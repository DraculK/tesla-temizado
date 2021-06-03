import React, { useEffect, useRef } from 'react'
import useModel from '../useModel'
import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    animeName: string 
    overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
    animeName,
    overlayNode,
    children,
    ...props
}) => {
    const { registerAnime } = useModel(animeName)

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (sectionRef){
            registerAnime({ animeName, overlayNode, sectionRef })
        }
    }, [children, animeName, overlayNode, registerAnime])

    return (
        <Container ref={sectionRef} {...props}>
            {children}
        </Container>
    )
}

export default ModelSection