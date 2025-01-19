import { useEffect, useState } from 'react'
import useCatState from '../state/CatStore'
import '../style/AllCats.css'
import CatCard from './CatCard'

export default function AllCats() {
    const { all_cats, get_all_cats, add_more_cats } = useCatState()
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        // Load initial items
        get_all_cats()
    }, []);



    const handleScroll = async () => {
        // Check if the user has scrolled near the bottom
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100 &&
            !loading
        ) {
            setLoading(true)
            await add_more_cats(); // Fetch more items
            setLoading(false)
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, [loading]);

    return (

        <>
            <div className="all_cats">
                {all_cats.map((cat) => (<CatCard key={cat.id} isLiked={false} profile={cat} />))}
            </div>
            {loading && <p>Loading...</p>}
        </>

    )
}