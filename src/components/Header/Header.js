import {Box, LinearProgress, Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css';
import {themeActions} from "../../redux";

const Header = () => {
    const {isLoading} = useSelector(state => state.progress);
    const {current} = useSelector(state => state.episodes);
    const {themeCheck} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return (
        <div>
            <Switch defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>
            <div className={css.label}>{current ? current : 'The Rick and Morty'}</div>
            {
                isLoading ?
                    <Box sx={{width: '100%', height: '5px'}}>
                        <LinearProgress/>
                    </Box>
                    :
                    <div style={{height: '5px'}}></div>

            }
        </div>
    );
};

export {Header};
