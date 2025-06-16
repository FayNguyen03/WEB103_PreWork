import {createClient} from '@supabase/supabase-js';
const supabaseURL:string =  import.meta.env.VITE_API_URL;
const supabaseKey:string = import.meta.env.VITE_API_KEY;

export const supabase:any = createClient(supabaseURL, supabaseKey);
