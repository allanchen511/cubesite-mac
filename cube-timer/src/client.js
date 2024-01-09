import { createClient } from "@supabase/supabase-js";

export const supabase = createClient ( 
    "https://sxioidfmumyzbrtuivvu.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4aW9pZGZtdW15emJydHVpdnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MDA0OTEsImV4cCI6MjAyMDI3NjQ5MX0.Ra25cyTiDDRgTwLTTnDNWekvX28dqXj9euCgu91GKdY"

)