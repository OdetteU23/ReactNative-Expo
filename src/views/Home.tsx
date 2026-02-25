import type {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
import {FlatList, Text} from 'react-native';
import MediaListItem from '../components/MediaListItem';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<
    MediaItemWithOwner | undefined
  >(undefined);

  const {mediaArray} = useMedia();

  return (
    <>
      <Text>Home view</Text>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => <MediaListItem item={item} />}
      />
    </>
  );
};

export default Home;
