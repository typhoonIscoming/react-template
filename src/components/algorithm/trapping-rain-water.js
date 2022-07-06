import React from 'react';

/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @param {Array<number>} height 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 */
function trap(height = []) {
    const n = height.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    console.log('initleft', left)
    for (let i = 1; i < n; i++) {
        console.log('i=', left[i - 1], height[i - 1]);
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
    }
    let water = 0;
    for (let i = 0; i < n; i++) {
        let level = Math.min(left[i], right[i]);
        water += Math.max(0, level - height[i]);
    }
    console.log('height', height)
    console.log('left', left)
    console.log('right', right)
    return water
}
const arr = [0,1,0,2,1,0,1,3,2,1,2,1]
const water = trap(arr);


export default function TrappingWater() {
    return <div className='TrappingWater'>TrappingWater={water}</div>
}

