import { useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";

const useBackButton = (navigation) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/back.png")}
            style={{ width: 24, height: 24, marginLeft: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

export default useBackButton;
