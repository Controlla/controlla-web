import { handler } from './.output/server'
// Use programmatically
const { statusCode, headers, body } = handler({ rawPath: '/' })
