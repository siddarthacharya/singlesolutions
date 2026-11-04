document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const accessKey = form.querySelector('[name="access_key"]').value.trim();
    const notice = document.getElementById("formNotice");
    const submitButton = document.getElementById("submitBtn");

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      notice.className = "form-notice error";
      notice.textContent = "Please add your Web3Forms Access Key in contact.html before submitting. Create a key at web3forms.com and replace YOUR_WEB3FORMS_ACCESS_KEY.";
      return;
    }

    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        notice.className = "form-notice success";
        notice.textContent = "Thank you! Your enquiry has been submitted successfully.";
        form.reset();
      } else {
        throw new Error(result.message || "Unable to submit your enquiry. Please try again.");
      }
    } catch (error) {
      notice.className = "form-notice error";
      notice.textContent = error.message || "Something went wrong. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
});