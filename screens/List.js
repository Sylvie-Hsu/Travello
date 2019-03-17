import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("screen");
const mocks = [
  {
    id: 1,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description: "desskdnckan",

    // "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: false,
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description: "Santorini - Description",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24,
    justifyContent: "space-between",
    alignItems: "center"
  },
  articles: {
    paddingHorizontal: 36
  },
  destination: {
    width: width - 36 * 2,
    //height: width - 36 * 2,
    marginLeft: 0,
    marginHorizontal: 12,
    paddingHorizontal: 36,
    paddingVertical: 24,
    borderRadius: 12,
    justifyContent: "space-between"
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 24,
    bottom: 24,
    right: 36,
    left: 36,
    backgroundColor: "white"
  },
  recommended: {
    paddingTop: 36
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  rating: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  dots: {
    width: 12,
    height: 12,
    backgroundColor: "#DCE0E9",
    borderRadius: 6,
    borderWidth: 2,
    marginHorizontal: 12,
    borderColor: "transparent"
  },
  activeDot: {
    borderColor: "#007BFA"
  }
});

class Articles extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.row, styles.header]}>
        <View>
          <Text>Search for place</Text>
          <Text style={{ fontSize: 24 }}>Destination</Text>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          />
        </View>
      </View>
    )
  };

  renderDots() {
    const { destinations } = this.props;
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          { justifyContent: "center", marginTop: 12 * 2 }
        ]}
      >
        {destinations.map(item => {
          return (
            <View
              key={`step-${item.id}`}
              style={[styles.dots, item.id === 0 ? styles.activeDot : null]}
            />
          );
        })}
      </View>
    );
  }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {/* {this.renderDots()} */}
      </View>
    );
  };

  renderDestination = item => {
    return (
      <ImageBackground
        style={[styles.flex, styles.destination, styles.shadow]}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: item.preview }}
      >
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={{ flex: 0 }}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </View>
          <View style={[styles.column, { flex: 2, paddingHorizontal: 18 }]}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item.user.name}
            </Text>
            <Text style={{ color: "white" }}>{item.location}</Text>
          </View>
          <View
            style={{
              flex: 0,
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingBottom: 8 }}>
            {item.title}
          </Text>
          <Text style={{ color: "grey" }}>{item.description}</Text>
        </View>
      </ImageBackground>
    );
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <Text>Recommended</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    );
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;
