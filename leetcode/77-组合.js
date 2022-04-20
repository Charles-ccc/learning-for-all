/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 符合条件结果的集合
let result = []
// 符合条件的结果
let path = []
var combine = function(n, k) {
  result = []
  backtracking(n, k, 1)
  return result
};
// 每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围，就是要靠startIndex
const backtracking = (n, k, startIndex) => {
  if (path.length === k) {
    result.push([...path])
    return
  }
  // for(let i = startIndex; i<=n; i++) {
  /**每一层的for循环从第二个数开始遍历的话都是无效遍历
   可以剪枝在递归中每一层的for循环所选择的起始位置
   如果for循环选择的起始位置之后的元素个数 已经不足 需要的元素个数了，那么就没有必要搜索了
   1. 已经选择的元素个数 path.length
   2. 还需要的元素个数 k - path.length
   3. 在集合n中至多要从该起始位置 : n - (k - path.length) + 1，为啥要 +1，考虑范围，至多
  */
  for(let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i)
    backtracking(n, k, i + 1)
    path.pop() // 回溯，撤销处理的节点
  }
}