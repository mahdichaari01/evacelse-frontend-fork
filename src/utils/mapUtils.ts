export function serilizeMap<K, V>(map: Map<K, V>) {
	return JSON.stringify(Array.from(map.entries()));
}
export function deserializeMap<K, V>(str: string) {
	return new Map<K, V>(JSON.parse(str));
}
