import { memberZone } from "src/components/Zone";
import useAuthStore from "stores/auth"

const Lab2: FunctionComponent = () => {
  const userInfo = useAuthStore.use.userInfo()

  const signOut = useAuthStore.use.signOut()

  const handleLogout = async () => {
    try {
      await signOut()
    } catch (err) {
        console.log(err)
    // eslint-disable-next-line no-empty
    } finally {

    }
  }

  return (
    <>
      <h2>Welcome: {userInfo.email}</h2>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default memberZone()(Lab2);