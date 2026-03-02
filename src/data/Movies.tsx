import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { MovieModel } from '../model/MoviesModel';

//Array of MovieModel to store data
const movies: MovieModel[] = [
  {
    imgURL: 'https://bancodeseries.com.br/images/posters/7553.jpg',
    movieTitle: 'Peaky Blinders (2013)',
    movieDescription:
      'Vowing to avenge the murder of his parents, Bruce Wayne devotes his life to wiping out crime in Gotham City.',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/2MHUit4H6OK5adcOjnCN6suCKOl.jpg',
    movieTitle: 'Rocky IV (1985)',
    movieDescription:
      'Rocky Balboa holds the world heavyweight championship, but a new challenger has stepped forward: Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union. ',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    movieTitle: 'Money Heist (2017)',
    movieDescription:
      'To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. ',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg',
    movieTitle: 'Berlin (2023)',
    movieDescription:
      'During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever: stealing 44 million euros worth of jewels in one night.',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/8yBQYa6AdvMY5H9CiAv0HkvF3UE.jpg',
    movieTitle: 'Ghosts (2021)',
    movieDescription:
      'Samantha and Jay throw caution to the wind when they convert their recently inherited country estate into a bed-and-breakfast. Call it mislaid plans. Not only is the place falling apart.',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/31GlRQMiDunO8cl3NxTz34U64rf.jpg',
    movieTitle: 'Reacher (2022)',
    movieDescription:
      'Jack Reacher, a veteran military police investigator, has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he travels the country and explores the nation he once served.',
  },
  {
    imgURL:
      'https://image.tmdb.org/t/p/w600_and_h900_face/rTmal9fDbwh5F0waol2hq35U4ah.jpg',
    movieTitle: 'Narcos (2015)',
    movieDescription:
      'A gritty chronicle of the war against Colombias infamously violent and powerful drug cartels.',
  },
];

const Movies = () => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={movies}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.imgURL }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {item.movieTitle}
            </Text>

            <Text style={styles.description}>{item.movieDescription}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Movies;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F4',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'flex-start',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,

    // Android shadow
    elevation: 6,
  },

  image: {
    width: 110,
    height: 150,
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },
});
