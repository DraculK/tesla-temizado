import { useCallback, useEffect, useContext } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(animeName: string) {
    const { registerAnime, unregisterAnime, getAnimeByName} = useContext(ModelsContext)

    useEffect(() =>  () => unregisterAnime(animeName), 
    [
        animeName, 
        unregisterAnime
    ])

    const getAnime = useCallback(() => getAnimeByName(animeName), [
        getAnimeByName,
        animeName
    ])

    return { registerAnime, getAnime }
}