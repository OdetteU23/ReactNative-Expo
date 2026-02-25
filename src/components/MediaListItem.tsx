import {MediaItemWithOwner} from 'hybrid-types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('touched ' + item.title);
      }}
    >
      <Text>MediaListItem {item.title}</Text>
      <Image style={styles.image} source={{uri: item.thumbnail}} />
      <Text>{item.description}</Text>
      {/* TODO = HOMEWORK: add all other media data and style your list & listitems */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 20},
  image: {height: 300},
});

export default MediaListItem;
