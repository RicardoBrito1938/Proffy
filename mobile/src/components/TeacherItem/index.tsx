import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/icons/heart.png';
import unFavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars0.githubusercontent.com/u/51454097?s=400&u=3cd1c77c69e49508ef28c3774bad056abd00af0b&v=4',
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ricardo Brito</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'  '} <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <Text style={styles.bio}>Melhorando a cada dia</Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
