import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesService} from "../../../services";
import {episodesActions} from "../../../redux";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data}) => {
            dispatch(episodesActions.set(data))
            setQuery(prev => ({...prev, page: prev.get('page')}))
        })
    }, [query, dispatch])

    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};
