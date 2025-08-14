// 颗粒物组分（示例：无机离子、元素碳、有机碳、金属等）
export type PmComponent = {
  name: string
  value: number
}

export const pm25Components: PmComponent[] = [
  { name: '硫酸盐(SO4²-)', value: 15 },
  { name: '硝酸盐(NO3-)', value: 18 },
  { name: '铵盐(NH4+)', value: 12 },
  { name: '有机碳(OC)', value: 28 },
  { name: '元素碳(EC)', value: 10 },
  { name: '其他金属及尘土', value: 17 }
]

export const pm10Components: PmComponent[] = [
  { name: '粗粒尘土', value: 40 },
  { name: '海盐及矿物', value: 12 },
  { name: '硫酸盐(SO4²-)', value: 10 },
  { name: '硝酸盐(NO3-)', value: 11 },
  { name: '铵盐(NH4+)', value: 7 },
  { name: '其他', value: 20 }
]


