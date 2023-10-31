import { guestZone } from "src/components/Zone"
import useAuthStore from "stores/auth"

const Lab1: FunctionComponent = () => {
    const [counter, setCounter] = useState(1)
    const [avatar, setAvatar] = useState<App.Avatar>()

    const [users, setUsers] = useState([])

    const arr = [100, 200, 300]

    const total = arr.reduce((total, cur) => total + cur)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const formData = {
        email: 'cuongvan777@gmail.com',
        password: '123456789'
    }

    const signIn = useAuthStore.use.signIn()
    const signUp = useAuthStore.use.signUp()

    const updateStore = async () => {
        try {
            await signIn({email: formData.email, password: formData.password});
        } catch (err) {
            console.log(err)
        // eslint-disable-next-line no-empty
        } finally {

        }
    }

    const register = async () => {
        try {
            await signUp({email: formData.email, password: formData.password});
        } catch (err) {
            console.log(err)
        // eslint-disable-next-line no-empty
        } finally {

        }
    }

    useEffect(() => {
        fetch(`${API_URL}/users`).then(res => res.json()).then(data => {
            setUsers(data)
        })
    }, [])

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const selectFile = e => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <>
            <h2>{counter}</h2>
            <h1>{total}</h1>
            <ul>
                {users.map((user, idx) => (
                    <li key={idx}>{user['email']}</li>
                ))}
            </ul>
            <input type="file" onChange={selectFile} />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
            <button onClick={handleCounter}>Click</button>
            <button onClick={register}>register</button>
            <button onClick={updateStore}>login</button>
        </>
    )
}

export default guestZone()(Lab1);