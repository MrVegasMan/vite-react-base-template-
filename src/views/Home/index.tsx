import "./homePage.scss";

function Home() {

    return (
        <>
            <div className={"flex flex-col items-center gap-8px"}>

                <img className={'cover-image'} src={'src/assets/images/cover.svg'}
                     alt="Brain Genius Cover image"/>
                <img className={'cover-title-image'} src={"src/assets/images/cover-title.svg"}
                     alt="Brain Genius 100% IQ"/>
                <div className={'home-cover-text-w'}>
                    <h1 className={"display-500-accent"}>Welcome to Brain Genius 100% IQ</h1>
                    <div className={'flex flex-col gap-24px'}>
                        <p className={"text-350-default"}>
                            Answer AI-generated quiz questions, increase your IQ, and show if you're smarter than a
                            machine.
                        </p>
                        <p className={"text-350-default"}>
                            As you answer questions, not only will you test your intelligence, but you will also get IQ
                            points
                            that could be exchanged for $IQ tokens.
                        </p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home
