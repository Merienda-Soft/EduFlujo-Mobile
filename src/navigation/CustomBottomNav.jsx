import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomBottomNav = ({ state, descriptors, navigation, icons }) => {
    return (
        <View style={styles.container}>
            {state.routes.slice(0, 3).map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const iconSource = isFocused
                    ? icons[route.name].focused
                    : icons[route.name].default;

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isFocused ? styles.tabfocus : styles.tab}>
                        <Image source={iconSource} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontWeight: 'bold' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomBottomNav;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#d9a796',
        width: '100%',
        padding: 10,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9A796',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    tabfocus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d97f11',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    },
});
