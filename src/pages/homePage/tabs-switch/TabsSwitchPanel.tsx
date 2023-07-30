import React from "react";
import AccountIcon from 'images/account.svg';
import RewardsIcon from 'images/rewards.svg';
import WoofIcon from 'images/woof.svg';
import {
  TabsSwitchInner,
  WrapperTab,
  WrapperIcon,
  IconTitle
} from './styles/TabsSwitchPanel';
import { TABS } from "../homePageState";
import theme from "../../../GlobalTheme";

const mappedTabs = {
  [TABS.ACCOUNT_TAB]: {
    img: AccountIcon,
    title: 'Account',
    backgroundColor: theme.colours.primary.light,
    activeSvgColor: '#000000',
    activeBorderColor: '#000000',
    activeTitleColor: '#000000',
  },
  [TABS.REWARDS_TAB]: {
    img: RewardsIcon,
    title: 'Rewards',
    backgroundColor: theme.colours.secondary.main,
    activeSvgColor: '#000000',
    activeBorderColor: '#000000',
    activeTitleColor: '#000000',
  },
  [TABS.WOOF_TAB]: {
    img: WoofIcon,
    title: 'Woof',
    backgroundColor: '#0F1B2D',
    activeSvgColor: '#0F1B2D',
    activeBorderColor: '#E9C4D2',
    activeTitleColor: '#FFFFFF',
  }
};

type TabsSwitchProps = {
  tabs: any,
  activeTab: keyof typeof TABS,
  switchTab: Function,
}

const TabsSwitchPanel = ({ tabs, activeTab, switchTab }: TabsSwitchProps) => {
  return (
    <TabsSwitchInner>
      {Object.keys(mappedTabs).map((tabKey) => {
        const { img: IconComponent, title, backgroundColor, activeSvgColor, activeBorderColor, activeTitleColor } = mappedTabs[tabKey];
        const isActive = activeTab === tabKey;

        return (
          <WrapperTab
            key={tabKey}
            onClick={() => switchTab(tabs[tabKey])}
            isActive={isActive}
            backgroundColor={backgroundColor}
            activeSvgColor={activeSvgColor}
            activeBorderColor={activeBorderColor}
          >
            <WrapperIcon>
              <IconComponent />
            </WrapperIcon>
            <IconTitle isActive={isActive} activeTitleColor={activeTitleColor}>{title}</IconTitle>
          </WrapperTab>
        );
      })}
    </TabsSwitchInner>
  );
};

export default TabsSwitchPanel;