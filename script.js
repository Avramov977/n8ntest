
const webhookUrl = "https://secure-utterly-phoenix.ngrok-free.app/webhook-test/driver-reminder"; // смени с реален

document.getElementById("driverForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch(webhookUrl, {
    method: "POST",
    body: formData
  })
  .then(res => alert("Изпратено успешно!"))
  .catch(err => alert("Грешка при изпращане."));
});
