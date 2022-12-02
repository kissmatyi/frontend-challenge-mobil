import React from "react";
import { View, StyleSheet } from "react-native";
import Kartya from "./kartya";

function Megrendelesek({cards, setCards, setEditedCards, setIsEditing}){
  return (
    <View style={styles.container}>
      {cards.map(e => {
        return <Kartya 
          cardKey={e.key} 
          date={e.date} 
          dest={e.dest}
          weight={e.weight}
          cards={cards} 
          setCards={setCards} 
          setEditedCards={setEditedCards} 
          setIsEditing={setIsEditing}
        />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1E3E9'
  }
})

export default Megrendelesek;
