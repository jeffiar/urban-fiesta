const get_text_window = (data, cur_time, max_time, window_length) => {
  var d = data.split(/[\.,]+/);
  // console.log(d);
  for (var i = 0; i < d.length; i++) {
    if (d[i] === ''){
      d.splice(i, 1);
      i -= 1;
    }
  }
  var l = d.length;
  var splits = Math.ceil(l * cur_time / max_time);
  console.log(splits);
  var left = splits - 4;
  var right = splits;
  // console.log(splits, left, right);
  if (left < 0){
    left = 0;
  }
   console.log(left, right);
  return d.slice(left, right)
}

export default get_text_window;
