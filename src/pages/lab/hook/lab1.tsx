import useAuthStore from "src/stores/auth"

const Lab1: FunctionComponent = () => {
    const [counter, setCounter] = useState(1)
    const [ava, setAva] = useState([])


    const [users, setUsers] = useState([])

    const arr = [100, 200, 300]

    const total = arr.reduce((total, cur) => total + cur)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const formData = {
        email: 'cuongnv1006@gmail.com',
        password: '12345678'
    }

    const signIn = useAuthStore.use.signIn()

    const updateStore = async () => {
        try {
            await signIn({email: formData.email, password: formData.password});
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
            ava && URL.revokeObjectURL(ava.preview)
        }
    }, [ava])

    const selectFile = e => {
        const file = e.target.files[0]


        file.preview = URL.createObjectURL(file)

        setAva(file)

        console.log(file)
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
            {ava && (
                <img src={ava.preview} alt="" width="80%" />
            )}
            <button onClick={handleCounter}>Click</button>
            <button onClick={updateStore}>Update</button>
        </>
    )
}

export default Lab1;