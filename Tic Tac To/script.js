let arr = document.querySelectorAll(".butt");

let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winpat = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let time = 0;
let time1 = 0;
let turn = false;
const get = (ele, pat) => {
  return pat.indexOf(ele) > -1;
};
const clear = () => {
  // document.querySelectorAll(".butt")
  arr.forEach((element) => {
    element.innerHTML = "";
    element.style.background = "#2a2a6d";
  });
};
const check = (res) => {
  let pat = [];
  let i = 0;
  res.forEach((element, key) => {
    if (element == 1) {
      pat[i] = key;
      i = i + 1;
    }
  });
  // console.log(pat)

  // return pat

  let k = 0;
  let flag = 0;
  for (let i = 0; i <= 7; i++) {
    flag = 0;
    for (let j = 0; j < 3; j++) {
      // const element = array[j];
      if (!get(winpat[i][j], pat)) {
        flag = 1;
      }
    }

    if (flag == 0) {
      return 1;
    }
  }

  return 0;

  // return 2
  // return pat
};
// neww
function changestyle(ret, col) {
  ret.forEach((element) => {
    arr[element].style.background = `${col}`;
    arr[element].innerHTML = `🏆`;
  });
}
const patret = (res) => {
  let pat = [];
  let ret = [];
  let o = 0;
  res.forEach((element, key) => {
    if (element == 1) {
      pat[o] = key;
      o = o + 1;
    }
  });
  // console.log(pat)

  // return pat

  let k = 0;
  let flag = 0;
  let j = 0;
  let i = 0;
  for (i = 0; i <= 7; i++) {
    flag = 0;
    for (j = 0; j < 3; j++) {
      // const element = array[j];
      if (!get(winpat[i][j], pat)) {
        flag = 1;
      }
    }

    if (flag == 0) {
      // ret.push(winpat[i][j])
      // console.log(i,"dw")
      // console.log(j)
      ret = winpat[i];
      // console.log(ret)
    }
  }

  // return 0
  //    console.log(ret)
  changestyle(ret, "black");

  // return 2
  // return pat
};
function changeturn() {
  if (turn) {
    turn = false;
  } else {
    turn = true;
  }
}
function checker() {
  
    for (let index = 0; index < arr.length; index++) {
        // const element = array[index];
        if(arr[index].innerHTML == ''){
            return 1
        }
        
    }

    return 0

}
arr.forEach((element, key) => {
  element.addEventListener("click", () => {
    // if (!checker()) {
    //   clear();
    //   res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    //         res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // } 
    // else if (checker()) {


        if (turn) {
          element.innerHTML = "O";
          changeturn();
          document.querySelector(".turn").innerHTML = "Turn : Player X";
          // console.log(turn)
          res1[key] = 1;
          let win1 = check(res1);
          if (!checker()) {
            setTimeout(() => {
                clear();
                res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                      res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                
            }, 1000);
            } 
          if (win1 == 1) {
            patret(res1);
            res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            let s = document.querySelector(".player2");
            time1 = time1 + 1;
            s.innerHTML = `Player O : ${time1}`;
            setTimeout(() => {
              clear();
            }, 1000);
          }
        } 
        else {
          changeturn();
          // console.log(turn)
          element.innerHTML = "X";
          document.querySelector(".turn").innerHTML = "Turn : Player O";
          res[key] = 1;
          let win = check(res);
          if (!checker()) {

                setTimeout(() => {
                    clear();
                    res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    
                }, 1000);
        } 
          if (win == 1) {
            patret(res);
            // console.log(popup(res))
            res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            res1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            let s = document.querySelector(".player1");
            time = time + 1;
            s.innerHTML = `Player X : ${time}`;
            setTimeout(() => {
              clear();
            }, 1000);
          }
        }


    // }

  });
});

// let r = check()
// console.log(r)
