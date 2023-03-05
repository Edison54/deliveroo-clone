import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'








const CategoryCard = ({ imgUrl, title }) => {

  return (

    <TouchableOpacity className="relative mr-2 ">

      <Image
        source={{
          uri: imgUrl
        }}
        className='h-20 w-20 bg-gray-300 p-5 rounded'

      />

      <Text className="absolute bottom-0 left-1 text-white font-bold">{title}</Text>

    </TouchableOpacity>

  );
};


export default CategoryCard;