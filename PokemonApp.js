import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Home } from './src/pages/Home';

export default function PokemonApp() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Home/>
          {/* <StatusBar style="auto" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
