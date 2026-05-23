import type { TApiErrorResponse } from "../types/commonTypes";


export interface ICustomError extends Error {
    response: {
        data: TApiErrorResponse,
    }
}