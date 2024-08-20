import { Text, View } from "react-native";
import { styles } from "./styles";
import CardView from "../../components/CardView";


export function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}/>
        <View style={[styles.triangleCorner, styles.triangleCornerTopRight]}/>
        <View style={[styles.triangleCorner, styles.triangleCornerBottomRight]}/>
        <View style={[styles.triangleCorner, styles.triangleCornerBottomLeft]}/>
        <CardView/>
      </View>
    </View>
  );
}