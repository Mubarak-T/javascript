//   let num  declare a variable

//   num = 10  assign value to variable

  let num2 = num

  num = 20

  let nums = [1,2,3,4,5]
  let nums2 = [1,2,3,5,4,6]
  nums[0] = 10

  console.log(num)
  console.log(num2);
  console.log(nums);
  console.log(nums2);










//    string
//    number
//    boolean
//    null
//    undefined
//    object
//    array
//    function

//    string
  let s1 = "test"
   number
  let n1 = 10
   boolean
  let b1 = true
  let b2 = false
   null
  let nu = null
    undefined
  let u1 = undefined
   object
  let student = {name: "S1", age: 17, std: 12}
  let number = [1,2,3,4,5]


  let val = null
   console.log(val);
   console.log(student.name);
   console.log(student.age);
   console.log(student.std);

   student.name = "S1 updated"
   console.log(student.name);
   console.log(student.age);
   console.log(student.std);

   student["name"] = "S1 is updated again"
   console.log(student.name);
   console.log(student.age);
   console.log(student.std);


  function consoleStudentValue(){
      student.name = "S1 updated"
      console.log(student.name);
      console.log(student.age);
      console.log(student.std);

  }

  consoleStudentValue()


//   oprerators
//   1.arithametic
//   2.assignment
//   3.comparison
//   4.logical
//   5.termary

//   arithametic
  console.log(1+1)
  console.log(3-1);
  console.log(8/2);
  console.log(8*2);
  console.log(8**6);
  console.log(9%2);

//   assignment 
  let num = 5
  num  %= 2
  console.log(num);

//   comparison 
  console.log(5 == "5");
  console.log(5 === "5");
  console.log(5 != "5");
  console.log(5 !==  "5");

  console.log(5 > 5);
  console.log(4 < 5);
  console.log(5 >= 5);
  console.log(5 <= 4);

//   logical
//   And &
//   Or |
//   Not !

//   1 && 1 = true
//   1 && 0 = false
//   0 && 1 = false
//   0 && 0 = false

  console.log(true && true && false)
  console.log(true && false)
  console.log(false && true)
  console.log(false && false)

//   1 || 1 = true
//   1 || 0 = false
//   0 || 1 = false
//   0 || 0 = false

  console.log(true || true)
  console.log(true || false)
  console.log(false || true || false)
  console.log(false || false || true)

//   !true = false
//   !false = true

  console.log(!true);
  console.log(!false);

// termary

let studentPass = true

studentPass?console.log("Pass"):console.log("Fail")

let studentpass = false
studentpass?console.log("Pass"):console.log("Fail")