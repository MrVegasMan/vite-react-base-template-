import {ButtonTap} from "@components/Button/ButtonTap.tsx";

function Home() {
    const [countTap, setCountTap] = useState(0);

    return (
        <>
            <div className={"flex flex-col gap-8px"}>
                <h1 className={"compact-250-numeric text-content-neutral-secondary"}>your balance</h1>
                <p className={"font-brand"}>{countTap}</p>
                <p className={"compact-300-accent-numeric text-positive-primary"}>
                    rank 1 235
                </p>

            </div>

            <div className={"flex"}>
                <ButtonTap onClick={() => setCountTap((count) => count + 1)}/>
            </div>
        </>
    )
}

export default Home
