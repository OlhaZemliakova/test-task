import React from "react"
import { HugeText, LargeHeading, SmallText } from "Mixins/Font";
import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import { RewardsTabImage } from './stales/RewardsTab';
import Bone from "images/bone.png";

export type RewardsTabProps = {}

export const RewardsTab = ({}: RewardsTabProps) => {

  const {data, loading, refetch} = useGetRewardsQuery();

  const rewards = data && data.getRewards.success ? data.getRewards.data : null;
  console.log(rewards);

  if (loading) {
    return <>
    </>
  }

  return (
    <>
    <LargeHeading $bold>
    Your rewards
      </LargeHeading>
      <RewardsTabImage src={Bone}/>
      <HugeText $bold color="#A13D63" marginBottom="18px">
       {rewards.bones} Bones
      </HugeText>
      <SmallText maxWidth="303px" width="100%" textAlign="center">
      You’ll earn a bone every time you achieve a “good boy” status.
      </SmallText>
    </>
  )
}