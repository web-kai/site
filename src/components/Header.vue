<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <div class="logo-icon">CA</div>
        <div class="logo-text">
          <span class="logo-cn">卡莱博尔</span>
          <span class="logo-en">CALABAR</span>
        </div>
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="active"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于我们' },
  { path: '/products', label: '产品中心' },
  { path: '/solutions', label: '解决方案' },
  { path: '/news', label: '新闻资讯' },
  { path: '/contact', label: '联系我们' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.header.scrolled {
  padding: 12px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-cn {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
}

.logo-en {
  font-size: 11px;
  color: #0056b3;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 10px 18px;
  font-size: 15px;
  color: #444;
  position: relative;
  transition: color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #0056b3, #00a3e0);
  transition: width 0.3s;
}

.nav-link:hover,
.nav-link.active {
  color: #0056b3;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 60%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: #1a1a2e;
  border-radius: 2px;
  transition: all 0.3s;
}

@media (max-width: 992px) {
  .menu-toggle { display: flex; }

  .nav {
    position: fixed;
    top: 64px;
    right: 0;
    width: 260px;
    height: calc(100vh - 64px);
    background: #fff;
    flex-direction: column;
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  }

  .nav.open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 14px 20px;
    border-bottom: 1px solid #f0f0f0;
  }
}
</style>