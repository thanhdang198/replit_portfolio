import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.status(201).json({ message: "Message sent successfully", data: message });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An error occurred while sending your message" });
      }
    }
  });

  // Route to get GitHub user data
  app.get("/api/github/:username", async (req: Request, res: Response) => {
    try {
      const username = req.params.username;
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `Failed to fetch GitHub data: ${response.statusText}` 
        });
      }
      
      const userData = await response.json();
      res.json(userData);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching GitHub data" });
    }
  });

  // Route to get GitHub repos
  app.get("/api/github/:username/repos", async (req: Request, res: Response) => {
    try {
      const username = req.params.username;
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `Failed to fetch GitHub repos: ${response.statusText}` 
        });
      }
      
      const repos = await response.json();
      res.json(repos);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching GitHub repos" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
