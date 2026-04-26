import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getCurrentPricing = async () => {
  const { data: settings } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'launch_end_date')
    .single()
  
  const launchEnd = new Date(settings.value)
  const now = new Date()
  const isLaunch = now < launchEnd
  
  const { data: level1 } = await supabase
    .from('levels')
    .select('price_maloti, price_usd')
    .eq('id', 1)
    .single()
  
  return {
    price: isLaunch ? level1.price_maloti : 500,
    usd: isLaunch ? level1.price_usd : 27.00,
    isLaunch,
    daysLeft: Math.max(0, Math.ceil((launchEnd - now) / (1000 * 60 * 60 * 24)))
  }
}

export const registerFranchisee = async ({ phone, fullName, referredBy }) => {
  const referralCode = `FB${phone.slice(-4)}${Date.now().toString().slice(-3)}`
  
  const { data, error } = await supabase
    .from('franchisees')
    .insert({
      phone,
      full_name: fullName || 'Makhauhelo Moima',
      referral_code: referralCode,
      referred_by_code: referredBy,
      launch_member: new Date() < new Date('2026-07-25')
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}
