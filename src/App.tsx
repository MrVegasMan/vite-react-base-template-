import {useVcosole} from '@hooks/useVconsole'

import MyRoutes from '@/router'
import {AppFooter} from "@components/AppFooter/AppFooter.tsx";
import {UserScore} from "@components/UserScore/UserScore.tsx";

export default function App() {
    const [vc] = useVcosole()
    useEffect(() => {
        console.log('VConsole ?', vc)
        if (vc) {
            vc.show()
        }
    }, [])
    return (
        <>
            <UserScore/>
            <div className={'p-4 grow'}>
                <MyRoutes/>
            </div>
            <AppFooter/>
        </>
    )
}
