import Swal from 'sweetalert2';

export const useToast = () => {
  return (msg = '', type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    Swal.fire({
      toast: true,
      icon: type,
      title: msg,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      padding: '2rem',
      customClass: { container: 'toast' },
    });
  };
};
