import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bmtrvbxbqdmzfhyotepu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdHJ2YnhicWRtemZoeW90ZXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyMzU3MDEsImV4cCI6MjA0NDgxMTcwMX0.87VD2EKn3e57F3kd7_dqQiglGIlcqSlfxfoe0UR_Ulo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
