// Welcome Screen
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
    }, 4000);
});

// Modal
const modal = document.getElementById('conversion-modal');
document.getElementById('conversionModalBtn').onclick = () => modal.style.display = 'flex';
document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';

// Select Conversion
function selectConverter(type) {
    modal.style.display = 'none';
    document.getElementById('conversion-section').classList.remove('hidden');
    document.getElementById('conversion-title').innerText = `${type} Converter`;
}
