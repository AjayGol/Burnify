import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={require('@/assets/images/icon-home.png')} focus={focused} />
          ),
        }}
      />
        <Tabs.Screen
            name="buying"
            options={{
                title: 'Buying',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={require('@/assets/images/icon-buying.png')} focus={focused} />
                ),
            }}
        />
        <Tabs.Screen
            name="selling"
            options={{
                title: 'Selling',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={require('@/assets/images/icon-selling.png')} focus={focused} />
                ),
            }}
        />
        <Tabs.Screen
            name="message"
            options={{
                title: 'Message',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={require('@/assets/images/icon-message.png')} focus={focused} />
                ),
            }}
        />
    </Tabs>
  );
}
