import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import pageDetails from './schemaTypes/pageDetails'
import author from './schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageDetails, author, category, blockContent],
}
