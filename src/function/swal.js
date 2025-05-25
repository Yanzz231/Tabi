const Swal = require("sweetalert2")
export async function messagePopup(text) {
    const result = await Swal.fire({
        text: text,
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        icon: "warning"
    });
    return result.isConfirmed;
}