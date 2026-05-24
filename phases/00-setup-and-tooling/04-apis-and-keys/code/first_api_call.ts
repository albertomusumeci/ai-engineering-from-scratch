import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config({
  path: "/home/alberto/study/ai-engineering-from-scratch/.env",
});

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const response = await client.messages.create({
	model: "claude-sonnet-4-20250514",
	max_tokens: 256,
	messages: [{role: "user", content: "What is a neural network in one sentence?"}]
});

console.log(response.content[0].text);
