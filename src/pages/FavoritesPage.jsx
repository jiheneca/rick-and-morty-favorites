import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import CharacterCard from '../components/CharacterCard';
import "./FavoritesPage.css";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  if (!favorites || favorites.length === 0) {
    return <p className="empty-message">Vous n'avez aucun favori pour le moment.</p>;
  }

  return (
    <section className="favorites-section">
      <h2>Mes personnages favoris</h2>
      <div className="favorites-grid">
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
