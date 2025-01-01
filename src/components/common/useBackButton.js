import { useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";

const useBackButton = (navigation) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('FallbackScreen')}>
          <Image
            source={require("../../assets/icons/back.png")}
            style={{ width: 24, height: 24, marginLeft: 10, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

export default useBackButton;
