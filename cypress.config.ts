import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '2amwfo',
  e2e: {
    'baseUrl': 'http://localhost:4200',
  }
})
