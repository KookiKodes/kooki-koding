import {useState, useEffect} from 'react'; 
import cuid from 'cuid';

export default function useSession(uid: string) {
  const [UID, setUID] = useState(uid);
  return UID;
}