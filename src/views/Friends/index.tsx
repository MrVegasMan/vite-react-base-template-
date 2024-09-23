import "./friendsPage.scss";
import InviteFriends from "@components/Invite/InviteFriends.tsx";

interface FriendBonusCardData {
    label: string;
    value: number;
    icon?: string;
}

const friendsData: FriendBonusCardData[] = [
    {label: 'Friends', value: 5},
    {label: 'IQ Earned', value: 150, icon: '🧠'},
    {label: 'Premium ref', value: 5, icon: '⭐'}
];

function Friends() {

    const [pageTitle] = useState('Friends')


    return (
        <div className="flex flex-col gap-24px">
            <div>
                <h1 className={'display-450-accent mt-40'}>{pageTitle}</h1>
                <p className={'text-350-default mt-8'}>Invite your friends and get 20% of their claims</p>

                <div className={'grid grid-cols-3 gap-4px mt-12'}>

                    {friendsData.map((friend, index) => (
                        <div key={index} className="friends-bonus-card-w bg-neutral-low rounded-20 py-20 px-12">
                            <p className="compact-250-default text-content-neutral-secondary">{friend.label}</p>
                            <p className="compact-350-accent mt-2">
                                {friend.value}{' '}
                                {friend.icon &&
                                    <span>{friend.icon}</span>} {/* Отображаем иконку только если она есть */}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <InviteFriends addWrapperClassName={'mt-8'}/>

            <div className={'text-left py-8 px-20'}>
                <h3 className={'display-350-accent'}>Friends</h3>
                <ul className={'py-5'}>
                    <li className={'referral-list-item-w flex flex-row items-center gap-12px py-12'}>
                        <div className={"user-avatar rounded-full overflow-hidden bg-brand-high grow-0"}>
                            <img
                                className={"size-full"}
                                src="/src/assets/images/wojak.svg"
                                alt="User Avatar"
                            />
                        </div>

                        <p className={'compact-300-accent text-left justify-self-start text-ellipsis grow'}>ddiddiddi
                            ddddiddiddiddi ddidd iddddiddiddi</p>


                        <div className={'flex flex-row gap-8px grow-0 text-nowrap'}>
                            <p className={'compact-300-accent-numeric'}>1 {' '} <span>⭐</span></p>
                            <p className={'compact-300-accent-numeric'}>2 {' '} <span>🧠</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Friends
