import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {characterService} from "../../../services";
import {charactersActions} from "../../../redux";
import {Character} from "../Character/Character";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state: {ids}} = useLocation();

    useEffect(() => {
        console.log(characters, 'empty');
        characterService.getByIds(ids).then(({data}) => {
            dispatch(charactersActions.set(data))
        })
    }, [ids, dispatch])

    return (

        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};
