import React from 'react';
import { View, Text, Image } from 'react-native';
import { SPACING } from '../../../constants';
import { FourUserItem } from '../../../declarations/types.td';
import CommonStyles from '../../../theme/CommonStyles';
import styles from './UserCard.styles';

function UserCard({ item }: { item: FourUserItem }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SPACING * 2,
        }}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={CommonStyles.flexOne}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.job}>{item.job}</Text>
        </View>
      </View>
      <View style={styles.detailsList}>
        {item.details.map(({ label, value }) => (
          <View key={label} style={styles.detailsItem}>
            <Text style={styles.detailValue}>{value}</Text>
            <Text style={styles.detailLabel}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default UserCard;
