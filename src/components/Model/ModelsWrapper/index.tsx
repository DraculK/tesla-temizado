import React, { useRef, useState, useCallback } from 'react'
import ModelsContext, { AnimeModel } from '../ModelsContext'
import AnimeOverlay from '../AnimeOverlay'
import { Container, OverlaysRoot} from './styles'

const ModelsWrapper: React.FC = ({children}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredAnimes, setRegisteredAnimes] = useState<AnimeModel[]>([]) 

    const registerAnime = useCallback((anime: AnimeModel) => {
        setRegisteredAnimes(state => [...state, anime ])
    }, [])

    const unregisterAnime = useCallback((animeName: string) => {
        setRegisteredAnimes(state => state.filter(anime => anime.animeName !== animeName))
    }, [])

    const getAnimeByName = useCallback((animeName: string) => {
        return registeredAnimes.find(item => item.animeName === animeName) || null
    }, [registeredAnimes])

    return (
        <ModelsContext.Provider value={{
            wrapperRef,
            registeredAnimes,
            registerAnime,
            unregisterAnime,
            getAnimeByName
        }}
        >
            <Container ref={ wrapperRef }>
            <OverlaysRoot>
                {registeredAnimes.map(item => (
                    <AnimeOverlay key={item.animeName} anime={item}>
                        {item.overlayNode}
                    </AnimeOverlay>
                ))}
            </OverlaysRoot>


                { children }
            </Container>
        </ModelsContext.Provider>
    )
}

export default ModelsWrapper