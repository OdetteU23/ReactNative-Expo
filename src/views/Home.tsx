import {useMedia} from '../hooks/apiHooks';
import {FlatList} from 'react-native';
import MediaListItem from '../components/MediaListItem';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const {mediaArray} = useMedia();

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => (
        <MediaListItem item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.media_id.toString()}
    />
  );
};

export default Home;
