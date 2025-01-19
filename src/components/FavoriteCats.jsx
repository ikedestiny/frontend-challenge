import { useEffect } from 'react';
import useCatState from '../state/CatStore';
import '../style/AllCats.css';
import CatCard from './CatCard';
import { use } from 'react';

export default function FavoriteCats() {
    const { favorite_cats } = useCatState();

    // Filter out null values before mapping
    const validFavoriteCats = favorite_cats.filter(cat => cat !== null);


    console.log(validFavoriteCats);

    return (
        <div className="all_cats">
            {validFavoriteCats.map((cat) => (
                <CatCard key={cat.id} isLiked={true} profile={cat} />
            ))}
        </div>
    );
}
