import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex:2,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    margin: 2,
  },
  buttonLogin: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  buttonCam: {
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    
  },
  buttonIcon: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    color: "#FFFFFF"
  },
  buttonLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    paddingRight: 10
  },
  camera: {
    flex: 9,
    width: '98%',
    
  },
  buttonContainer: {
    flex:8,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    textAlign:'right',
    justifyContent: 'flex-start',
    marginLeft:'78%',
    
  },
  buttonPanel: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    textAlign:'center',
    
  },
  imageContainer: {
    flex: 1,
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageHome: {
    flex:5,
    borderRadius: 5,
    
  },
  inputSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputLabel: {
    color: '#4B0F75 ',
    paddingBottom: 2,
    fontSize: 20
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#4B0F75',
    borderRadius: 2,
    borderWidth: 1,
    width:'100%',
    borderColor: '#4B0F75',
  },
});

export default styles;