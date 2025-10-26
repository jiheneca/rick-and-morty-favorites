
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import "./Header.css";


export default function Header() {
const { favorites } = useContext(FavoritesContext);
const count = favorites.length;


return (
<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
<h1>Annuaire Rick and Morty</h1>
<div>
<strong> les Favoris de jahouna:</strong> {count}
</div>
</header>
);
}
