import { useCallback, useEffect, useState } from "react";

export interface WishList {
  id: number,
  img: string,
  type: string
}

export default function useWishList() {
  const [wishList, setWishList] = useState<WishList[]>([]);
  
  const storage = typeof window !== 'undefined' ? localStorage.getItem('wish-list') : null;

  const getLocalStorage = useCallback(() => {
    if (storage !== null) {
      return JSON.parse(storage);
    }

    return ;
  }, [storage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wishList = getLocalStorage();

    if (wishList) {
      setWishList(wishList);
    }
  }, [getLocalStorage]);

  const addWishList = (movie: WishList) => {
    if (typeof window === 'undefined') return;
        
    localStorage.setItem('wish-list', JSON.stringify([...wishList, movie]))
    setWishList([...wishList, movie])
    
  };

  const isOnList = (id:number) => {
    if (typeof window === 'undefined') return;

    const verify = wishList.some((movie) => movie.id === id)

    return verify
  }

  const removeWishList = (id:number) => {
    if (typeof window === 'undefined') return;

    const updatedList = wishList.filter((movie) => movie.id !== id)

    localStorage.setItem('wish-list', JSON.stringify(updatedList))
    setWishList(updatedList)
  }

 
  return {
    wishList,
    addWishList,
    isOnList,
    removeWishList
  };
}