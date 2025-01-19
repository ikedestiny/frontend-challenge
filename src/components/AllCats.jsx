import { useEffect } from 'react'
import useCatState from '../state/CatStore'
import '../style/AllCats.css'
import CatCard from './CatCard'

export default function AllCats() {
    const { all_cats, get_all_cats } = useCatState()

    useEffect(() => { get_all_cats() }, [])

    return (
        <div className="all_cats">
            {all_cats.map((cat) => (<CatCard key={cat.id} isLiked={false} profile={cat} />))}
        </div>
    )
}