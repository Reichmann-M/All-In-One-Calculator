// #1 DISCOUNT

function getDiscountValue(init, disc) {
  return init - (init * disc) / 100;
}

function getDiscountDiscount(init, disc) {
  return (init * disc) / 100;
}

function setDiscountResult() {
  var init_val = document.getElementById("alg_perc_disc_init").value;
  var disc = document.getElementById("alg_perc_disc_disc").value;
  var final_val = document.getElementById("alg_perc_disc_final");
  var final_disco = document.getElementById("alg_perc_disc_finaldisc");

  final_val.value = getDiscountValue(init_val, disc);
  final_disco.value = getDiscountDiscount(init_val, disc);
}

// #2 INCREASE

function getIncreaseValue(init, incr) {
  return parseFloat(init) + (init * incr) / 100;
}

function getIncreaseIncrease(init, incr) {
  return parseFloat(init) + (init * incr) / 100 - init;
}

function setIncreaseResult() {
  var init_val = document.getElementById("alg_perc_incr_init").value;
  var incr = document.getElementById("alg_perc_incr_disc").value;
  var final_val = document.getElementById("alg_perc_incr_final");
  var final_incr = document.getElementById("alg_perc_incr_finaldisc");

  final_val.value = getIncreaseValue(init_val, incr);
  final_incr.value = getIncreaseIncrease(init_val, incr);
}

// #3 PERCENTAGE OF X FROM Y

function getPercentageXY(x, y) {
  return parseFloat((y * x) / 100);
}

function setPercentageXY() {
  var x = document.getElementById("alg_perc_xy_x");
  var y = document.getElementById("alg_perc_xy_y");
  var final = document.getElementById("alg_perc_xy_final");

  final.value = getPercentageXY(x.value, y.value);
}

// #4 PERCENTAGE INCREASE / DECREASE

function getPercentageICDC(x, y) {
  return (y * 100) / x - 100;
}

function setPercentageICDC() {
  var x = document.getElementById("alg_perc_icdc_x");
  var y = document.getElementById("alg_perc_icdc_y");
  var final = document.getElementById("alg_perc_icdc_final");

  final.value = getPercentageICDC(x.value, y.value);
}
