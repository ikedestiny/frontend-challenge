import { useState } from 'react';
import useCatState from '../state/CatStore';
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import '../style/CatCard.css';
import { useEffect } from 'react';

export default function CatCard({ isLiked, profile }) {

    const [liked, setLiked] = useState(isLiked);
    const { add_to_favorites, remove_from_favorites } = useCatState();

    const toggleLike = () => {
        if (liked) {
            remove_from_favorites(profile.id);
        } else {
            add_to_favorites(profile);
        }
        setLiked(!liked); // Update the state after the toggle action
    };

    return (
        <div className="cat">
            <img src={profile.url} alt="cat" />
            <button className="like-button" onClick={toggleLike}>
                {liked ? <AiFillHeart color="red" size={40} /> : <CiHeart color="red" size={40} />}
            </button>
        </div>
    );
}
