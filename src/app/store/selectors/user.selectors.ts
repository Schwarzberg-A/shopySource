import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { User } from "../reducers/user.reducers";

export const selectUserState = createFeatureSelector<AppState, User>('user')
