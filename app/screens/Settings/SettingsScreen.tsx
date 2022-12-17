import React, { useState } from "react";
import { View, TouchableWithoutFeedback, ScrollView, Image } from "react-native";
import ExpoConstants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import { ImagesAssets } from "constant";
import { Button, Text, SocialMedia, ListItem } from "components";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./SettingsScreen.styles";

const SettingsScreen = (props) => {
  const navigator = navigate(props.navigation);

  const rowItems = [];
  const [steps, setSteps] = useState(0);

  return (
    <Text.Tertiary bold lightGray style={styles.appVersionTitle}> 
      "SETTINGS_SCREEN_APP_VERSION" 
    </Text.Tertiary>
);
};

export default SettingsScreen;