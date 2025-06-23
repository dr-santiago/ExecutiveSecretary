// Example FAQ data
const faqs = [
  {
    question: "How do I log in to the app?",
    answer: "Click the login button and use your registered email address to sign in."
  },
  {
    question: "Can I customize the app?",
    answer: "Yes! You can customize views and workflows in the app settings."
  },
  {
    question: "Who can I contact for support?",
    answer: "Please email branimir.rivero@missionary.org for assistance."
  }
];

function displayFAQs() {
  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = "";
  faqs.forEach(faq => {
    const q = document.createElement("h3");
    q.textContent = faq.question;
    const a = document.createElement("p");
    a.textContent = faq.answer;
    faqList.appendChild(q);
    faqList.appendChild(a);
  });
}

document.addEventListener("DOMContentLoaded", displayFAQs);
