// Example FAQ data
const faqs = [
  {
    question: "What are my responsibilities?",
    answer: "Click to learn more about your responsibilities.",
    link: "faq-responsibilities.html"
  },
  {
    question: "How do I log in to the app?",
    answer: "Click to learn more about logging in.",
    link: "faq-login.html"
  },
  {
    question: "How do I use the app?",
    answer: "See how to navigate the app.",
    link: "faq-views.html"
  },
  {
    question: "As Executive Secretary, what are the links I access regularly?",
    answer: "Useful links found here",
    link: "faq-useful-links.html"
  },
  {
    question: "Who can I contact for support?",
    answer: "Support contact details here.",
    link: "faq-support.html"
  }
];


function displayFAQs() {
  const faqList = document.getElementById("faq-list");
  if (!faqList) return;
  faqList.innerHTML = "";

  faqs.forEach(faq => {
    const q = document.createElement("h3");
    const link = document.createElement("a");
    link.href = faq.link;
    link.textContent = faq.question;
    link.style.color = "#1a73e8"; // optional style
    q.appendChild(link);

    const a = document.createElement("p");
    a.textContent = faq.answer;

    faqList.appendChild(q);
    faqList.appendChild(a);
  });
}

const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Default to dark mode unless user explicitly chose light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.remove('dark-mode');
} else {
  body.classList.add('dark-mode'); // default to dark
}

// Toggle and persist
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});



document.addEventListener("DOMContentLoaded", displayFAQs);
