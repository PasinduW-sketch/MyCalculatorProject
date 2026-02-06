// Tab Logic
function switchTab(evt, name) {
    let panes = document.getElementsByClassName("tab-pane");
    for (let p of panes) p.style.display = "none";
    let btns = document.getElementsByClassName("tab-btn");
    for (let b of btns) b.classList.remove("active");
    document.getElementById(name).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Universal Converter Logic (Thermal, Motion, Force)
function runUniversalConverter() {
    let val = parseFloat(document.getElementById('unitVal').value);
    let type = document.getElementById('convertType').value;
    let res = "";

    if (type === 'c-k') res = (val + 273.15).toFixed(2) + " K";
    if (type === 'mps-kmh') res = (val * 3.6).toFixed(2) + " km/h";
    if (type === 'n-kg') res = (val / 9.80665).toFixed(3) + " kg(f)";
    if (type === 'psi-bar') res = (val * 0.0689476).toFixed(4) + " Bar";
    
    document.getElementById('unitOut').innerText = "Result: " + res;
}

// Bio-Medical Analytics (BMI & BMR)
function analyzeHealth() {
    let w = parseFloat(document.getElementById('h-weight').value);
    let h_cm = parseFloat(document.getElementById('h-height').value);
    let age = parseFloat(document.getElementById('h-age').value);
    let h_m = h_cm / 100;

    let bmi = w / (h_m * h_m);
    // Simple BMR formula (Mifflin-St Jeor)
    let bmr = (10 * w) + (6.25 * h_cm) - (5 * age) + 5; 

    document.getElementById('healthOut').innerHTML = 
        `<strong>BMI:</strong> ${bmi.toFixed(2)}<br><strong>Est. BMR:</strong> ${bmr.toFixed(0)} kcal/day`;
}

// Basic Calc Logic
function append(v) { document.getElementById('display').value += v; }
function clearAll() { document.getElementById('display').value = ""; }
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch { document.getElementById('display').value = "Error"; }
}