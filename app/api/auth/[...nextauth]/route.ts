import { handlers } from "@/auth"; 

// Export the underlying backend GET and POST handler operations securely
export const { GET, POST } = handlers;