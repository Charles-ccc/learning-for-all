// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
//   setTimeout(() => {
//     console.log('timer1')
//   }, 0)
// }
// async function async2() {
//   setTimeout(() => {
//     console.log('timer2')
//   }, 0)
//   console.log("async2");
// }
// async1();
// setTimeout(() => {
//   console.log('timer3')
// }, 0)
// console.log("start")

async function async1 () {
  try {
    await Promise.reject('error!!!')
  } catch(e) {
    console.log(e)
  }
  console.log('async1');
  return Promise.resolve('async1 success')
}
async1().then(res => console.log(res))
console.log('script start')