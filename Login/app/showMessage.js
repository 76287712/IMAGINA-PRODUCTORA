
export function showMessage(message, type="success" ){
    Toastify({
        text: message,
        duration: 2000,
        destination: message,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "rgb(92,13,88)" : "red"
        },
        onClick: function(){} // Callback after click
    }).showToast();
}