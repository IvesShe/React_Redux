// 1. 該文件是用於創建一個為Count組件服務的reducer，reducer的本質就是一個函數
// 2. reducer函數會接到兩個參數，分別為：之前的狀態(preState)，動作對象(action)

import {INCREMENT,DECREMENT} from './constant'

const initState = 0;
export default function countReducer(preState=initState,action){
    console.log(preState,action);
    // 從action對象中獲取： type、date
    const {type,data} = action;

    // 根據type決定如何加工數據
    switch(type){
        case INCREMENT: // 如果是加
            console.log("@",preState);
            return preState+data
        case DECREMENT: // 如果是減
            return preState-data
        default:
            return preState
    }
}