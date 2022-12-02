import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

function Kartya({cards, setCards, date, dest, weight, cardKey, setEditedCards, setIsEditing}) {

  const kuka = require('../assets/kuka.png');
  const toll = require('../assets/toll.png');
  
  const deleteCard = () => {
    let mid = cards;
    mid = mid.filter(card => card.key !== cardKey);
    setCards(mid);
  }

  const editCard = () => {
    cards.map(card => {
      if(card.key === cardKey){
        setEditedCards(card);
      }
      return card;
    })
    setIsEditing(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={[styles.header , {width: 56}]}>Dátum</Text>
        <Text style={styles.body}>{date}</Text>
      </View>
      <View style={styles.dest}>
        <Text style={styles.header}>Csomagpont neve</Text>
        <Text style={[styles.body , {width: 128}]}>{dest}</Text>
      </View>
      <View>
      <TouchableWithoutFeedback onPress={editCard}>
          <Image style={{width: 18, height: 18, marginLeft: 27, marginTop: 27}} source={toll}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={deleteCard}>
          <Image style={{width: 17, height: 22, marginLeft: 27, marginTop: 47.52}} source={kuka}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 328,
    minHeight: 132,
    marginTop: 16,
    marginLeft: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row"
  },
  date: {
    width: 88,
    marginLeft: 16,
  },
  dest: {
    width: 144,
    marginLeft: 16,
  },
  header: {
    marginTop: 24,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 20,
  },
  body: {
    marginTop: 4,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 24,
    color: '#5C717C'
  }
})

export default Kartya;
