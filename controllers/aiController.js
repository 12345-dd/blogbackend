const axios = require("axios");

const getAISuggestions = async (req, res) => {
     console.log("API KEY EXISTS:", !!process.env.API_KEY);
  console.log("API KEY VALUE:", process.env.API_KEY);
  const { title, content } = req.body;

  if (!title && !content) {
    return res.status(400).json({
      error: "Please provide title or content",
    });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `
                    You are an AI assistant.

                    Generate:
                    - 2 related blog topics
                    - 2 intro paragraph suggestions

                    Return ONLY valid JSON in this format:
                    {
                    "topics": ["...", "..."],
                    "intros": ["...", "..."]
                    }

                    Title: ${title}
                    Content: ${content}
                `,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleanText);
    } catch (err) {
      parsed = {
        topics: [],
        intros: [cleanText || "AI could not generate structured output"],
      };
    }
    res.json({
      topics: parsed.topics || [],
      intros: parsed.intros || [],
    });

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to generate AI suggestions",
    });
  }
};

module.exports = {getAISuggestions}