import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { Dropdown } from 'react-native-searchable-dropdown-kj';
import destinations from "../destinations.json"

function Form({cards, setCards, editedCard, isEditing, setIsEditing}) {
  const [inputWeight, setInputWeight] = useState("");
  const [inputDest, setInputDest] = useState();
  const [count, incrementCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards])

  useEffect(() =>{
    if(isEditing){
      setInputDest(editedCard.dest);
      setInputWeight(editedCard.weight);
    }
  }, [isEditing])

  const isReady = inputDest !== undefined && inputWeight !== "";

  const options = destinations.map(destination => {
    const row = {label: destination.title, value: destination.title};
    return row;
  });

  const handleChanges = () => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth()+1 < 10 ? "0"+ current.getMonth()+1 : current.getMonth()+1;
    const day = current.getDate() < 10 ? "0"+ current.getDate() : current.getDate();
    const hour = current.getHours() < 10 ? "0"+ current.getHours() : current.getHours();
    const minute = current.getMinutes() < 10 ? "0"+ current.getMinutes() : current.getMinutes();
    const date = `${year}. ${month}. ${day}. - ${hour}:${minute}`;
    if(!isEditing){
      setCards(cards => [...cards, {key: count, date: date, dest: inputDest, weight: inputWeight}]);
      incrementCount(count+1);
      setInputWeight("");
      setInputDest({});
    }
    else{
      const mid = [...cards];
      const orderToEdit = mid.find(
        card => card.key === editedCard.key
      );
      orderToEdit.date = date;
      orderToEdit.dest = inputDest; 
      orderToEdit.weight = inputWeight;
      setCards(mid);
      setIsEditing(false);
      setInputWeight("");
      setInputDest();
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Küldemény súlya</Text>
        <Text style={styles.placeholder}>gramm</Text>
        <TextInput style={styles.textInput}
            type="text" 
            value={inputWeight}
            onKeyPress={(event) => {
            if (!/[0-9 . BS]/.test(event.key)) {
                event.preventDefault();
            }
            }} 
            onChangeText={setInputWeight} 
        />
        <Text style={styles.titleText}>Csomagpont</Text>
        <Dropdown
          style={styles.textInput}
          containerStyle={styles.containerStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={options}
          placeholder=""
          search
          maxHeight={112}
          autoScroll={false}
          labelField="label"
          valueField="value"
          onChangeText={() => setInputDest("")}
          onFocus={() => setInputDest("")}
          value={inputDest}
          onChange={item => {
            setInputDest(item.value);
          }}
        >
        </Dropdown>
        <Pressable
            style={[styles.button, isReady ? {backgroundColor: '#17C873'} : {}]}
            disabled={!isReady}
            type="submit" 
            value="Mentés" 
            onPress={handleChanges} 
        >
          <Text style={styles.buttonText}>
            Mentés
          </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 272,
    marginLeft: 16,
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  titleText: {
    marginLeft: 16,
    marginTop: 24,
    width: 296,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 20,
    fontFamily: 'Open Sans',
    color: '#102544'
  },
  textInput: {
    width: 296,
    height: 40,
    marginTop: 8,
    marginLeft: 16,
    borderColor: '#C7DAE4',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 16,
    color: '#102544',
    fontWeight: 400,
    lineHeight: 19,
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Open Sans'
  },
  placeholder: {
    width: 56,
    height: 24,
    textAlign: "right",
    position: "absolute",
    marginLeft: 248,
    marginTop: 64,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16,
    fontFamily: 'Open Sans',
    color: '#85A0AE'
  },
  button: {
    width: 296,
    height: 40,
    backgroundColor: '#C7DAE4',
    borderRadius: 32,
    marginTop: 24,
    marginLeft: 16
  },
  buttonText: {
    width: 250.46,
    height: 24,
    marginLeft: 22.77,
    marginTop: 8,
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  inputSearchStyle: {
    marginTop: -30,
    marginBottom: 0,
    borderStyle: 'none',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    fontStyle: 'normal'
  },
  iconStyle: {
    marginRight: 17
  },
  selectedTextStyle: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    fontStyle: 'normal'
  }
});

export default Form;
