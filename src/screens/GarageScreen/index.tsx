import { Text, View } from "react-native";
import { styles } from "./styles";


export function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}/>
      </View>
    </View>
  );
}