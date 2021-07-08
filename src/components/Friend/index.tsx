import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
    data: { 
        id: number;
        name: string; 
        likes: number; 
    },
    follow: () => void;
}

const FriendComponent: React.FC<Props> = ( { data, follow } ) => {
  return (
      <View style={{flexDirection: 'column'}}>
          <Text>{data.name} - Likes: { data.likes }</Text>
          <TouchableOpacity style={{marginBottom:15}} onPress={follow}>
              <Text>Deixar de Seguir</Text>
          </TouchableOpacity>
      </View>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
    return  JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)
}); 