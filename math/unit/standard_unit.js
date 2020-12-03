// #1 Acceleration

function accelerationToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var ms2 = document.getElementById("unit_acce_ms2");
    var fts2 = document.getElementById("unit_acce_fts2");
    var g0 = document.getElementById("unit_acce_g0");
    var cms2 = document.getElementById("unit_acce_cms2");
    if (type != "ms2") {ms2.value = standardval / 1;}
    if (type != "fts2") {fts2.value = standardval / 0.3;}
    if (type != "g0") {g0.value = standardval / 9.81;}
    if (type != "cms2") {cms2.value = standardval / 0.01;}
}
    

// #2 Angle

// #3 Area

function areaToStandard(val, conv_fact, type) {
    // standard: mm2
    var standardval = val * conv_fact;
    var mm2 = document.getElementById('unit_area_mm2');
    var cm2 = document.getElementById('unit_area_cm2');
    var m2 = document.getElementById('unit_area_m2');
    var km2 = document.getElementById('unit_area_km2');
    var ha = document.getElementById('unit_area_ha');
    var in2 = document.getElementById('unit_area_in2');
    var ft2 = document.getElementById('unit_area_ft2');
    var yd2 = document.getElementById('unit_area_yd2');
    var ml2 = document.getElementById('unit_area_ml2');
    var ac = document.getElementById('unit_area_ac');
    if (type != 'mm2') {mm2.value = standardval;}
    if (type != 'cm2') {cm2.value = standardval / 100;}
    if (type != 'm2') {m2.value = standardval / 1000000;}
    if (type != 'km2') {km2.value = standardval / 1000000000000;}
    if (type != 'ha') {ha.value = standardval / 10000000000;}
    if (type != 'in2') {in2.value = standardval / 645.16;}
    if (type != 'ft2') {ft2.value = standardval / 92903.04;}
    if (type != 'yd2') {yd2.value = standardval / 836127.36;}
    if (type != 'ml2') {ml2.value = standardval / 2590000000000;}
    if (type != 'ac') {ac.value = standardval / 4046856422.4;}
}

// #4 Cooking

// #5 Data Transfer Speed

function datatransferspeedToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var bps = document.getElementById("unit_dts_bps");
    var kbps = document.getElementById("unit_dts_kbps");
    var mbps = document.getElementById("unit_dts_mbps");
    var gbps = document.getElementById("unit_dts_gbps");
    var tbps = document.getElementById("unit_dts_tbps");
    var bs = document.getElementById("unit_dts_b/s");
    var kbs = document.getElementById("unit_dts_kb/s");
    var mbs = document.getElementById("unit_dts_mb/s");
    var gbs = document.getElementById("unit_dts_gb/s");
    var tbs = document.getElementById("unit_dts_tb/s");
    if (type != "bps") {bps.value = standardval / 1;}
    if (type != "kbps") {kbps.value = standardval / 1000;}
    if (type != "mbps") {mbps.value = standardval / 1000000;}
    if (type != "gbps") {gbps.value = standardval / 1000000000;}
    if (type != "tbps") {tbps.value = standardval / 1000000000000;}
    if (type != "b/s") {bs.value = standardval / 8;}
    if (type != "kb/s") {kbs.value = standardval / 8000;}
    if (type != "mb/s") {mbs.value = standardval / 8000000;}
    if (type != "gb/s") {gbs.value = standardval / 8000000000;}
    if (type != "tb/s") {tbs.value = standardval / 8000000000000;}
}
    

// #6 Digital Storage

function digitalstorageToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var Bit = document.getElementById("unit_dstorage_Bit");
    var kBit = document.getElementById("unit_dstorage_kBit");
    var mBit = document.getElementById("unit_dstorage_mBit");
    var gBit = document.getElementById("unit_dstorage_gBit");
    var tBit = document.getElementById("unit_dstorage_tBit");
    var pBit = document.getElementById("unit_dstorage_pBit");
    var eBit = document.getElementById("unit_dstorage_eBit");
    var kiBit = document.getElementById("unit_dstorage_kiBit");
    var meBit = document.getElementById("unit_dstorage_meBit");
    var giBit = document.getElementById("unit_dstorage_giBit");
    var teBit = document.getElementById("unit_dstorage_teBit");
    var peBit = document.getElementById("unit_dstorage_peBit");
    var exBit = document.getElementById("unit_dstorage_exBit");
    var byte = document.getElementById("unit_dstorage_byte");
    var kbyte = document.getElementById("unit_dstorage_kbyte");
    var mbyte = document.getElementById("unit_dstorage_mbyte");
    var gbyte = document.getElementById("unit_dstorage_gbyte");
    var tbyte = document.getElementById("unit_dstorage_tbyte");
    var pbyte = document.getElementById("unit_dstorage_pbyte");
    var ebyte = document.getElementById("unit_dstorage_ebyte");
    var kibyte = document.getElementById("unit_dstorage_kibyte");
    var mebyte = document.getElementById("unit_dstorage_mebyte");
    var gibyte = document.getElementById("unit_dstorage_gibyte");
    var tebyte = document.getElementById("unit_dstorage_tebyte");
    var pebyte = document.getElementById("unit_dstorage_pebyte");
    var exbyte = document.getElementById("unit_dstorage_exbyte");
    if (type != "Bit") {Bit.value = standardval / 1;}
    if (type != "kBit") {kBit.value = standardval / 1000;}
    if (type != "mBit") {mBit.value = standardval / 1000000;}
    if (type != "gBit") {gBit.value = standardval / 1000000000;}
    if (type != "tBit") {tBit.value = standardval / 1000000000000;}
    if (type != "pBit") {pBit.value = standardval / 1000000000000000;}
    if (type != "eBit") {eBit.value = standardval / 1000000000000000000;}
    if (type != "kiBit") {kiBit.value = standardval / 1024;}
    if (type != "meBit") {meBit.value = standardval / 1048576;}
    if (type != "giBit") {giBit.value = standardval / 1073741824;}
    if (type != "teBit") {teBit.value = standardval / 1099511627776;}
    if (type != "peBit") {peBit.value = standardval / 1125899906842624;}
    if (type != "exBit") {exBit.value = standardval / 1152921504606846976;}
    if (type != "byte") {byte.value = standardval / 8;}
    if (type != "kbyte") {kbyte.value = standardval / 8000;}
    if (type != "mbyte") {mbyte.value = standardval / 8000000;}
    if (type != "gbyte") {gbyte.value = standardval / 8000000000;}
    if (type != "tbyte") {tbyte.value = standardval / 8000000000000;}
    if (type != "pbyte") {pbyte.value = standardval / 8000000000000000;}
    if (type != "ebyte") {ebyte.value = standardval / 8000000000000000000;}
    if (type != "kibyte") {kibyte.value = standardval / 8192;}
    if (type != "mebyte") {mebyte.value = standardval / 8388608;}
    if (type != "gibyte") {gibyte.value = standardval / 8589934592;}
    if (type != "tebyte") {tebyte.value = standardval / 8796093022210;}
    if (type != "pebyte") {pebyte.value = standardval / 9007199254740000;}
    if (type != "exbyte") {exbyte.value = standardval / 9223372036853760000;}
}
    

// #7 Energy

function energyToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var J = document.getElementById("unit_energy_J");
    var kJ = document.getElementById("unit_energy_kJ");
    var MJ = document.getElementById("unit_energy_MJ");
    var erg = document.getElementById("unit_energy_erg");
    var eV = document.getElementById("unit_energy_eV");
    var cal = document.getElementById("unit_energy_cal");
    var kcal = document.getElementById("unit_energy_kcal");
    var ftlbf = document.getElementById("unit_energy_ftlbf");
    var Wh = document.getElementById("unit_energy_Wh");
    var kWh = document.getElementById("unit_energy_kWh");
    var BTU = document.getElementById("unit_energy_BTU");
    if (type != "J") {J.value = standardval / 1;}
    if (type != "kJ") {kJ.value = standardval / 1000;}
    if (type != "MJ") {MJ.value = standardval / 1000000;}
    if (type != "erg") {erg.value = standardval / 0.0000001;}
    if (type != "eV") {eV.value = standardval / 0.00000000000000000016;}
    if (type != "cal") {cal.value = standardval / 4.184;}
    if (type != "kcal") {kcal.value = standardval / 4184;}
    if (type != "ftlbf") {ftlbf.value = standardval / 1.36;}
    if (type != "Wh") {Wh.value = standardval / 3600;}
    if (type != "kWh") {kWh.value = standardval / 3600000;}
    if (type != "BTU") {BTU.value = standardval / 1055.06;}
}
    

// #8 Force

function forceToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var N = document.getElementById("unit_force_N");
    var kgf = document.getElementById("unit_force_kgf");
    var gf = document.getElementById("unit_force_gf");
    var dyn = document.getElementById("unit_force_dyn");
    var lbf = document.getElementById("unit_force_lbf");
    var ozf = document.getElementById("unit_force_ozf");
    if (type != "N") {N.value = standardval / 1;}
    if (type != "kgf") {kgf.value = standardval / 9.81;}
    if (type != "gf") {gf.value = standardval / 0.00981;}
    if (type != "dyn") {dyn.value = standardval / 0.00001;}
    if (type != "lbf") {lbf.value = standardval / 4.45;}
    if (type != "ozf") {ozf.value = standardval / 0.28;}
}
    

