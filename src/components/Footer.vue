<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">CA</div>
            <div class="logo-text">
              <span class="logo-cn">卡莱博尔</span>
              <span class="logo-en">CALABAR</span>
            </div>
          </div>
          <p class="footer-desc">
            成都卡莱博尔信息技术股份有限公司，以数据、知识、智能融合技术为核心，致力于成为中国领先的智能保障服务方案提供商。
          </p>
        </div>

        <div class="footer-col">
          <h4>产品中心</h4>
          <ul>
            <li><router-link to="/products">PHM故障预测系统</router-link></li>
            <li><router-link to="/products">装备健康管理平台</router-link></li>
            <li><router-link to="/products">智能诊断分析工具</router-link></li>
            <li><router-link to="/products">数据采集与传输</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>解决方案</h4>
          <ul>
            <li><router-link to="/solutions">国防军工</router-link></li>
            <li><router-link to="/solutions">民用航空</router-link></li>
            <li><router-link to="/solutions">轨道交通</router-link></li>
            <li><router-link to="/solutions">电力能源</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>联系方式</h4>
          <ul class="contact-list">
            <li>📍 成都市高新区天府软件园</li>
            <li>📞 028-8888-8888</li>
            <li>✉️ contact@cdcalabar.com</li>
            <li>🕐 周一至周五 9:00-18:00</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© 2024 成都卡莱博尔信息技术股份有限公司 版权所有 | 蜀ICP备XXXXXXXX号</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #0a1628;
  color: #aaa;
}

.footer-main {
  padding: 60px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.footer-logo .logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.footer-logo .logo-text { display: flex; flex-direction: column; }
.footer-logo .logo-cn { font-size: 17px; font-weight: 600; color: #fff; }
.footer-logo .logo-en { font-size: 10px; color: #00a3e0; letter-spacing: 2px; }

.footer-desc {
  font-size: 14px;
  line-height: 1.8;
  color: #888;
}

.footer-col h4 {
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #0056b3, #00a3e0);
  border-radius: 2px;
}

.footer-col ul li {
  margin-bottom: 12px;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-col ul li a:hover {
  color: #00a3e0;
}

.contact-list li {
  font-size: 13px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: #666;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>