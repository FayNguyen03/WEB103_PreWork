import {createClient} from '@supabase/supabase-js';
const supabaseURL:string = "https://fjypgcntpoeosohzmkjp.supabase.co";
const supabaseKey:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXBnY250cG9lb3NvaHpta2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4Nzc3MjAsImV4cCI6MjA2NTQ1MzcyMH0.qOIpC7VS-0uuFfhOPnbxIvx7KZK8bSbi-PPjmv-lFUU";

export const supabase:any = createClient(supabaseURL, supabaseKey);
