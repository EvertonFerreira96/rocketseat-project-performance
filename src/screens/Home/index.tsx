import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

import { FriendList } from '../../components/FriendList';

interface FriendsProps { id: number; name: string; likes: number; }

export const Home: React.FC = () => {

  const [name, setName] = useState('');
  const [friends, setFriends] = useState<FriendsProps[]>([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.102:3333/friends?q=${name}`)
    const data = await response.json();
    setFriends(data);
  }

  const handleFollow = () => {
    console.log(123)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Friends </Text>

      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
      />

      <Button
        title="Search"
        onPress={handleSearch}
      />

    <ScrollView style={styles.list}>
      <FriendList data={friends} follow={handleFollow} />
    </ScrollView>
 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 24
  },
  title:{
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
    marginVertical: 10,
  },
  list: {
    marginTop: 20
  }

});