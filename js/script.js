let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let alertTrigger = document.getElementById('liveAlertBtn');

function alert(message, type) {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Your information has been submitted and a representative will be in contact with you shortly!', 'success')
  })
}