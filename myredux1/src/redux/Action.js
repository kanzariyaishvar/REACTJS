import { deposit } from "./ActionType";
import { wth } from "./ActionType";
export const withdraw=(val)=>{
    return {type:witdraw,paylod:val}
}

export const deposit=(val)=>{
    return {type:deposit,paylod:val}
}