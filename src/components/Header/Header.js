import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const {isLoading} = useSelector(state => state.progress);
    const {current} = useSelector(state => state.episodes);

    return (
        <div>
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
