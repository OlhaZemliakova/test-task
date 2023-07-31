import React from "react";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import {
  AccountTabWrapper,
  AccountTabImageWrapper,
  AccountTabLabel,
  CurrencyLabel,
  AccountTabSubtitle,
  AccountBalanceText,
  AccountStatus,
  AccountTabLabelText
} from './styles/AccountTab';
import DoggyDollar from 'images/doggy_dollar.png';

export type AccountTabProps = {}

export const AccountTab = ({ }: AccountTabProps) => {

  const { data, loading, refetch } = useGetAccountQuery();

  const account = data && data.getAccount.success ? data.getAccount.data : null;

  if (loading) {
    return <>
    </>
  }

  return (
    <AccountTabWrapper>
      <AccountTabSubtitle>
        Your current account balance is
      </AccountTabSubtitle>
      <AccountTabImageWrapper src={DoggyDollar} />
      <AccountBalanceText>
        $D {account.balance}
      </AccountBalanceText>
      <CurrencyLabel>
        {account.currency}
      </CurrencyLabel>
      <AccountStatus>
        Account status
      </AccountStatus>
      <AccountTabLabel>
        <AccountTabLabelText>
          {account.status}
        </AccountTabLabelText>
      </AccountTabLabel>
    </AccountTabWrapper>
  )
}