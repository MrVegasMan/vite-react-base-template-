import {useUserStore} from '@store/user'

function Offerwall() {
    const navigate = useNavigate()
    const [pageTitle] = useState('Offerwall')
    const {num, changeNum} = useUserStore()

    return (
        <div>
            <h1>{pageTitle}</h1>
            <h2>userSore.num:{num}</h2>
            <button onClick={changeNum}>
                click on the store provided by zustand to change the number
            </button>
            <br/>
            <br/>
            <button onClick={() => navigate(-1)}>
                back
            </button>
        </div>
    )
}

export default Offerwall
