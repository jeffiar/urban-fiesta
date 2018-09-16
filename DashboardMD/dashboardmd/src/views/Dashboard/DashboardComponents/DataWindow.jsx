const get_window = (data, cur_time, max_time, window_length) => {
  console.log(data)
  var l = data.length;
  var splits = Math.floor(data.length * cur_time / max_time);
  var left = splits - 4;
  var right = splits + 1;
  if (left < 0){
    left = 0;
  }
  return data.slice(left, right);
}

export default get_window
