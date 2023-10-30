const arr = [100, 200, 300]


const Lab1: FunctionComponent = () => {
    const [counter, setCounter] = useState(1)
    const [ava, setAva] = useState()

    const total = arr.reduce((total, cur) => total + cur)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        fetch(`${API_URL}/posts`).then(res => res.json()).then(data => {
            console.log(data)
        })
    }, [])

    useEffect(() => {
        return () => {
            ava && URL.revokeObjectURL(ava['preview'])
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
            <input type="file" onChange={selectFile} />
            {ava && (
                <img src={ava['preview']} alt="" width="80%" />
            )}
            <button onClick={handleCounter}>Click</button>
        </>
    )
}

export default Lab1;