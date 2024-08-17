import { debug } from "console";

export const logger = {
    info: (message: string) => console.log(`[INFO]: ${message}`),
    debug: (message: string) => console.error(`[Debug]: ${message}`),
    error: (message: string) => console.error(`[ERROR]: ${message}`),
};
