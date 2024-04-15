import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/'
import { Home } from './pages/paginaReceita'
import { Novela } from './pages/paginaNovela'
import { Livro } from './pages/paginaAnime'
import { Musica } from './pages/paginaMusica'


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="fast-food" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="fast-food-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="novela"
                component={Novela}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="film" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="film-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="musica"
                component={Musica}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="headset" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="headset-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Anime"
                component={Livro}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="book" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="book-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}