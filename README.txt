SINGLE SOURCE LEGAL SERVICES WEBSITE

Pages: Home, About, Services, Our Team, Contact.

Run locally:
1. Extract the ZIP.
2. Open index.html in a browser, or serve the folder with VS Code Live Server.

Responsive layout uses the Bootstrap CSS already included in the project plus css/custom.css.
The original Judicial template's dark charcoal and gold visual theme and supplied image/font assets are retained.

Before publishing:
- Add verified business phone, email and address to contact.html.
- Configure a verified email recipient / backend endpoint for the enquiry form. The current form validates input but does not send data.
- Review all legal service and professional profile wording for accuracy and approval.

CONTACT FORM SETUP (WEB3FORMS)
1. Create an Access Key at https://web3forms.com/ using the business receiving email address.
2. Open contact.html and replace YOUR_WEB3FORMS_ACCESS_KEY with the generated Access Key.
3. The form submits to https://api.web3forms.com/submit using fetch and displays success/error feedback.
4. Update the mobile number, email address and office address placeholders in contact.html.
5. The current Access Key is deliberately a dummy placeholder; the form will not send until replaced with a valid key.
