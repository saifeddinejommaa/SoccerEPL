import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {User} from '../../domain/entities/User';
import TYPES from '../../di/Types';
import {useInjection} from 'inversify-react';
import {Authenticate} from '../../domain/useCases/Authenticate';

interface UserState {
  user?: User;
  loading: boolean;
  errorMessage?: string;
}

const initialState: UserState = {
  user: undefined,
  loading: false,
  errorMessage: undefined,
};
//TODO : using Redux-Saga instead Async Thunk to separate Use case call & slice
export const auth = createAsyncThunk<boolean>('user/auth', async () => {
  try {
    const authenticate: Authenticate = useInjection<Authenticate>(
      TYPES.Authenticate,
    );
    authenticate.execute();
    return true;
  } catch (error) {
    throw new Error('Authentication failed');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(auth.pending, state => {
        state.loading = true;
      })
      .addCase(auth.fulfilled, State => {
        State.loading = false;
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

// Export reducer
export default userSlice.reducer;
