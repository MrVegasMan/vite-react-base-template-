import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import "./boostersPage.scss";
import BoosterCard from "@components/Booster/BoosterCard.tsx";

function Boosters() {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="py-8">

            <ul className={'flex flex-col gap-4px'}>
                <li>
                    <BoosterCard
                        title="Game multiplier"
                        level={1}
                        description="You receive"
                        multiplier={1}
                        multiplierIco="🧠"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className={'btn-booster compact-250-accent'} onClick={() => setIsOpen(true)}>Upgrade
                        </button>
                    </BoosterCard>

                </li>

                <li>
                    <BoosterCard
                        title="Timer"
                        level={1}
                        description="You play once a day"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className={'btn-booster compact-250-accent'} onClick={() => setIsOpen(true)}>Upgrade
                        </button>
                    </BoosterCard>

                </li>
                <li>
                    <BoosterCard
                        title="Boost your taps"
                        level={1}
                        description="You receive"
                        multiplier={1}
                        multiplierIco="🫵"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className={'btn-booster compact-250-accent'} onClick={() => setIsOpen(true)}>Upgrade
                        </button>
                    </BoosterCard>

                </li>
            </ul>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                        <Description>This will permanently deactivate your account</Description>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently
                            removed.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <button onClick={() => setIsOpen(false)}>Deactivate</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default Boosters
