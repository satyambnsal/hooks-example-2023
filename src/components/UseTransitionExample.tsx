import {useState, useTransition} from 'react'
import TabButton from './TabButton'
import AboutTab from './AboutTab'
import PostsTab from './PostsTab'
import ContactTab from './ContactTab'

enum TABS {
    ABOUT,
    POSTS,
    CONTACTS
}
export default function UseTransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState(TABS.ABOUT);

    function selectTab(nextTab: TABS) {
        startTransition(() => {
            setTab(nextTab)
        })
    }

    return (<div>
        <TabButton
        isActive={tab === TABS.ABOUT}
        onClick={() => selectTab(TABS.ABOUT)}
        >
            About
            </TabButton>
            <TabButton
        isActive={tab === TABS.POSTS}
        onClick={() => selectTab(TABS.POSTS)}
        >
            Posts
            </TabButton>
            <TabButton
        isActive={tab === TABS.CONTACTS}
        onClick={() => selectTab(TABS.CONTACTS)}
        >
            Contacts
            </TabButton>

            {
                tab === TABS.ABOUT && <AboutTab />
            }
                        {
                tab === TABS.POSTS && <PostsTab />
            }
                        {
                tab === TABS.CONTACTS && <ContactTab />
            }
    </div>)
}