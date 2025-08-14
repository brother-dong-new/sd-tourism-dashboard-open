<!-- 顶部标题 -->
<template>
  <header class="header">鹤壁市空气质量监控平台</header>
  <!-- 文字轮播 -->
  <div class="text-carousel">
    <transition-group name="carousel" tag="div" class="carousel-container">
      <div class="text-carousel-item" :key="currentIndex" v-show="currentIndex === getCurrentItemIndex()">
        {{ getCurrentItem() }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 轮播数据
const carouselData = ref([
  '今日鹤壁市整体 AQI 良，建议适度开窗通风',
  'PM2.5 较昨日略有上升，请敏感人群减少户外活动',
  '山城区监测站 O3 午后走高，避开14:00-16:00高值时段',
  '淇滨区 PM10 偶有抬升，道路扬尘治理持续进行',
  'CO、SO2 维持低位运行，工业源监管到位',
  '未来6小时北风为主，扩散条件一般'
])

// 状态管理
const currentIndex = ref(0)
const timer = ref<number | null>(null)
const isAnimating = ref(false)
const isPaused = ref(false)

// 配置参数
const CONFIG = {
  INTERVAL: 5000, // 轮播间隔时间（毫秒）
  ANIMATION_DURATION: 500, // 动画持续时间（毫秒）
  DEBOUNCE_DELAY: 100 // 防抖延迟时间（毫秒）
}

// 获取当前显示的项目
const getCurrentItem = (): string => {
  if (carouselData.value.length === 0) return ''
  return carouselData.value[currentIndex.value]
}

// 获取当前项目索引（用于动画）
const getCurrentItemIndex = (): number => {
  return currentIndex.value
}

// 切换到下一项
const nextItem = (): void => {
  if (isAnimating.value || isPaused.value) return

  try {
    isAnimating.value = true

    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % carouselData.value.length
      isAnimating.value = false
    }, CONFIG.ANIMATION_DURATION)
  } catch (error) {
    console.error('轮播切换出错:', error)
    isAnimating.value = false
  }
}

// 启动轮播
const startCarousel = (): void => {
  if (timer.value) clearInterval(timer.value)
  timer.value = window.setInterval(() => {
    nextItem()
  }, CONFIG.INTERVAL)
}

onMounted(() => {
  // 启动轮播
  startCarousel()
})

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  margin: 0 12px;
  top: 12px;
  width: calc(100% - 24px);
  height: 87px;
  background: url('@/assets/images/顶部标题.png') no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 12px;
  color: rgba(230, 239, 253);
}

.text-carousel {
  position: absolute;
  top: 120px;
  left: 50%;
  width: 744px;
  height: 43px;
  transform: translateX(-50%);
  background: linear-gradient(90deg, rgba(218, 163, 88, 0), rgba(218, 163, 88, 0.6), rgba(218, 163, 88, 0));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: all;
  &:hover {
    background: linear-gradient(90deg, rgba(218, 163, 88, 0.1), rgba(218, 163, 88, 0.7), rgba(218, 163, 88, 0.1));
  }
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-carousel-item {
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(0);
  opacity: 1;
}

// 轮播动画样式
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s ease-in-out;
}

.carousel-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.carousel-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.carousel-enter-to,
.carousel-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
