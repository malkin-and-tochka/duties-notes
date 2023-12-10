import CircleButton from "./reused/CircleButton";
import {Image, StyleSheet, View} from "react-native";
import BlurBG from "./reused/BlurBG";


const BottomPanel = () => {
    return (
        <BlurBG style={styles.bottomPanelWrapper} children={
            <View style={styles.row}>
                <CircleButton styles={styles.plusButton}
                              children={
                                  <Image
                                      style={{width: 25, height: 25}}
                                      source={require('../../assets/Plus.png')}
                                  />}
                />
                <BlurBG style={{padding: 30}}
                        children={<Image style={{width: 25, height: 25}}
                                         source={require('../../assets/microphone.png')}/>}/>
            </View>
        }
        />
    )
}

const styles = StyleSheet.create({
    plusButton: {
        backgroundColor: '#000'
    },
    row: {
        flexDirection: 'row',
        gap: 5
    },
    bottomPanelWrapper: {
        position: "absolute",
        bottom: 30,
        alignSelf: 'center'
    }
})

export default BottomPanel
