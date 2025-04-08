import {defineCliConfig} from 'sanity/cli'

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const projectId = 'x8k5zh5f'
const dataset = 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
