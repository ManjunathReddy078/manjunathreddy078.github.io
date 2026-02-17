const toggleButton = document.getElementById('toggleCertificates');
const allCertificatesSection = document.getElementById('allCertificates');

if (toggleButton && allCertificatesSection) {
  toggleButton.addEventListener('click', () => {
    const isHidden = allCertificatesSection.classList.contains('hidden');
    allCertificatesSection.classList.toggle('hidden');
    toggleButton.textContent = isHidden ? 'Hide Additional Certificates' : 'View All Certificates';
  });
}
