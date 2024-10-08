// redirectHelper.js
export function handleRedirectBasedOnEdc() {
    // Check if 'edc' exists in localStorage
    const edcLog = localStorage.getItem('edc');
  
    // Redirect based on the existence and validity of 'edc' in localStorage
    if (edcLog == 'true' && edcLog !== 'null' && edcLog !== 'undefined') {
      location.href = "/edc-login"; // Redirect to '/edc-login' if 'edc' exists
    } else {
      location.href = "/"; // Redirect to '/' if 'edc' does not exist
    }
  }