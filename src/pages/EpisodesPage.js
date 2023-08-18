import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Episodes} from "../components";
import {useTitle} from "../hooks/useTitle";

const EpisodesPage = () => {
    useTitle('EpisodePage')
    const [query, seQuery] = useSearchParams();
    const {pages} = useSelector(state => state.episodes);

    return (
        <div>
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => seQuery({page: page.toString()})}
                style={{display: 'flex', justifyContent: 'center', margin: '15px'}}
            />
        </div>
    );
};

export {EpisodesPage};
