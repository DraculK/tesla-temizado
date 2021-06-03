import React, { ReactNode } from 'react'

export interface AnimeModel {
    animeName: string 
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredAnimes: AnimeModel[]
    registerAnime: (anime: AnimeModel) => void 
    unregisterAnime: (animeName: string) => void
    getAnimeByName: (animeName: string) => AnimeModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)