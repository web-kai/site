<template>
  <div class="contact">
    <section class="page-banner">
      <div class="container">
        <h1>联系我们</h1>
        <p>期待与您携手，共创装备智能保障新未来</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>让我们开始对话</h2>
            <p class="info-desc">无论您是有项目咨询、产品了解，还是希望建立合作，我们的专业团队都将在24小时内与您取得联系。</p>

            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h4>公司地址</h4>
                  <p>成都市高新区天府软件园C区</p>
                  <p class="sub">北京、上海、西安设有分支机构</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div>
                  <h4>联系电话</h4>
                  <p>028-8888-8888</p>
                  <p class="sub">周一至周五 9:00-18:00</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div>
                  <h4>电子邮箱</h4>
                  <p>contact@cdcalabar.com</p>
                  <p class="sub">售前咨询：sales@cdcalabar.com</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">🖥️</div>
                <div>
                  <h4>官方网站</h4>
                  <p>www.cdcalabar.com</p>
                </div>
              </div>
            </div>

            <div class="social-section">
              <h4>关注我们</h4>
              <div class="social-links">
                <a href="#" class="social-link">微信公众号</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">知乎</a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrap">
            <h3>在线咨询</h3>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input type="text" v-model="form.name" placeholder="请输入您的姓名" required />
                </div>
                <div class="form-group">
                  <label>公司名称</label>
                  <input type="text" v-model="form.company" placeholder="请输入公司名称" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>联系电话 <span class="required">*</span></label>
                  <input type="tel" v-model="form.phone" placeholder="请输入手机号码" required />
                </div>
                <div class="form-group">
                  <label>电子邮箱</label>
                  <input type="email" v-model="form.email" placeholder="请输入邮箱地址" />
                </div>
              </div>
              <div class="form-group">
                <label>咨询类型</label>
                <select v-model="form.type">
                  <option value="">请选择咨询类型</option>
                  <option>产品咨询</option>
                  <option>解决方案咨询</option>
                  <option>商务合作</option>
                  <option>媒体采访</option>
                  <option>其他</option>
                </select>
              </div>
              <div class="form-group">
                <label>留言内容 <span class="required">*</span></label>
                <textarea v-model="form.message" rows="5" placeholder="请描述您的需求或问题..." required></textarea>
              </div>
              <button type="submit" class="btn-primary btn-block" :disabled="submitting">
                {{ submitting ? '提交中...' : '提交咨询' }}
              </button>
              <p v-if="submitSuccess" class="success-msg">✓ 提交成功！我们将尽快与您联系。</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="branches-section">
      <div class="container">
        <div class="section-title">
          <h2>分支机构</h2>
          <div class="line"></div>
          <p>覆盖全国的服务网络，就近响应客户需求</p>
        </div>
        <div class="branches-grid">
          <div class="branch-card" v-for="b in branches" :key="b.city">
            <div class="branch-icon">{{ b.icon }}</div>
            <h4>{{ b.city }}</h4>
            <p>{{ b.address }}</p>
            <p class="branch-phone">📞 {{ b.phone }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <div class="map-placeholder">
          <div class="map-bg">
            <div class="map-pin">
              <div class="pin-dot"></div>
              <div class="pin-pulse"></div>
            </div>
            <div class="map-label">成都卡莱博尔总部</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitting = ref(false)
const submitSuccess = ref(false)

const form = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  type: '',
  message: ''
})

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitSuccess.value = true
    setTimeout(() => { submitSuccess.value = false }, 3000)
    form.name = ''
    form.company = ''
    form.phone = ''
    form.email = ''
    form.type = ''
    form.message = ''
  }, 1200)
}

const branches = [
  { city: '成都总部', icon: '🏢', address: '高新区天府软件园C区', phone: '028-8888-8888' },
  { city: '北京办事处', icon: '🏛️', address: '海淀区中关村科技园', phone: '010-8888-8888' },
  { city: '上海办事处', icon: '🏙️', address: '浦东新区张江高科技园区', phone: '021-8888-8888' },
  { city: '西安办事处', icon: '🏗️', address: '高新区科技路', phone: '029-8888-8888' }
]
</script>

<style scoped>
.contact-section { padding: 80px 0; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.contact-info h2 {
  font-size: 32px;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.info-desc {
  color: #666;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 36px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
}

.info-item {
  display: flex;
  gap: 16px;
}

.info-icon {
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: linear-gradient(135deg, #eef4ff, #e3f2fd);
  border-radius: 10px;
  font-size: 22px;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 15px;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.info-item p {
  font-size: 14px;
  color: #444;
}

.info-item .sub {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.social-section h4 {
  font-size: 15px;
  color: #1a1a2e;
  margin-bottom: 14px;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  padding: 8px 18px;
  background: #f8f9fb;
  border-radius: 20px;
  font-size: 13px;
  color: #0056b3;
  transition: all 0.2s;
}

.social-link:hover {
  background: #0056b3;
  color: #fff;
}

.contact-form-wrap {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 86, 179, 0.08);
  border: 1px solid #f0f0f0;
}

.contact-form-wrap h3 {
  font-size: 22px;
  color: #1a1a2e;
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 13px;
  color: #444;
  margin-bottom: 8px;
  font-weight: 500;
}

.required {
  color: #e53935;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;
  background: #fafafa;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00a3e0;
  background: #fff;
}

.form-group textarea {
  resize: vertical;
}

.btn-block {
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px;
  font-size: 15px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-msg {
  margin-top: 14px;
  padding: 12px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
}

.branches-section {
  background: #f8f9fb;
  padding: 100px 0;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.branch-card {
  background: #fff;
  padding: 30px 24px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
}

.branch-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 86, 179, 0.1);
}

.branch-icon {
  font-size: 36px;
  margin-bottom: 14px;
}

.branch-card h4 {
  font-size: 18px;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.branch-card p {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.branch-phone {
  margin-top: 8px;
  color: #0056b3 !important;
  font-weight: 500;
}

.map-section { padding: 0 0 80px; }

.map-placeholder {
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
}

.map-bg {
  height: 100%;
  background:
    linear-gradient(135deg, rgba(0, 86, 179, 0.05) 0%, rgba(0, 163, 224, 0.05) 100%),
    repeating-linear-gradient(0deg, transparent, transparent 39px, #e0e0e0 39px, #e0e0e0 40px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, #e0e0e0 39px, #e0e0e0 40px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-pin {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pin-dot {
  width: 20px;
  height: 20px;
  background: #e53935;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(229, 57, 53, 0.5);
  position: relative;
  z-index: 2;
}

.pin-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: rgba(229, 57, 53, 0.3);
  border-radius: 50%;
  animation: pulse-ring 1.5s ease-out infinite;
}

@keyframes pulse-ring {
  0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

.map-label {
  position: absolute;
  top: 50%;
  left: calc(50% + 24px);
  transform: translateY(-50%);
  background: #1a1a2e;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
}

@media (max-width: 992px) {
  .contact-grid { grid-template-columns: 1fr; }
  .branches-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 576px) {
  .form-row { grid-template-columns: 1fr; }
  .branches-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .contact-form-wrap { padding: 28px 20px; }
}
</style>