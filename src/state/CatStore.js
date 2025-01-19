import { create } from 'zustand';
import * as API from '../api/ApiCalls'

const catStore = create((set, get) => ({
    all_cats: [],
    favorite_cats: (() => {
        try {
            return JSON.parse(localStorage.getItem("favorite_cats")) || [];
        } catch (error) {
            console.error("Error reading favorite_cats from localStorage:", error);
            return [];
        }
    })()
    ,
    get_all_cats: async () => {
        // Example: fetch cats from an API or perform other logic
        const cats = await API.get_random_cats(20)
        console.log(cats)
        set({ all_cats: cats });
    },
    add_to_favorites: (cat) => {
        const currentFavorites = get().favorite_cats;
        const updatedFavorites = [...currentFavorites, cat];
        set({ favorite_cats: updatedFavorites });
        localStorage.setItem("favorite_cats", JSON.stringify(updatedFavorites));
    },
    remove_from_favorites: (id) => {
        const currentFavorites = get().favorite_cats;

        // Filter out invalid entries (null or undefined) and then remove by id
        const updatedFavorites = [...currentFavorites]
            .filter(cat => cat && cat.id !== id);  // Ensure cat is not null/undefined

        set({ favorite_cats: updatedFavorites });
        localStorage.setItem("favorite_cats", JSON.stringify(updatedFavorites));
    }



}));

export default catStore;
