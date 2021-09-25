import { createReducer, on } from "@ngrx/store"
import { logInsuccess } from "../actions/user.action"

export interface User {
  login: string | null;
  password: string | null;
}

export const initialUserState: User = {
  login: null,
  password: null,
}

export const reducer = createReducer(initialUserState,
  on( logInsuccess, (state, { user: user }) => ({...state, ...user}))
)
