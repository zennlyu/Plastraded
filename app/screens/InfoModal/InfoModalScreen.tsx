import React from "react";
import { ScrollView } from "react-native";
import HTML from "react-native-render-html";

import { ui } from "utils";

import styles from "./InfoModalScreen.styles";
import navigationOptions from "./InfoModal.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";
import emissionInfo from "../../../assets/emission-info/emission-info.json";

const InfoModalScreen = ({ route }) => {
  const emissionModelType = route?.params?.emissionModelType;
  let html: string;

  if (emissionModelType) {
    const htmlContent = emissionInfo.find((item) => item?.key === emissionModelType);

    html = htmlContent ? htmlContent?.body : `<h2> ${emissionModelType} placeholder </h2>`;
  } else {
    html = methodology[0].body;
  }

  return (
    <ScrollView style={styles.container}>
      <HTML source={{ html }} onLinkPress={ui.onHTMLBodyLinkPress} baseFontStyle={styles.text} />
    </ScrollView>
  );
};

InfoModalScreen.navigationOptions = navigationOptions;

export default InfoModalScreen;
