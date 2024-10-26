document.addEventListener('DOMContentLoaded', () => {
    const weightSlider = document.getElementById('weight');
    const weightValueDisplay = document.getElementById('weightValue');
    const reviewWeightDisplay = document.getElementById('reviewWeight');
    const electronicTypeSelect = document.getElementById('electronicType');
    const selectedItemsDisplay = document.getElementById('selectedItems');

    // Update weight display in real-time
    weightSlider.addEventListener('input', () => {
        const weight = weightSlider.value;
        weightValueDisplay.textContent = `${weight} Kg`;
        reviewWeightDisplay.textContent = `${weight} Kg`;
    });

    // Update selected item display in review section
    electronicTypeSelect.addEventListener('change', () => {
        selectedItemsDisplay.textContent = electronicTypeSelect.value;
    });
});

function showSimulation() {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
}
function gotoReciclagem(){
    window.location.href = 'reciclagem.html'; // Redirects to the recycling page
}
