import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import UISelector from '../selector';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 8,
  },
});

/**
 *
 * @param {Array} data - array of object, should contain "id" and "value" keys
 * @param {Function} onSelected - function(index, data)
 * @param {String} defaultText - Text to display initially
 * @param {Object} style - Stylesheet object
 * @param {String} backColor - Color in hex
 * @param {String} title - Title to display on selector
 * @param {Object} textStyle - Stylesheet object
 * @returns
 */
const ComboBox = props => {
  const [visible, setVisible] = React.useState(false);
  const [selectedText, setSelectedText] = React.useState(
    props.defaultText === undefined ? 'Select your option' : props.defaultText,
  );

  const hSelect = (index, item) => {
    setVisible(false);
    setSelectedText(item.value);
    props.onSelected(index, item);
  };
  const renderView = (
    <View>
      <View style={[props.style === undefined ? style.container : props.style]}>
        <Pressable onPress={() => setVisible(true)}>
          <Text>{selectedText}</Text>
        </Pressable>
      </View>
      <UISelector
        data={props.data}
        onSelected={hSelect}
        visible={visible}
        backColor={props.backColor}
        title={props.title === undefined ? 'Select your option' : props.title}
        textStyle={props.textStyle || undefined}
      />
    </View>
  );
  return renderView;
};

export default ComboBox;
