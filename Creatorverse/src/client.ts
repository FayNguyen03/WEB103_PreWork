import {createClient} from '@supabase/supabase-js';
require('dotenv').config();

const supabaseURL:string = "https://fjypgcntpoeosohzmkjp.supabase.co";

const supabaseKey:string | any = process.env.API_KEY;

const supabase:any = createClient(supabaseURL, supabaseKey);

export default supabase;
