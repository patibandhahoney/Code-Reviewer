// controllers/ai.controller.js (or wherever this is located)

import aiServices from '../services/ai.service.js';

export const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiServices(code);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
