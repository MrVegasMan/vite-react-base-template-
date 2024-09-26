import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import OfferCard from "@components/Offer/OfferCard.tsx";
import {oferCard} from "@/mocs/index.ts"

function Offerwall() {

    const [pageTitle] = useState('Get more IQ points')


    return (
        <div>
            <h1 className={'display-450-accent'}>{pageTitle}</h1>
            <TabGroup>
                <TabList className={'compact-300-accent'}>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    {/*<Tab>Tab 3</Tab>*/}
                </TabList>
                <TabPanels className={'compact-350-accent'}>
                    <TabPanel>
                        {oferCard.map(task => (
                            <OfferCard data={task} key={task.id}>
                            </OfferCard>
                        ))}

                    </TabPanel>
                    <TabPanel>Content 2</TabPanel>
                    <TabPanel>Content 3</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default Offerwall