// #9 Length

function lengthToStandard(val, conv_fact, type) {
    // standard: nm
    var standardval = val * conv_fact;
    var nm = document.getElementById('unit_length_nm');
    var qm = document.getElementById('unit_length_qm');
    var mm = document.getElementById('unit_length_mm');
    var cm = document.getElementById('unit_length_cm');
    var dm = document.getElementById('unit_length_dm');
    var m = document.getElementById('unit_length_m');
    var dam = document.getElementById('unit_length_dam');
    var km = document.getElementById('unit_length_km');
    var inc = document.getElementById('unit_length_in');
    var ft = document.getElementById('unit_length_ft');
    var yd = document.getElementById('unit_length_yd');
    var mi = document.getElementById('unit_length_mi');
    var nmi = document.getElementById('unit_length_nmi');
    if (type != 'nm') {nm.value = standardval;}
    if (type != 'qm') {qm.value = standardval / 1000;}
    if (type != 'mm') {mm.value = standardval / 1000000;}
    if (type != 'cm') {cm.value = standardval / 10000000;}
    if (type != 'dm') {dm.value = standardval / 100000000;}
    if (type != 'm') {m.value = standardval / 1000000000;}
    if (type != 'dam') {dam.value = standardval / 10000000000;}
    if (type != 'km') {km.value = standardval / 1000000000000;}
    if (type != 'in') {inc.value = standardval / 25400000;}
    if (type != 'ft') {ft.value = standardval / 304800000;}
    if (type != 'yd') {yd.value = standardval / 914400000;}
    if (type != 'mi') {mi.value = standardval / 1610000000000;}
    if (type != 'nmi') {nmi.value = standardval / 1850000000000;}
}

// # Power

function powerToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var mW = document.getElementById("unit_power_mW");
    var W = document.getElementById("unit_power_W");
    var kW = document.getElementById("unit_power_kW");
    var MW = document.getElementById("unit_power_MW");
    var hp = document.getElementById("unit_power_hp");
    if (type != "mW") {mW.value = standardval / 1;}
    if (type != "W") {W.value = standardval / 1000;}
    if (type != "kW") {kW.value = standardval / 1000000;}
    if (type != "MW") {MW.value = standardval / 1000000000;}
    if (type != "hp") {hp.value = standardval / 745699.87;}
}

// # Pressure

function pressureToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var Pa = document.getElementById("unit_pressure_Pa");
    var kPa = document.getElementById("unit_pressure_kPa");
    var MPa = document.getElementById("unit_pressure_MPa");
    var bar = document.getElementById("unit_pressure_bar");
    var atm = document.getElementById("unit_pressure_atm");
    var mmH2O = document.getElementById("unit_pressure_mmH2O");
    if (type != "Pa") {Pa.value = standardval / 1;}
    if (type != "kPa") {kPa.value = standardval / 1000;}
    if (type != "MPa") {MPa.value = standardval / 1000000;}
    if (type != "bar") {bar.value = standardval / 100000;}
    if (type != "atm") {atm.value = standardval / 101325;}
    if (type != "mmH2O") {mmH2O.value = standardval / 9.81;}
}
    

// # Speed
function speedToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var kmh = document.getElementById("unit_speed_kmh");
    var ms = document.getElementById("unit_speed_ms");
    var mph = document.getElementById("unit_speed_mph");
    var fts = document.getElementById("unit_speed_fts");
    var ftmin = document.getElementById("unit_speed_ftmin");
    var c = document.getElementById("unit_speed_c");
    var mach = document.getElementById("unit_speed_mach");
    var knot = document.getElementById("unit_speed_knot");
    if (type != "kmh") {kmh.value = standardval / 1;}
    if (type != "ms") {ms.value = standardval / 3.6;}
    if (type != "mph") {mph.value = standardval / 1.61;}
    if (type != "fts") {fts.value = standardval / 1.1;}
    if (type != "ftmin") {ftmin.value = standardval / 0.02;}
    if (type != "c") {c.value = standardval / 1079252848.8;}
    if (type != "mach") {mach.value = standardval / 1193.76;}
    if (type != "knot") {knot.value = standardval / 644.58;}
}

// # Time

function timeToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var ms = document.getElementById("unit_time_ms");
    var s = document.getElementById("unit_time_s");
    var min = document.getElementById("unit_time_min");
    var h = document.getElementById("unit_time_h");
    var d = document.getElementById("unit_time_d");
    var we = document.getElementById("unit_time_we");
    var m = document.getElementById("unit_time_m");
    var y = document.getElementById("unit_time_y");
    var de = document.getElementById("unit_time_de");
    var ce = document.getElementById("unit_time_ce");
    var me = document.getElementById("unit_time_me");
    if (type != "ms") {ms.value = standardval / 1;}
    if (type != "s") {s.value = standardval / 1000;}
    if (type != "min") {min.value = standardval / 60000;}
    if (type != "h") {h.value = standardval / 3600000;}
    if (type != "d") {d.value = standardval / 86400000;}
    if (type != "we") {we.value = standardval / 604800000;}
    if (type != "m") {m.value = standardval / 2630016000;}
    if (type != "y") {y.value = standardval / 31556952000;}
    if (type != "de") {de.value = standardval / 315569520000;}
    if (type != "ce") {ce.value = standardval / 3155695200000;}
    if (type != "me") {me.value = standardval / 31556952000000;}
}

// # Torque

function torqueToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var Nm = document.getElementById("unit_torque_Nm");
    var Ncm = document.getElementById("unit_torque_Ncm");
    var mkg = document.getElementById("unit_torque_mkg");
    var ftlbf = document.getElementById("unit_torque_ftlbf");
    var ftpdl = document.getElementById("unit_torque_ftpdl");
    var inlbf = document.getElementById("unit_torque_inlbf");
    if (type != "Nm") {Nm.value = standardval / 1;}
    if (type != "Ncm") {Ncm.value = standardval / 0.01;}
    if (type != "mkg") {mkg.value = standardval / 9.81;}
    if (type != "ftlbf") {ftlbf.value = standardval / 1.36;}
    if (type != "ftpdl") {ftpdl.value = standardval / 0.04;}
    if (type != "inlbf") {inlbf.value = standardval / 0.11;}
}


// # Volume

function volumeToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var cm3 = document.getElementById("unit_volume_cm3");
    var dm3 = document.getElementById("unit_volume_dm3");
    var m3 = document.getElementById("unit_volume_m3");
    var ml = document.getElementById("unit_volume_ml");
    var l = document.getElementById("unit_volume_l");
    var in3 = document.getElementById("unit_volume_in3");
    var ft3 = document.getElementById("unit_volume_ft3");
    var yd3 = document.getElementById("unit_volume_yd3");
    var tsp = document.getElementById("unit_volume_tsp");
    var tbsp = document.getElementById("unit_volume_tbsp");
    if (type != "cm3") {cm3.value = standardval / 1;}
    if (type != "dm3") {dm3.value = standardval / 1000;}
    if (type != "m3") {m3.value = standardval / 1000000;}
    if (type != "ml") {ml.value = standardval / 1;}
    if (type != "l") {l.value = standardval / 1000;}
    if (type != "in3") {in3.value = standardval / 16.39;}
    if (type != "ft3") {ft3.value = standardval / 28,316.85;}
    if (type != "yd3") {yd3.value = standardval / 764,554.86;}
    if (type != "tsp") {tsp.value = standardval / 5.92;}
    if (type != "tbsp") {tbsp.value = standardval / 17.76;}
}
    

    
    
    
// # Weight

function weightToStandard(val, conv_fact, type) {
    var standardval = val * conv_fact;
    var mg = document.getElementById("unit_weight_mg");
    var cg = document.getElementById("unit_weight_cg");
    var g = document.getElementById("unit_weight_g");
    var kg = document.getElementById("unit_weight_kg");
    var t = document.getElementById("unit_weight_t");
    var oz = document.getElementById("unit_weight_oz");
    var lbs = document.getElementById("unit_weight_lbs");
    var sto = document.getElementById("unit_weight_sto");
    var shoT = document.getElementById("unit_weight_shoT");
    var loT = document.getElementById("unit_weight_loT");
    if (type != "mg") {mg.value = standardval / 1;}
    if (type != "cg") {cg.value = standardval / 10;}
    if (type != "g") {g.value = standardval / 1000;}
    if (type != "kg") {kg.value = standardval / 1000000;}
    if (type != "t") {t.value = standardval / 1000000000;}
    if (type != "oz") {oz.value = standardval / 28349.52;}
    if (type != "lbs") {lbs.value = standardval / 453592.37;}
    if (type != "sto") {sto.value = standardval / 6350293.18;}
    if (type != "shoT") {shoT.value = standardval / 907184740;}
    if (type != "loT") {loT.value = standardval / 1016046908.8;}
}
    
