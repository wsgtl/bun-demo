//排序算法 
//bun .\algorithm\paixu.ts
const { log } = console;
const arrs = [3, 2, 8, 1, 5, 9, 4]
function change(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // [arr[i], arr[j]] = [arr[j], arr[i]]
}
/**冒泡算法 */
function maopao(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                change(arr, i, j);
            }
        }
    }
    return arr;
}

// log("冒泡排序：", maopao(arrs))

/**选择排序 */
function xuanze(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        change(arr, i, min);
    }
    return arr;
}
// log("选择排序：", xuanze(arrs))

/**快速排序 */
/**hoare版本 */
function kuaisu(arr: number[]) {
    const px = (left: number, right: number) => {
        if (left >= right) return;
        const x = left, y = right;
        while (left < right) {
            while (left < right && arr[x] <= arr[right]) {//基准值是左边第一个时，一定是右边先，因为右边最后要找到比基准值小的位置，然后left后面就移动到right上，两边就重叠了
                right--;
            }
            while (left < right && arr[x] >= arr[left]) {
                left++;
            }
            change(arr, left, right);
        }
        change(arr, left, x);
        px(x, left);
        px(left + 1, y);
    }
    px(0, arr.length - 1)
    return arr;
}
/**挖坑法 */
function kuaisu2(arr: number[]) {
    const px = (left: number, right: number) => {
        if (left >= right) return;
        const x = left, y = right, temp = arr[left];
        let hole = left;
        while (left < right) {
            while (left < right && temp <= arr[right]) {
                right--;
            }
            arr[hole] = arr[right];
            hole = right;
            while (left < right && temp >= arr[left]) {
                left++;
            }
            arr[hole] = arr[left];
            hole = left;
        }
        arr[hole] = temp;
        px(x, left);
        px(left + 1, y);
    }
    px(0, arr.length - 1)
    return arr;
}
/**前后指针版本 */
function kuaisu3(arr: number[]) {
    const px = (left: number, right: number) => {
        if (left >= right) return;
        let prev = left, cur = left + 1;
        while (cur <= right) {
            if (arr[cur] < arr[left] && ++prev != cur) {
                change(arr, cur, prev);
            }
            cur++;
        }
        change(arr, left, prev);
        px(left, prev);
        px(prev + 1, right);
    }
    px(0, arr.length - 1);
    return arr;
}
// log("快速排序,hoare：", kuaisu([...arrs]))
// log("快速排序,挖坑法：", kuaisu2([...arrs]))
// log("快速排序,前后指针：", kuaisu3([343, 222, 43, -34, 12, 5454, 3221, 11, 3, 56]))
/**插入排序 */
function insert(arr: number[]) {
    let end, temp;
    for (let i = 0; i < arr.length - 1; i++) {
        end = i;
        temp = arr[end + 1];
        while (end >= 0 && temp < arr[end]) {
            arr[end + 1] = arr[end];
            end--;
        }
        arr[end + 1] = temp;
    }
    return arr;
}
// log("插入排序：", insert([...arrs]))
/**希尔排序 */
function shell(arr: number[]) {
    const n = arr.length;
    let end = 0, temp = 0, gap = n;
    while (gap > 1) {
        gap = Math.floor(gap / 2);
        for (let i = 0; i < n - gap; i++) {
            end = i;
            temp = arr[end + gap];
            while (end >= 0 && temp < arr[end]) {
                arr[end + gap] = arr[end];
                end -= gap;
            }
            arr[end + gap] = temp;
        }
    }
    return arr;
}
// log("希尔排序", shell([2,3,1,4,6,5]))

function test() {
    const num = 1;
    const arr = getArr();
    let t1 = Date.now();
    for (let i = 0; i < num; i++)kuaisu([...arr])
    log("快速排序hoare时间", Date.now() - t1)
    t1 = Date.now();
    for (let i = 0; i < num; i++)kuaisu2([...arr])
    log("快速排序挖坑时间", Date.now() - t1)
    t1 = Date.now();
    for (let i = 0; i < num; i++)kuaisu3([...arr])
    log("快速排序双指针时间", Date.now() - t1)
    t1 = Date.now();
    for (let i = 0; i < num; i++)shell([...arr])
    log("希尔排序时间", Date.now() - t1)
    // t1=Date.now();
    // for(let i=0;i<num;i++)maopao([...arr])
    // log("冒泡排序时间",Date.now()-t1)
    // t1=Date.now();
    // for(let i=0;i<num;i++)xuanze([...arr])
    // log("选择排序时间",Date.now()-t1)


}
function getArr(): number[] {
    const a = []
    for (let i = 0; i < 10000000; i++) {
        a.push(Math.floor(Math.random() * 10000))
    }
    return a;
}
// test();
function a(arr: number[]) {
    let temp,end,gap=arr.length;
    while(gap>1){
        gap = Math.floor(gap/2)
        for(let i=0;i<arr.length-gap;i++){
            end=i;
            temp=arr[gap+end];
            while(end>=0&&arr[end]>temp){
                arr[end+gap]=arr[end];
                end-=gap
            }
            arr[end+gap]=temp;
        }
    }
    return arr;
}
log(a([2,4,7,1,5,3,77,90,32,14,0]))