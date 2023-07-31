import React from "react";
import { HomePageTabWrapper, HomePageWrapper, Button, HomePageTitle } from "./styles/HomePage";
import Spacer from "components/position/Spacer";
import PageBackground from "pagesShared/Background";
import { useHomePageState, TABS } from './homePageState';
import { AccountTab } from "./tabs/account/AccountTab";
import { RewardsTab } from "./tabs/rewards/RewardsTab";
import { WoofTab } from "./tabs/woof/WoofTab";
import TabsSwitchPanel from "./tabs-switch/TabsSwitchPanel";

const HomePage = () => {

  const [state, dispatch] = useHomePageState();

  const switchTab = (tab: typeof TABS) => {
    dispatch({
      type: 'SWITCH_TAB',
      payload: {
        newTab: tab
      }
    })
  }

  const tabs = {
    [TABS.ACCOUNT_TAB]: (
      <AccountTab />
    ),
    [TABS.REWARDS_TAB]: (
      <RewardsTab />
    ),
    [TABS.WOOF_TAB]: (
      <WoofTab />
    ),
  };

  return (
    <PageBackground>
      <Spacer height={24} />
      <HomePageTitle>
        Welcome back, Billy
      </HomePageTitle>
      <TabsSwitchPanel
        tabs={TABS}
        activeTab={state.currTab}
        switchTab={switchTab}
      />
      <Spacer height={24} />
      <HomePageTabWrapper>
        {tabs[state.currTab]}
      </HomePageTabWrapper>
      <Button>
        Logout
      </Button>
    </PageBackground>
  )

}

export default HomePage;