export type AirMetricKey = 'AQI' | 'PM2_5' | 'PM10' | 'SO2' | 'NO2' | 'CO' | 'O3'

export type StationRealtime = {
  id: string
  name: string
  district: string
  time: string
  metrics: Record<AirMetricKey, number>
}

const now = () => new Date().toISOString()

export const realtimeAir: StationRealtime[] = [
  {
    id: 'HB-001',
    name: '淇滨区监测站',
    district: '淇滨区',
    time: now(),
    metrics: { AQI: 78, PM2_5: 45, PM10: 88, SO2: 12, NO2: 25, CO: 0.9, O3: 76 }
  },
  {
    id: 'HB-002',
    name: '山城区监测站',
    district: '山城区',
    time: now(),
    metrics: { AQI: 92, PM2_5: 58, PM10: 102, SO2: 18, NO2: 33, CO: 1.1, O3: 68 }
  },
  {
    id: 'HB-003',
    name: '鹤山区监测站',
    district: '鹤山区',
    time: now(),
    metrics: { AQI: 65, PM2_5: 35, PM10: 70, SO2: 10, NO2: 20, CO: 0.8, O3: 90 }
  },
  {
    id: 'HB-004',
    name: '浚县城关站',
    district: '浚县',
    time: now(),
    metrics: { AQI: 105, PM2_5: 72, PM10: 130, SO2: 22, NO2: 41, CO: 1.3, O3: 60 }
  },
  {
    id: 'HB-005',
    name: '淇县朝歌站',
    district: '淇县',
    time: now(),
    metrics: { AQI: 83, PM2_5: 50, PM10: 95, SO2: 15, NO2: 28, CO: 1.0, O3: 72 }
  }
]

export const metricLabels: Record<AirMetricKey, string> = {
  AQI: 'AQI',
  PM2_5: 'PM2.5',
  PM10: 'PM10',
  SO2: 'SO2',
  NO2: 'NO2',
  CO: 'CO',
  O3: 'O3'
}


