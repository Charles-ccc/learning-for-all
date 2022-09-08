const arr = [
  {
    _id: "14139e126131bc6e094cc2130878bf1d", 
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    grade: 1,
    name: "口罩",
    tag: "face-mask",
    time: 1630649454167,
    type: 3,
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    _id: "14139e126131bc6e094cc2130878bf1d"
  },
  {
    _id: "cd045e756131f0230a7cba825043c5f5", 
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    grade: 1,
    name: "口罩",
    tag: "face-mask",
    time: 1630662691248,
    type: 3,
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    _id: "cd045e756131f0230a7cba825043c5f5"
  },
  {
    _id: "cd045e756131f0230a7cba825043c5f5", 
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    grade: 1,
    name: "口罩",
    tag: "face-mask",
    time: 1630662691300,
    type: 3,
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    _id: "cd045e756131f0230a7cba825043c5f5"
  },
  {
    _id: "cd045e756131f0230a7cba825043c5f5", 
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    grade: 1,
    name: "口罩",
    tag: "face-mask",
    time: 1630662691400,
    type: 3,
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    _id: "cd045e756131f0230a7cba825043c5f5"
  },
  {
    _id: "cd045e756131f0230a7cba825043c5f5", 
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    grade: 1,
    name: "口罩",
    tag: "face-mask",
    time: 1630662691500,
    type: 3,
    wxOpenId: "oPbgm5ZGg5chl_c004O_-BeT0p00",
    _id: "cd045e756131f0230a7cba825043c5f5"
  }
]

const sortArr = (property) => {
  return function(a,b){
      const val1 = a[property];
      const val2 = b[property];
      return val1 - val2;
  }
}
arr.sort(sortArr('time')).reverse()
console.log(arr.sort(handle('time')).reverse())
