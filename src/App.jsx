
import React from 'react';
import Header from './components/Header';
import FavoritesPage from './pages/FavoritesPage';
import ResultsList from './components/ResultsList';

export default function App() {
return (
<div style={{ maxWidth: 1000, margin: '0 auto', padding: 20 }}>
<Header />


<main style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
<section>

<ResultsList />
</section>


<aside>

<FavoritesPage />
</aside>
</main>
</div>
);
}