
const webhookUrl = "https://your-n8n-url.com/webhook/driver-form"; // смени с реален

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
