function openTab(event, tabName) {
    var tabContents = document.querySelectorAll('.tab-content');
    var tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tab => tab.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

var currentStep = 1;

function nextStep(step) {
    document.getElementById(`step${step}`).classList.add('hidden');
    currentStep++;
    if (currentStep <= 3) {
        document.getElementById(`step${currentStep}`).classList.remove('hidden');
    } else {
        finish();
    }
}

function finish() {
    alert('All steps completed!');
    currentStep = 1;
    document.querySelectorAll('.step').forEach(step => step.classList.add('hidden'));
    document.getElementById('step1').classList.remove('hidden');
}

function selectFolder() {
    // Chức năng chọn thư mục sẽ được thêm vào đây
    alert('Select folder functionality is not implemented.');
}