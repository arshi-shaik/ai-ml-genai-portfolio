// ====== Simple "Ask my portfolio" chat widget ======

const askInput = document.getElementById("ask-input-text");
const askSend = document.getElementById("ask-send");
const askBody = document.getElementById("ask-body");

// add message bubble
function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.className = "msg " + sender;
  div.textContent = text;
  askBody.appendChild(div);
  askBody.scrollTop = askBody.scrollHeight;
}

// main logic for answers
function handleQuestion(raw) {
  const q = raw.toLowerCase();

  // GenAI / RAG
  if (q.includes("genai") || q.includes("rag") || q.includes("chatbot")) {
    return "Right now I am planning GenAI projects like a Domain Q&A Chatbot (RAG) and an AI Notes Assistant based on my Simple Notes app.";
  }

  // churn project
  if (q.includes("churn") || q.includes("telecom") || q.includes("customer")) {
    return "My main completed project is a Telecom Customer Churn Analysis. I perform EDA, build an ML model using Python and Scikit-learn, and design an interactive Power BI dashboard.";
  }

  // skills
  if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
    return "My skills include Python, Java, JavaScript, SQL, Scikit-learn, basic Deep Learning, GenAI concepts (LLMs and RAG), Power BI, EDA, and web development with HTML/CSS/JavaScript.";
  }

  // education / about
  if (q.includes("about you") || q.includes("who are you") || q.includes("background") || q.includes("education")) {
    return "I am a final-year B.Tech CSE student from Andhra Pradesh, interested in AI/ML, Generative AI, and data analytics, and I like building dashboards and web apps.";
  }

  // contact
  if (q.includes("contact") || q.includes("email") || q.includes("linkedin") || q.includes("reach you")) {
    return "You can contact me using the details in the Contact section: email, my GitHub profile, and my LinkedIn link.";
  }

  // projects generic
  if (q.includes("project") || q.includes("projects") || q.includes("portfolio")) {
    return "You can scroll down to see AI / ML Projects and GenAI Projects. The churn analysis project is completed, and the CNN and GenAI projects are currently planned.";
  }

  // default
  return "You can explore the AI / ML Projects, GenAI, About, and Contact sections. Try asking about 'churn project', 'skills', 'GenAI', or 'contact'.";
}

// send flow with typing effect
function sendQuestion(text) {
  if (!text.trim()) return;

  addMessage(text, "user");

  // typing indicator
  const typing = document.createElement("div");
  typing.className = "msg bot";
  typing.textContent = "Typing...";
  askBody.appendChild(typing);
  askBody.scrollTop = askBody.scrollHeight;

  const answer = handleQuestion(text);

  setTimeout(() => {
    askBody.removeChild(typing);
    addMessage(answer, "bot");
  }, 400);
}

// button click
askSend.addEventListener("click", () => {
  const text = askInput.value.trim();
  if (!text) return;
  sendQuestion(text);
  askInput.value = "";
});

// Enter key
askInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    askSend.click();
  }
});

// quick-question buttons
document.querySelectorAll(".qq-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    sendQuestion(btn.textContent);
  });
});
