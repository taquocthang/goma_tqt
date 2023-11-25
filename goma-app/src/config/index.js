import * as React from 'react';
import { Dimensions } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { COLORS } from './colors';
import { IMAGES } from './images';
import { STATUS } from './constant';
import { FONTS } from './fonts';

class Config {
    constructor() {
        this.colors = COLORS;
        this.images = IMAGES;
        this.status = STATUS;
        this.fonts = FONTS;
        this.width = Dimensions.get('window').width;
    }

    flashShowMessage = (props) => {
        let theme = {};
        switch (props.type) {
          case 'danger':
            theme = {color: 'white', backgroundColor: '#CC0000'};
            break;
          case 'success':
            theme = {color: 'white', backgroundColor: '#007E33'};;
            break;
          case 'info':
            theme = {color: 'white', backgroundColor: '#0099CC'};
            break;
          case 'warning':
            theme = {color: 'white', backgroundColor: '#FF8800'};
            break;
          case 'default':
            theme = {color: 'white', backgroundColor: '#FFF'};
            break;
          default:
            break;
        }
        showMessage({...props, ...theme});
    };
}
export default new Config();