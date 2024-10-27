// export default products;

// sir,s code
import { SafeAreaView } from "react-native-safe-area-context";
// import { FlatList } from "react-native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaViewBase,
  Linking,
  ScrollViewComponent,
  FlatListComponent,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { ScrollView } from "react-native-gesture-handler";
// for typescript
interface Item {
  firstName: string;
  lastName: string;
  id: number;
  image: string;
  gender: string;
  phone: number;
  age: number;
}

const products = () => {
  const [users, setUsers] = useState<null | []>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json.users); //extract the users
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
      }}
    >
      <Text style={{ fontSize: 33 }}>All Users</Text>
      <View style={{ width: "100%" ,marginHorizontal: `auto`}}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userList}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: item.image }}
                placeholder={{ blurhash }}
                contentFit="fill"
                transition={1000}
              />

              <Text style={{ fontSize: 22 }}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={{ fontSize: 18 }}>Age: {item.age}</Text>
              <Text style={{ fontSize: 18 }}>gender: {item.gender}</Text>
              <Text style={{ fontSize: 18 }}>phone: {item.phone}</Text>
              <TouchableOpacity style={styles.btn}>
                {/* update the href construction */}
                <Link href={`../singleUser/${item.id}`}>See More</Link>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userList: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#d1d1d1",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "flex-start",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 15,
    flex: 1,
     alignItems: `center`,
    justifyContent: `center`,
    marginHorizontal: `auto`,
  },

  btn: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 30,
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    paddingHorizontal: 35,
    alignItems: "center",
    width: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },

  loadingContainer: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
export default products;
