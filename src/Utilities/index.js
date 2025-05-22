export const getfavorite = () =>{
    const favorite = localStorage.getItem('favorite');
    if(favorite) return JSON.parse(favorite)
        return []
}


export const addFavorite = (phone) =>{
    const favorite = getfavorite();
    const isExist = favorite.find(p => p.id === phone.id)
    if(isExist) return alert("Phone Already Added");
    favorite.push(phone)

    localStorage.setItem('favorite', JSON.stringify(favorite));
}
export const removeFavorite = (id) =>{
    const favorite = getfavorite();
    const remainingFavourite = favorite.filter((phone) => phone.id !== id)
    localStorage.setItem('favorite', JSON.stringify(remainingFavourite));
}