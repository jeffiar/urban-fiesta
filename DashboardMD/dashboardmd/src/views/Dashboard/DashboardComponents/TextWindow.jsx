const get_text_window = (data, cur_time, max_time, window_length) => {
  var d = data.split(/[\.,]+/);
  for (var i = 0; i < d.length; i++) {
    if (d[i] === ''){
      d.splice(i, 1);
      i -= 1;
    }
  }
  var l = d.length;
  var splits = Math.ceil(l * cur_time / max_time);
  // console.log(splits);
  var right = splits + 1;
  return d.slice(0, right)
}

export default get_text_window;
