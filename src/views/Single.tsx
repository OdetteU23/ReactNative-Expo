import { MediaItemWithOwner } from "hybrid-types";
import { Text, View } from "react-native";

const Single = ({route}: any) => {
  const item: MediaItemWithOwner = route.params.item

  return (
    <>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </>
  );
}
export default Single;
