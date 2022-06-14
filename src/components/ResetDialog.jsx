// import module
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// variabel untuk menampilkan sweetalert2
const MySwal = withReactContent(Swal);

// export component ResetDialog
export default function ResetDialog(setResult, form) {
  // tampilkan alert
  return MySwal.fire({
    title: 'Apakah kamu yakin ingin me-reset matriks?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#60A5FA',
    confirmButtonText: (
      <span className='flex flex-row'>
        <span>Yakin dong</span>
      </span>
    ),
    cancelButtonColor: '#F87171',
    cancelButtonText: (
      <span className='flex flex-row'>
        <span>Gak jadi deh</span>
      </span>
    ),
  }).then((result) => {
    // lakukan hal ini saat user menekan tombol confirm
    if (result.isConfirmed) {
      // kosongkan result
      setResult();
      // kosongkan form
      form.current.reset();
      // tampilkan toast
      toast.success('Matriks telah berhasil di-reset!', {
        theme: 'colored',
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  });
}
