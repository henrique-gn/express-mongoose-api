import { start } from '@/http/server'
import { connectDatabase } from '@/database/connection'
import { config } from 'dotenv'

config()
connectDatabase()
start()
