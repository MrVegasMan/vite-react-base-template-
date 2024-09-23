function Iq() {
    const navigate = useNavigate()
    const [pageTitle] = useState('Brain Genius')


    return (
        <div>
            <h1 className={'display-450-accent'}>{pageTitle}</h1>
            <h2 className={'text-350-default'}>Answer questions — grow your IQ</h2>
            <h2 className={'text-350-default'}>Coming soon</h2>
            <br/>
            <br/>
            <button onClick={() => navigate(-1)}>
                back
            </button>
        </div>
    )
}

export default Iq
