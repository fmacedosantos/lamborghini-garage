import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1E1E20',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraBox: {
    position: 'relative',
    width: '90%', // 350
    height: '90%',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10
  },
  triangleCorner: {
    position: 'absolute', // inicia na esquerda
    borderTopWidth: 20,
    borderTopColor: '#fff',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  triangleCornerTopRight: {
    top: 0,
    right: 0,
    transform: [{rotate: '90deg'}]
  },
  triangleCornerBottomRight: {
    bottom: 0,
    right: 0,
    transform: [{rotate: '180deg'}]
  },
  triangleCornerBottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{rotate: '270deg'}]
  }
});