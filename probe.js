import { v4 as uuidv4 } from 'uuid'

export function main (_event) {
  let payload = {
    id: uuidv4(),
    date: new Date().toISOString()
  }

  if (Math.random() > 0.5) {
    payload = { ...payload, category: 'high' }
  } else {
    payload = { ...payload, category: 'low' }
  }

  console.log(`${JSON.stringify(payload)}`)
}
