import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#131016',
      paddingHorizontal: 24,
    },
    headerEvent:{
      marginTop: 50,
    },
    eventName:{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
    },
    eventDate:{
      color: '#6B6B6B'
    },
    input:{
      flex: 1,
      backgroundColor: '#1F1E25',
      height: 56,
      width: '70%',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      marginTop: 15,
      marginRight: 12
    },
    buttonText:{
      color: '#FFF',
      fontSize: 24,
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 20,
      marginBottom: 22,
    },
    listEmptyText:{
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    }
  });