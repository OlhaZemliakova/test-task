import React from "react"
import { useApolloClient } from "@apollo/client";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { WoofButton, WoofTabSubtitle } from "./styles/WoofTab";

export type WoofTabProps = {}

export const WoofTab = ({ }: WoofTabProps) => {

  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const onWoof = () => {
    sendWoofMutation(apolloClient, {
      timestamp: Date.now().toLocaleString()
    }).then((res) => {
      openSuccessToast("Woofed!");
    }).catch((err) => {
      openErrorToast("Error during woof");
    })
  }

  return (
    <>
      <WoofTabSubtitle>
        Woof
      </WoofTabSubtitle>
      <WoofButton onClick={() => onWoof()}>Click here to woof</WoofButton>
    </>
  )
}