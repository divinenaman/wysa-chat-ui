const hardCodedChats = [
  {
    type: "incoming",
    text: "Hey There!",
  },
  {
    type: "incoming",
    text: "I'm Wysa - an AI chatbot built by therapists.",
  },
  {
    type: "incoming",
    text: "I'm here to understand your concerns and connect you with best resources available to support you.",
  },
  {
    type: "incoming",
    text: "Can I help?",
  },
];

module.exports = {
  get(req, res) {
    res.send({
      data: hardCodedChats,
    });
  },
};
