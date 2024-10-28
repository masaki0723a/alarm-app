let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const alarmInput = document.getElementById("alarmTime").value;
    if (!alarmInput) {
        alert("アラーム時刻を入力してください");
        return;
    }


    alarmTime = new Date();
    const [hours, minutes] = alarmInput.split(":");
    alarmTime.setHours(parseInt(hours, 10));
    alarmTime.setMinutes(parseInt(minutes, 10));
    alarmTime.setSeconds(0);

    const now = new Date();
    const timeToAlarm = alarmTime.getTime() - now.getTime();

    if (timeToAlarm > 0) {
        document.getElementById("status").innerText = `アラーム設定：${alarmInput}`;
        alarmTimeout = setTimeout(triggerAlarm, timeToAlarm);
    } else {
        alert("現在よりも後の時間を設定してください");
    }
}

function triggerAlarm() {
    alert("アラームの時間です！");
    document.getElementById("status").innerText = "アラーム未設定";
    alarmTime = null;
}

function cancelAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        document.getElementById("status").innerText = "アラームがキャンセルされました";
        alarmTimeout = null;
    }
}