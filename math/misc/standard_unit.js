// #1 Download Time Calculator

function speedToStandard() {
    // standard: Kbps
    var speed = document.getElementById('misc_downtime_speed').value;
    var select_speed = document.getElementById('select_down_speed');
    if (select_speed.value == "Kbps") {
        return speed;
    } else if (select_speed.value == "Mbps") {
        return (speed * 1000);
    } else {
        return (speed * 1000000)
    }
}

function sizeToStandard() {
    // standard: Kbit
    var size = document.getElementById('misc_downtime_size').value;
    var select_size = document.getElementById('select_down_size');
    if (select_size.value == "MB") {
        return (size * 8000);
    } else if (select_size.value == "GB") {
        return (size * 8000000);
    } else if (select_size.value == "TB") {
        return (size * 8000000000);
    }
}

function getDownTimeInSecond(kbps, kb) {
    return kb / kbps;
}

function formatTime(seconds) { // Format: xD days xH hours xM minutes xS seconds
    var out_string = '';
    // Time >>> 1 Day
    if (seconds >= 86400) {
        var days = Math.floor(seconds / 86400);
        seconds = seconds - (days * 86400);
        out_string = days + ' days ';
    }
    // Time >>> 1 Hour
    if (seconds >= 3600) {
        var hours = Math.floor(seconds / 3600);
        seconds = seconds - (hours * 3600);
        out_string = out_string + hours + ' hours ';
    }
    // Time >>> 1 Minute
    if (seconds >= 60) {
        var minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60);
        out_string = out_string + minutes + ' minutes ';
    }
    out_string = out_string + seconds + ' seconds';
    
    var time_input = document.getElementById('misc_downtime_time');
    time_input.value = out_string;
}