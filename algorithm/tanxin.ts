function tx(child:number[],candy:number[]){//贪心算法
    child.sort((a,b)=>a-b)
    candy.sort((a,b)=>a-b)

    let childI=0,candyI=0;
    child.indexOf(childI)
    child.length
    while(childI<child.length&&candyI<candy.length){
        if(candy[candyI]>=child[childI]){
            childI++;
        }
        candyI++;
    }
    return childI;
}
// console.log(tx([2,4,5,8,10,15],[3,4,6,7,11,25]) )
console.log(tx([23,14,50,8,10,15,18],[13,4,2,7,11,25,60,20]) )