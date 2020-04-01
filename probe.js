import uuid from 'uuid'

export function main (_event) {
  let payload = {
    id: uuid.v4().toLowerCase(),
    date: new Date().toISOString()
  }

  if (Math.random() > 0.5) {
    payload = { ...payload, category: 'high' }
  } else {
    payload = { ...payload, category: 'low' }
  }

  console.log(`INFO ${payload}`)
}
