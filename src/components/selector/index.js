/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, Modal, ScrollView} from 'react-native';

/**
 *
 * @param {boolean} visible - boolean
 * @param {Array} data - array of object
 * @param {Function} onSelected - function
 * @param {String} backColor - Color in hex
 * @param {Object} textStyle - Stylesheet object
 * @param {String} title - Title to display on selector
 * @param {Object} titleStyle - Stylesheet object
 * @returns
 */
const UISelector = props => {
  // props.data = [{id: 1, value: 'test'}, {id: 2, value: 'test2'}];

  const renderview = () => {
    return props.data.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#22222233',
          }}>
          <Text
            onPress={() => {
              //   setSelected(index);
              props.onSelected(index, item);
            }}
            style={
              props.textStyle === undefined
                ? {color: '#22222299', fontFamily: 'sans-serif', fontSize: 14}
                : props.textStyle
            }>
            {item.value}
          </Text>
        </View>
      );
    });
  };
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor:
            props.backColor === undefined ? '#000000dd' : props.backColor,
        }}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            borderWidth: 0,
            borderColor: 'red',
            padding: 20,
            marginVertical: 20,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: 20,
              borderRadius: 4,
            }}>
            <View>
              <Text
                style={[
                  props.titleStyle === undefined
                    ? {
                        paddingHorizontal: 20,
                        paddingTop: 10,
                        fontSize: 16,
                        fontWeight: 'bold',
                      }
                    : props.titleStyle,
                ]}>
                {props.title}
              </Text>
            </View>
            <View style={{margin: 20}}>{renderview()}</View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default UISelector;
