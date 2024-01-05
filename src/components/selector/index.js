/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, Modal, ScrollView} from 'react-native';

/**
 *
 * @param {boolean} visible - boolean
 * @param {Array} data - array of object
 * @param {Function} onSelected - function
 * @param {String} backColor - Color in hex
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
            }}>
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
          alignContent: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: 20,
          backgroundColor:
            props.backColor === undefined ? '#000000dd' : props.backColor,
        }}>
        <ScrollView
          contentContainerStyle={{
            borderWidth: 0,
            borderColor: 'red',
            flex: 1,
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
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
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
