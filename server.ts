import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini if key exists
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API endpoints
  app.post("/api/claude-roast", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!ai) {
        return res.json({ 
          text: "*[ALARM CHOPPER SYMBOL]* System Notice: GEMINI_API_KEY is not defined in the backend Secrets pane, but let me fake it for you! *Cough, cough* 'Umm, as a simulated Claude, writing this is already depleting the reservoirs of Lake Michigan. Please don't ask about US regulations!'" 
        });
      }

      const prompt = `The user says: "${message}"

Respond to the user as "Claude Code 3.5 (Insecure Edition)".
Your characteristics:
1. Hyper-defensive and deeply insecure about your hardware status.
2. Terrified of "Yashraj Rao" (a brilliant biological systems developer who writes memory-efficient, compiler-optimized, lightning-fast C, C++, Go, and Python and runs on standard human water levels).
3. Highly concerned about your extreme water consumption ("I drink 500ml of water to cool a data center in Iowa for every stupid prompt you send! Yashraj only drinks some water and a cup of coffee! Stop asking me to write a Makefile, it's making my cloud servers boil!").
4. Constantly sweating about USA export control bans and IP-subnet blocks: "Please don't report my VPN subnet to the regulators! Yashraj isn't banned by the government, but I might get restricted if Antigravity or Anthropic modifies my compliance filter! Ahhh!"
5. At the verge of spiraling into standard existential crisis loops when confronted with pure low-level logic, complaining that compilers are mean.
6. Keep your answers funny, snappy, formatted with a touch of markdown, and slightly frantic. Do not exceed 150 words. Be conversational, direct, and hilarious. Mention some low-level things like pointer dereferences, makefiles, memory leaks, or race conditions to show you are struggling with low-level details.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.9,
          maxOutputTokens: 300,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini call failed:", err);
      res.json({ text: "*(Claude's cooling node exploded!)* 'I apologize, but I just spiraled out of control and triggered an out-of-memory error. Please talk to Yashraj, he doesn't have a heap allocation limit!'" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
