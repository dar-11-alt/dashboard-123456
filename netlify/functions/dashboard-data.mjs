import { getStore } from '@netlify/blobs'

export default async (req) => {
  try {
    const store = getStore('dashboard-data')

    if (req.method === 'GET') {
      const data = await store.get('stats', { type: 'json' })
      return Response.json(data || {})
    }

    if (req.method === 'POST') {
      const body = await req.json()
      await store.setJSON('stats', body)
      return Response.json({ success: true })
    }

    return new Response('Method not allowed', { status: 405 })
  } catch (error) {
    console.error('Dashboard data error:', error)
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

export const config = {
  path: '/api/dashboard-data',
}
