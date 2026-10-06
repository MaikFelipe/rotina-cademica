import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="discipline"
        options={{
          title: 'Disciplinas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Atividades',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="clipboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="account" color={color} />,
        }}
      />
    </Tabs>
  );
}
