import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/config'

export const getProducts = () => {
  const db = getFirestore(app)
  const queryDoc = collection(db, 'productos')
  return getDocs(queryDoc)
}
