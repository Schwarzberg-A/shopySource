import { createAction, props } from "@ngrx/store";
import { User } from "../reducers/user.reducers";

export const logInsuccess = createAction('[User] sign in success', props<{ [user: string]: User }>())
