import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface IStateFood {
    status: 'pending' | 'loading' | 'success' | 'error'
    data: object[]
    recipe: TRecipe
}

type TRecipe = {
    image: string
    title: string
    _id: string
    description: string
    ingredients: string[]
}

const initialState: IStateFood = {
    status: 'pending',
    data: [],
    recipe: {} as TRecipe
}

export const createRecipe = createAsyncThunk(
    'createRecipe',
    async function (user: object, {rejectWithValue}) {
        console.log(user)
        try {
            const res = await fetch(`https://back-zv2a.onrender.com/api/recipe`, {
                method: "POST",
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const getAll = createAsyncThunk(
    'getAll',
    async function (_, {rejectWithValue}) {
        try {
            const res = await fetch(`https://back-zv2a.onrender.com/api/recipe`, {
                method: "GET",
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',

                }
            })
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const getOneRecipe = createAsyncThunk(
    'getOneRecipe',
    async function (id: string, {rejectWithValue}) {
        try {
            const res = await fetch(`https://back-zv2a.onrender.com/api/recipe/${id}`, {
                method: "GET",
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',
                }
            })
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const deleteRecept = createAsyncThunk(
    'deleteRecept',
    async function (id: string, {rejectWithValue}) {
        try {
            const res = await fetch(`https://back-zv2a.onrender.com/api/recipe/${id}`, {
                method: "DELETE",
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',
                }
            })
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const editRecipe = createAsyncThunk(
    'editRecipe',
    async function (user: object, {rejectWithValue}) {
        try {
            const res = await fetch(`https://back-zv2a.onrender.com/api/recipe`, {
                method: "PUT",
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',
                    body: JSON.stringify(user)
                }
            })
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(getAll.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(createRecipe.fulfilled, (state, action) => {
                state.status = 'success'
            })
            .addCase(createRecipe.rejected, (state, action) => {
                state.status = 'error'
            })
            .addCase(getOneRecipe.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getOneRecipe.fulfilled, (state, action) => {
                state.status = 'success'
                state.recipe = action.payload
            })
            .addCase(getOneRecipe.rejected, (state, action) => {
                state.status = 'error'
            })
            .addCase(deleteRecept.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteRecept.fulfilled, (state, action) => {
                state.status = 'success'
                state.recipe = action.payload
            })
            .addCase(deleteRecept.rejected, (state, action) => {
                state.status = 'error'
            })
            .addCase(editRecipe.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(editRecipe.fulfilled, (state, action) => {
                state.status = 'success'
                state.recipe = action.payload
            })
            .addCase(editRecipe.rejected, (state, action) => {
                state.status = 'error'
            })
    }
})


export default foodSlice.reducer