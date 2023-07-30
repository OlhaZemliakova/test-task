import React from "react";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import { AccountTabWrapper, AccountTabImageWrapper, AccountTabLabel, CurrencyLabel } from './styles/AccountTab';
import { LargeHeading, SmallHeading, SmallText, HugeText } from "Mixins/Font";
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
      <LargeHeading $bold marginBottom="8px" textAlign="center">
        Your current account balance is
      </LargeHeading>
      <AccountTabImageWrapper src={DoggyDollar} />
      <HugeText $bold color="#99C82D">
        $D {account.balance}
      </HugeText>
      <CurrencyLabel>
        {account.currency}
      </CurrencyLabel>
      <SmallText marginBottom="15px">
        Account status
      </SmallText>
      <AccountTabLabel>
        <SmallText $bold color="#99C82D">
          {account.status}
        </SmallText>
      </AccountTabLabel>
    </AccountTabWrapper>
  )
}