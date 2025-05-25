const Swal = require("sweetalert2");

export async function messagePopup(text, confirm, cancel, icon) {
    const result = await Swal.fire({
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: confirm,
        cancelButtonText: cancel,
        buttonsStyling: false,
        customClass: {
            confirmButton: '',
            cancelButton: ''
        },
        didOpen: () => {
            const confirmBtn = document.querySelector('.swal2-confirm');
            const cancelBtn = document.querySelector('.swal2-cancel');

            if (confirmBtn) {
                confirmBtn.style.backgroundColor = '#5D6E47';
                confirmBtn.style.color = 'white';
                confirmBtn.style.border = 'none';
                confirmBtn.style.padding = '8px 20px';
                confirmBtn.style.borderRadius = '4px';
                confirmBtn.style.fontWeight = 'bold';
                confirmBtn.style.marginRight = '10px'; 
            }

            if (cancelBtn) {
                cancelBtn.style.backgroundColor = '#d3d3d3';
                cancelBtn.style.color = 'black';
                cancelBtn.style.border = 'none';
                cancelBtn.style.padding = '8px 20px';
                cancelBtn.style.borderRadius = '4px';
                cancelBtn.style.fontWeight = 'bold';
            }
        }
    });

    return result.isConfirmed;
}
