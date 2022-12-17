import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { t } from "utils";
import { navigate } from "navigation";

import Text from "../Text";
import StickersImage from "../StickersImage";
import Button from "../Button";
import styles from "./NoEmission.styles";

export default function NoEmission() {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView style={styles.container}>
      {/*<StickersImage sticker="earth" />*/}
      <View style={styles.textView}>
        <Button.Primary
          fullWidth
          style={styles.button}
          onPress={() => navigator.openCategorySelection()}
          textType={"Primary"}
        >
          <Text.Primary bold white>
            {t("NO_EMISSION_COMPONENT_ADD_FIRST_EMISSION")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </ScrollView>
  );
}
