import {TablePagination} from "@mui/material";
import {useAppSelector} from "../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import * as React from "react";
import {ChangeEvent} from "react";

const Pagination = () => {
    const {total_items} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1', size: '10'});
    const handleChangePage = (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setQuery(prev => {
            prev.set('page',(page+1).toString())
            return prev
        })
    };

    const handleChangeRowsPerPage = (e:ChangeEvent<HTMLInputElement>) => {
        setQuery(prev => {
            prev.set('size', e.target.value.toString())
            prev.set('page', '1')
            return prev
        })
    };

    return (
        <>
            {
                total_items && (
                    <TablePagination
                        component="div"
                        count={total_items}
                        page={+query.get('page')-1}
                        onPageChange={handleChangePage}
                        rowsPerPage={+query.get('size')}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[10, 20, 30]}
                    />
                )
            }
        </>
    );
};

export {Pagination};