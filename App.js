import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Megrendelesek from './components/megrendelesek';
import Form from './components/form';

export default function App() {
  const [cards, setCards] = useState([]);
  const [editedCard, setEditedCards] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Megrendelő űrlap</Text>
        <Form 
          cards={cards} 
          setCards={setCards} 
          editedCard={editedCard} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing} 
        />
        <Text style={styles.titleText}>Megrendelések</Text>
        <Megrendelesek 
          cards={cards} 
          setCards={setCards} 
          setEditedCards={setEditedCards} 
          setIsEditing={setIsEditing}
        />
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    height: 640,
    margin: 0,
    backgroundColor: '#D1E3E9' 
  },
  titleText: {
    marginLeft: 24,
    marginTop: 24,
    width: 312,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 27,
    color: '#102544;'
  },
});
