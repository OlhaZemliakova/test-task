import React from "react";
import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import {
  RewardsTabWrapper,
  RewardsTabImage,
  RewardsTabSubtitle,
  RewardsBones,
  RewardsDescription,
} from './stales/RewardsTab';
import Bone from "images/bone.png";

export type RewardsTabProps = {}

export const RewardsTab = ({ }: RewardsTabProps) => {

  const { data, loading, refetch } = useGetRewardsQuery();

  const rewards = data && data.getRewards.success ? data.getRewards.data : null;
  console.log(rewards);

  if (loading) {
    return <>
    </>
  }

  return (
    <RewardsTabWrapper>
      <RewardsTabSubtitle>
        Your rewards
      </RewardsTabSubtitle>
      <RewardsTabImage src={Bone} />
      <RewardsBones>
        {rewards.bones} Bones
      </RewardsBones>
      <RewardsDescription>
        You’ll earn a bone every time you achieve a “good boy” status.
      </RewardsDescription>
    </RewardsTabWrapper>
  )
}