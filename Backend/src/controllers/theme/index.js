const hardCodedThemes = {
  default: {
    background: "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)",
    chatBubbleColor: "#fff",
    textColor: "#000",
    textInputColor: "#fff",
    buttonColor: "aquamarine",
  },

  carbon: {
    background: "#000",
    chatBubbleColor: "#242424",
    textColor: "#fff",
    textInputColor: "#242424",
    buttonColor: "#242424",
  },

  tangerine: {
    background: "#FFA500",
    chatBubbleColor: "#FFD68A",
    textColor: "#754C00",
    textInputColor: "#FFD68A",
    buttonColor: "#FFD68A",
  },
};

module.exports = {
  get(req, res) {
    res.send({
      data: hardCodedThemes,
    });
  },
};
