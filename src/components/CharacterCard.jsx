
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import "./CharacterCard.css";


export default function CharacterCard({ character }) {
const { favorites, dispatch } = useContext(FavoritesContext);
const isFavorite = !!favorites.find((fav) => fav.id === character.id);

function handleToggleFavorite() {
if (isFavorite) {
dispatch({ type: 'REMOVE_FAVORITE', payload: { id: character.id } });
} else {

dispatch({ type: 'ADD_FAVORITE', payload: character });
}
}

return (
<div className="character-card" style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
<img src={character.image} alt={character.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8 }} />
<h2>{character.name}</h2>
<p>{character.status} - {character.species}</p>
<button onClick={handleToggleFavorite}>
{isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
</button>
</div>
);
}
