import {MediaItemWithOwner} from 'hybrid-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useVideoPlayer, VideoView} from 'expo-video';



const Single = ({route}: any) => {
  const item: MediaItemWithOwner = route.params.item;

  const videoPlayer = useVideoPlayer(item.filename, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      {item.media_type.split('/')[0] === 'video' ? (
        <VideoView style={styles.video} player={videoPlayer} />
      ) : (
        <Image style={styles.image} source={{uri: item.filename}} />
      )}
      <Text>{item.description}</Text>
      <Text>
        Created at: {new Date(item.created_at).toLocaleString('fi-FI')}
      </Text>
      <Text>Filesize: {(item.filesize / 1024 / 1024).toFixed(2)} MB</Text>
      <Text>Mime-type: {item.media_type}</Text>
      <Text>Owner: {item.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 5, marginBottom: 5, backgroundColor: '#f5c668'},
  title: {fontSize: 20},
  image: {height: 300},
  video: {height: 300},
});

export default Single;
