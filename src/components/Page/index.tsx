import React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'
import { ModelsWrapper, ModelSection } from '../Model'
import { Container } from './styles'

const Page: React.FC = () => {
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Yu Yu Hakusho',
                        'Cowboy Bebop',
                        'Model Three',
                        'Model Four', 
                        'Model Five',
                        'Model Six',
                        'Model Seven' 
                    ].map(animeName => (
                        <ModelSection
                            key = {animeName}
                            className = "colored"
                            animeName = {animeName}
                            overlayNode = {
                                <DefaultOverlayContent 
                                    label = {animeName}
                                    description = "Os melhores animes"
                                />
                            }
                        />
                    ))}
                </div>

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}

export default Page