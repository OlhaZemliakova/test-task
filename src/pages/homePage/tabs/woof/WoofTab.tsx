import { useApolloClient } from "@apollo/client";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { LargeHeading } from "Mixins/Font";
import { Button } from "./styles/WoofTab";
import React from "react"

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
      <LargeHeading $bold marginBottom="100px">
        Woof
      </LargeHeading>
      <Button onClick={() => onWoof()}>Click here to woof</Button>
    </>
  )
}