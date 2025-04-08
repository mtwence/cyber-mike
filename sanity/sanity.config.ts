import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemaTypes from './schemas/index';

// Use hardcoded values for now since we can't use dotenv in browser
const projectId = 'x8k5zh5f';
const dataset = 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'Cyber_Mike_Studio',
  title: 'Cyber Mike Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}); 