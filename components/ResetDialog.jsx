import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function ResetDialog (setResult, form) {
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
    )
  }).then((result) => {
    if (result.isConfirmed) {
      setResult()
      form.current.reset()
      MySwal.fire({
        title: 'Matriks berhasil di-reset!',
        icon: 'success',
        confirmButtonColor: '#60A5FA'
      })
    }
  })
}