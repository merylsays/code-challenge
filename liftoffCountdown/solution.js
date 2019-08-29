function liftoff_countdown(start_num) {
  if (start_num === 0) {
    console.log("Liftoff!")
  } else {
    console.log(start_num)
    liftoff_countdown(start_num -1)
  }
}
