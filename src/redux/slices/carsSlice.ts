import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";
import {RootState} from "../store";

interface IState {
    cars: ICar[],
    carForUpdate: ICar | null
    total_items: number
    currentPage: number
    currentSize: number
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    total_items: null,
    currentPage: null,
    currentSize: null
};

const getAll = createAsyncThunk<{ data: IPagination<ICar>, page: number, size: number }, {
    page: number,
    size: number
}>(
    'carsSlice/getAll',
    async ({page, size}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll(page, size);
            return {data, page, size}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<ICar, { id: number, car: ICar }>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.deleteById(id)
            const {cars:{currentPage, currentSize}} = getState() as RootState;
            dispatch(getAll({page:currentPage, size:currentSize}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.data.items
            state.total_items = action.payload.data.total_items
            state.currentPage = action.payload.page
            state.currentSize =action.payload.size
        })
        .addCase(update.fulfilled, (state, action) => {
            state.carForUpdate = null
            const updatedCar = action.payload;
            const find = state.cars.find(car=>car.id ===updatedCar.id);
            Object.assign(find, updatedCar)
        })
        .addCase(create.fulfilled,state => {
            state.total_items +=1
        })
})

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carActions,
    carReducer
}