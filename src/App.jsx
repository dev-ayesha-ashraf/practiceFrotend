import { useEffect , useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`https://practice-backend-roan.vercel.app/getUsers`)
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
    <div className='w-100 vh-100 d-flex justify-center'>
      <div className='w-50'>
    <table className='table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user => {
        return <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>

        </tr>
      })
    }
  </tbody>
</table>
</div>
    </div>

    </>
  )
}

export default App
