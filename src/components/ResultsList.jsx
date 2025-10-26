import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./ResultsList.css";

export default function ResultsList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchCharacters() {
      try {
        setLoading(true);
        setError(null); 

        const encoded = encodeURIComponent(search.trim());
        const url = `https://rickandmortyapi.com/api/character/?name=${encoded}`;

        const response = await fetch(url, { signal });

     
        if (response.status === 404) {
          setCharacters([]);
          return;
        }

        if (!response.ok) {
          throw new Error(`Erreur de récupération des données (${response.status})`);
        }

        const data = await response.json();
        setCharacters(data.results || []);
      } catch (err) {
  
        if (err.name === "AbortError") return;
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();

   
    return () => controller.abort();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="results-section">
      <h2>Résultats de la recherche</h2>

      <div style={{ marginBottom: 12 }}>
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un personnage..."
          value={search}
          onChange={handleSearchChange}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>

      {loading && <p>Chargement des personnages...</p>}
      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}
      {!loading && !error && characters.length === 0 && (
        <p>Aucun personnage trouvé.</p>
      )}

      <div
        className="results-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px",
        }}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
