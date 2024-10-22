import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://siezjqyrethyhwifvgli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZXpqcXlyZXRoeWh3aWZ2Z2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MDQxODQsImV4cCI6MjA0NTE4MDE4NH0.koxHmjD-IM2-VmgPt9QIoK6pgdSiKbIaOe6XYiP-kqs";
const supabase = createClient(supabaseUrl, supabaseKey);
