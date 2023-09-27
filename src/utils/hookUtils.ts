import { useState } from 'react';
import { cloneDeep } from 'lodash';

export type ListManipulator<T> = (value: T) => void;

export function useList<T> (initialList: T[]): [T[], ListManipulator<T>, ListManipulator<T>] {
    const [list, setList] = useState<T[]>(initialList);

    const addToList = (newValue: T): void => {
        if (!list.includes(newValue)) {
            setList([
                ...list,
                newValue
            ]);
        }
    };

    const removeFromList = (valueToRemove: T): void => {
        setList([
            ...list.filter(value => value !== valueToRemove)
        ]);
    };

    return [list, addToList, removeFromList];
}

export type MapSetter<KeyType, ValueType> = (key: KeyType, value: ValueType) => void;

export type MapRemover<KeyType> = (key: KeyType) => void;

export function useMap<KeyType, ValueType>(initialMap: Map<KeyType, ValueType> = new Map<KeyType, ValueType>()):
	[Map<KeyType, ValueType>, MapSetter<KeyType, ValueType>, MapRemover<KeyType>] {
	const [map, setMap] = useState<Map<KeyType, ValueType>>(initialMap);

	const addToMap = (key: KeyType, value: ValueType): void => {
		if (!map.has(key)) {
			const newMap = cloneDeep(map);
			newMap.set(key, value);
			setMap(newMap);
		}
	};

	const removeFromMap = (key: KeyType): void => {
		const newMap = cloneDeep(map);
		newMap.delete(key);
		setMap(newMap);
	};

	return [map, addToMap, removeFromMap];
}
