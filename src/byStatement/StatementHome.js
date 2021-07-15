// pie-chart doc
// https://github.com/react-native-art/art

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Surface, Shape, Path} from '@react-native-community/art';


function StatementHome() {
    
    let [data, setData] = useState([
        {
            travelNum : 0,
            category1 : 3,
            category2 : 2,
            category3 : 1,
            category4 : 4,
            category5 : 5,
        },
        {
            travelNum : 1,
            category1 : 4,
            category2 : 3,
            category3 : 5,
            category4 : 1,
            category5 : 2,
        },
        {
            travelNum : 2,
            category1 : 1,
            category2 : 2,
            category3 : 1,
            category4 : 4,
            category5 : 3,
        },
        {
            travelNum : 3,
            category1 : 3,
            category2 : 3,
            category3 : 4,
            category4 : 7,
            category5 : 2,
        },
        {
            travelNum : 4,
            category1 : 1,
            category2 : 4,
            category3 : 2,
            category4 : 3,
            category5 : 2,
        },
    ])

    return (
        <View style={styles.container}>
            {
                data.map((i, index) => {
                    let categoryAll = i.category1 + i.category2 + i.category3 + i.category4 + i.category5;
                    let category1 = Math.round((i.category1/categoryAll)*100);
                    let category2 = Math.round((i.category2/categoryAll)*100);
                    let category3 = Math.round((i.category3/categoryAll)*100);
                    let category4 = Math.round((i.category4/categoryAll)*100);
                    let category5 = Math.round((i.category5/categoryAll)*100);
                    return (
                        <View style={styles.card} key={index}>
                        <Text> TraveNum : {i.travelNum} </Text>
                            <Text></Text>
                        <Text>{categoryAll} -- </Text>
                        <View style={styles.graphes}>
                            <Text style={{width:'20%', color:'red'}}>{category1}%</Text>
                            <Text style={{width:'20%', color:'orange'}}>{category2}%</Text>
                            <Text style={{width:'20%', color:'green'}}>{category3}%</Text>
                            <Text style={{width:'20%', color:'blue'}}>{category4}%</Text>
                            <Text style={{width:'20%', color:'purple'}}>{category5}%</Text>
                        </View>
                        <Text>{category1 + category2 + category3 + category4 + category5} -- </Text>
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 13,
        marginRight: 13
    },
    card: {
        width: '42%',
        margin: '4%',
        padding: 15,
        backgroundColor: 'pink'
    },
    graphes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    graph: {
        width: '15%'
    }
})

export default StatementHome;


