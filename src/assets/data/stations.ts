export type Station = {
  id: string
  name: string
  district: string
  coord: [number, number]
}

export const stations: Station[] = [
  { id: 'HB-001', name: '淇滨区监测站', district: '淇滨区', coord: [114.2265, 35.7871] },
  { id: 'HB-002', name: '山城区监测站', district: '山城区', coord: [114.2235, 35.9148] },
  { id: 'HB-003', name: '鹤山区监测站', district: '鹤山区', coord: [114.1271, 35.9665] },
  { id: 'HB-004', name: '浚县城关站', district: '浚县', coord: [114.4824, 35.6715] },
  { id: 'HB-005', name: '淇县朝歌站', district: '淇县', coord: [114.1618, 35.6613] },
  { id: 'HB-006', name: '城市东部站', district: '示例', coord: [114.30, 35.90] }
]


