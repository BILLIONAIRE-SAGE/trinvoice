// Select all FAQ items
const faqItems = document.querySelectorAll('.lorem');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const hiddenText = item.nextElementSibling; // Target the associated answer
    const icon = item.querySelector('img'); // Target the dropdown icon

    // Toggle the visibility of the answer text
    hiddenText.style.display = hiddenText.style.display === 'flex' ? 'none' : 'flex';

    // Add rotation animation to the icon
    icon.classList.toggle('rotate');
  });
});