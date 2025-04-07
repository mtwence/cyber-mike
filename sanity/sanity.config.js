import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'x8k5zh5f',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      // Add any custom components here if needed
    }
  }
})
