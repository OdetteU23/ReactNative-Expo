import {MediaItemWithOwner} from 'hybrid-types';
import {NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MediaListItem = ({
  item, navigation,

}: {item: MediaItemWithOwner,
  navigation: NavigationProp<ParamListBase>}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('touched ' + item.title);
        //navigation.navigate('Media File', {item});
        navigation.navigate('Single');
      }}

    >
      <Text style= {styles.title}> {item.title}</Text>
      <Image style={styles.image} source= {{uri: item.thumbnail}}></Image>
      <Text>{item.description}</Text>
      <Text>MediaListItem {item.title}</Text>
      {/*<Image style={styles.image} source={{uri: item.thumbnail}} />}*/}
      <Text>Owner:{item.username}</Text>
      <Text>Filesize: {(item.filesize /1024 /1024).toFixed(2)} MB</Text>
      <Text>Mime-type: {item.media_type}</Text>
      <Text>Created at: {new Date(item.created_at).toLocaleDateString('fi-FI')}</Text>

      {/* TODO = HOMEWORK: add all other media data and style your list & listitems */}
        {/* TODO = HOMEWORK: add navigation to single view */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 5, marginBottom:5, backgroundColor: '#f5c668', padding: 10},
  title: {fontSize: 20, fontWeight: 'bold'},
  image: {height: 300},
});

export default MediaListItem;
