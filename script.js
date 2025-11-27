// Simple rule-based "Ask my portfolio" (no real API)

const askInput = document.getElementById("ask-input-text");
const askSend = document.getElementById("ask-send");
const askBody = document.getElementById("ask-body");

function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.className = "msg " + sender;
  div.textContent = text;
  askBody.appendChild(div);
  askBody.scrollTop = askBody.scrollHeight;
}

function handleQuestion(q) {
  const question = q.toLowerCase();

  if (question.includes("genai") || question.includes("rag") || question.includes("chatbot")) {
    return "You can see the GenAI section. I have a Domain Q&A Chatbot (RAG concept) and an AI Notes Assistant idea.";
  }

  if (question.includes("churn") || question.includes("telecom") || question.includes("analytics")) {
    return "Check the Customer Churn Analysis project in AI / ML Projects. It uses Python, ML models and a Power BI dashboard.";
  }

  if (question.includes("skills") || question.includes("tech") || question.includes("stack")) {
    return "My main skills: Python, Java, JavaScript, SQL, Scikit-learn, GenAI concepts, Power BI, and web development with HTML/CSS/JS.";
  }

  if (question.includes("contact") || question.includes("email") || question.includes("linkedin")) {
    return "You can find my email, GitHub, and LinkedIn in the Contact section at the bottom.";
  }

  return "You can explore: AI / ML Projects, GenAI, About, and Contact sections. Ask specifically about projects, skills, or how to reach me.";
}

askSend.addEventListener("click", () => {
  const text = askInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  const answer = handleQuestion(text);
  setTimeout(() => addMessage(answer, "bot"), 300);

  askInput.value = "";
});

askInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    askSend.click();
  }
});
