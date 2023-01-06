import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    return fetch(
      `https://gateway.marvel.com/v1/public/characters/1017100?
ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_KEY}`,
      {
        method: 'GET'
      }
    ).then((res) => res.json())
  }
)

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder: any) {}
})
export const {} = charactersSlice.actions
export default charactersSlice.reducer
