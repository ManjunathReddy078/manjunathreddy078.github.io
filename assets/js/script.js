const toggleButton = document.getElementById('toggleCertificates');
const allCertificatesSection = document.getElementById('allCertificates');

if (toggleButton && allCertificatesSection) {
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.addEventListener('click', () => {
    const isHidden = allCertificatesSection.classList.contains('hidden');
    allCertificatesSection.classList.toggle('hidden');
    toggleButton.textContent = isHidden ? 'Hide Additional Certificates' : 'View All Certificates';
    toggleButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');

    if (isHidden) {
      allCertificatesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
