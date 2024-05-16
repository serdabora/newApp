import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-web';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon} from 'react-native-heroicons/outline'
import axios from 'axios';
export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories();
    },[])

    const getCategories = async ()=>{
        try{
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            console.log('got categories: ', response.data);
            if(response && response.data){

            }
        }catch(err){
            console.log('error: ',err.message);
        }
    }
    return(
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <ScrollView
            ShowsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
            className="space-y-6 pt-14"
            >


                {/* avatar and bell icon */}
                <View className="mx-4 flex-row justify-between items-center mb-2">
                    <Image source = {require('../../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}} />
                    <BellIcon size={hp(4)} color="gray" />
                    
                    </View>

                    {/* greetings and punchline */}
                    <View clasname="mx-4 space-y-2 mb-2">
                        <Text style = {{fontSize: hp(1.7)}} className="text-neutral-600">Hello, Adam!</Text>
                        <View>
                            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">Make your own food,</Text>
                        </View>
                        <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">stay at </Text>
                        <Text className="text-amber-400">home</Text>
                    </View>
             {/* search Bar */}
             <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
                <TextInput
                  placeholder='Search any recipe'
                  placeholderTextColor={'gray'}
                  style={{fontSize: hp(1.7)}}
                  className="flex-1 text-base mb-1 pl-3 tracking-wider"
                  />
                  <View className="bg-white rounded-full p-3">
                    <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />

                  </View>
                </View>
                {/* Categories */}
                <View>
                    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>
                
                </ScrollView>
            
            
        
            
           
        </View>
    )
}