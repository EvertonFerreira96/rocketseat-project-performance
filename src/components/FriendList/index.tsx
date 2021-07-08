import React from 'react';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Friend } from '../Friend';

interface Props {
    data: {
        id: number;
        name: string;
        likes: number;
    }[],
    
    follow: () => void;
}

export const FriendList: React.FC<Props> = ({ data, follow }) => {

    const likes = useMemo(() => 
        data.reduce(
            (accumulator, item) => {
                return accumulator + item.likes; 
            }, 0)
        , [data]); 

    return (
        <View >
            <Text>Total de Likes: { likes } </Text>
            <Text>
                <View style={{ flexDirection: 'column' }}>
                {
                    data.map(f => (

                        <Friend 
                         key={f.id}
                         data={f} 
                         follow={follow}
                         />
                        ))
                    }
                    </View>
            </Text>
        </View>
    )
}
