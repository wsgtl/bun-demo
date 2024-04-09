
//贪心算法

/**
 * 
    小朋友和糖果问题，小朋友每人需要的糖果量不同，此时给几个糖果，看怎么分配才能让最多的小朋友满足
 */
function candy(child: number[], candy: number[]) {
    child.sort((a, b) => a - b)
    candy.sort((a, b) => a - b)

    let childI = 0, candyI = 0;
    child.indexOf(childI)
    child.length
    while (childI < child.length && candyI < candy.length) {
        if (candy[candyI] >= child[childI]) {
            childI++;
        }
        candyI++;
    }
    return childI;
}
// console.log(tx([2,4,5,8,10,15],[3,4,6,7,11,25]) )
// console.log(candy([23,14,50,8,10,15,18],[13,4,2,7,11,25,60,20]) )

/**
 * 最大子序和题目
    给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    子数组 是数组中的一个连续部分。
    ```
    输入： nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出： 6
    解释： 连续子数组 [4,-1,2,1] 的和最大，为 6 。
```
 */
function maxChildArray(arr: number[]) {
    //设置为最小值
    let res = -Number.MAX_VALUE;
    //局部最优解
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
        res = Math.max(res, count);
        if (count < 0) {
            count = 0;
        }
    }
    return res;
}
// console.log(maxChildArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
/**
    给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
    输入：[7,1,5,3,6,4]
    输出：5
    解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 */
function stock(arr: number[]){
    //设置为最小值
    let res = Number.MIN_SAFE_INTEGER;
    //局部最优解
    let count = 0;
    let start = 0;
    for (let i = 1; i < arr.length; i++) {
        count = arr[i]-arr[start] ;
        res = Math.max(res, count);
        if (count < 0) {
            start = i;
        }
    }
    return res;
}
function stock_other(arr:number[]){//另一种实现
    let min = Number.MAX_VALUE;
    let res = 0;
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }else if (arr[i] - min > res){
            res = arr[i] - min;
        }
    }
    return res;
}
// const arr=[7,1,5,3,6,4]
// console.log(stock(arr),stock_other(arr));
/**
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4。随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

 */
function stock2(arr:number[]){
    let res = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]>0){
            res+=arr[i]-arr[i-1];
        }
    }
    return res;
}
console.log(stock2([7,1,5,3,6,4]));