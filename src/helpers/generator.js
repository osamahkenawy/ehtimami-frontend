
export const generateAlphaNumericId =  (length = 8) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let orderId = '';
  let hasNumber = false;
  let hasLetter = false;

  while (orderId.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];

    if (/[0-9]/.test(randomChar)) {
      hasNumber = true;
    } else if (/[A-Z]/.test(randomChar)) {
      hasLetter = true;
    }

    orderId += randomChar;

    // Ensure at least one number and one letter
    if (orderId.length === 8 && (!hasNumber || !hasLetter)) {
      orderId = '';
      hasNumber = false;
      hasLetter = false;
    }
  }

  return orderId;
}
