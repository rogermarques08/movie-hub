"use clie"
import { useCallback, useEffect, useState } from "react";

export interface WatchList {
  id: number,
  img: string,
  type: string
  title: string,
}

export default function useWatchList() {
  const [watchList, setWatchList] = useState<WatchList[]>([]);

  const storage = typeof window !== 'undefined' ? localStorage.getItem('watch-list') : null;

  const getLocalStorage = useCallback(() => {
    if (storage !== null) {
      return JSON.parse(storage);
    }

    return;
  }, [storage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const teste = getLocalStorage();

    if (teste) {
      setWatchList(teste);
    }
  }, [setWatchList, getLocalStorage]);

  const addWatchList = (movie: WatchList) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('watch-list', JSON.stringify([...watchList, movie]))
    setWatchList([...watchList, movie])

  };

  const isOnList = (id: number) => {
    if (typeof window === 'undefined') return;

    const verify = watchList.some((movie) => movie.id === id)

    return verify
  }

  const removeWatchList = (id: number) => {
    if (typeof window === 'undefined') return;

    const updatedList = watchList.filter((movie) => movie.id !== id)

    localStorage.setItem('watch-list', JSON.stringify(updatedList))
    setWatchList(updatedList)
  }


  return {
    watchList,
    addWatchList,
    isOnList,
    removeWatchList
  };
}