<template>
  <!-- WhatsApp Floating Widget -->
  <div class="wa-widget-wrapper">
    <!-- Tooltip / Chat Bubble -->
    <transition name="wa-tooltip">
      <div v-if="showTooltip" class="wa-tooltip">
        <div class="wa-tooltip-header">
          <div class="wa-avatar">
            <svg viewBox="0 0 24 24" fill="white" class="wa-avatar-icon">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.375A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </div>
          <div class="wa-tooltip-info">
            <div class="wa-tooltip-name">Arua SEZ</div>
            <div class="wa-tooltip-status">
              <span class="wa-online-dot"></span> Typically replies within minutes
            </div>
          </div>
          <button class="wa-close-btn" @click.stop="showTooltip = false" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="wa-tooltip-body">
          <div class="wa-message-bubble">
            👋 Hello! How can we help you today? Chat with us on WhatsApp for quick assistance.
          </div>
        </div>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="wa-start-btn" @click="trackClick">
          <svg viewBox="0 0 24 24" fill="currentColor" class="wa-start-icon">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 1.03 1.004-3.668-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Start Chat on WhatsApp
        </a>
      </div>
    </transition>

    <!-- FAB Button -->
    <button
      class="wa-fab"
      :class="{ 'wa-fab--active': showTooltip }"
      @click="toggleTooltip"
      aria-label="Chat on WhatsApp"
    >
      <span class="wa-fab-pulse"></span>
      <svg viewBox="0 0 24 24" fill="currentColor" class="wa-fab-icon">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 1.03 1.004-3.668-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  phoneNumber: {
    type: String,
    default: '256700000000'
  },
  message: {
    type: String,
    default: 'Hello, I am interested in learning more about Arua Special Economic Zone.'
  }
})

const showTooltip = ref(false)
let autoOpenTimer = null

const whatsappUrl = computed(() => {
  const encoded = encodeURIComponent(props.message)
  return `https://wa.me/${props.phoneNumber}?text=${encoded}`
})

function toggleTooltip() {
  showTooltip.value = !showTooltip.value
}

function trackClick() {
  showTooltip.value = false
}

onMounted(() => {
  const hasSeenWidget = sessionStorage.getItem('wa_widget_seen')
  if (!hasSeenWidget) {
    autoOpenTimer = setTimeout(() => {
      showTooltip.value = true
      sessionStorage.setItem('wa_widget_seen', '1')
    }, 5000)
  }
})

onUnmounted(() => {
  if (autoOpenTimer) clearTimeout(autoOpenTimer)
})
</script>

<style scoped>
.wa-widget-wrapper {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

/* FAB Button */
.wa-fab {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.15);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  flex-shrink: 0;
}

.wa-fab:hover {
  transform: scale(1.12);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0,0,0,0.18);
}

.wa-fab--active {
  transform: scale(0.95);
}

.wa-fab-icon {
  width: 30px;
  height: 30px;
  color: #fff;
  position: relative;
  z-index: 1;
}

.wa-fab-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.35);
  animation: wa-pulse 2.4s ease-out infinite;
}

@keyframes wa-pulse {
  0% { transform: scale(1); opacity: 0.75; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* Tooltip Card */
.wa-tooltip {
  width: 310px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  transform-origin: bottom right;
}

.wa-tooltip-header {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  padding: 16px 16px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.wa-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wa-avatar-icon {
  width: 26px;
  height: 26px;
}

.wa-tooltip-info {
  flex: 1;
  min-width: 0;
}

.wa-tooltip-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.wa-tooltip-status {
  font-size: 11.5px;
  color: rgba(255,255,255,0.85);
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.wa-online-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #a7f3c0;
  box-shadow: 0 0 0 2px rgba(167,243,192,0.4);
  animation: wa-blink 2s ease-in-out infinite;
}

@keyframes wa-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.wa-close-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  flex-shrink: 0;
  transition: background 0.2s;
}

.wa-close-btn:hover {
  background: rgba(255,255,255,0.35);
}

.wa-close-btn svg {
  width: 14px;
  height: 14px;
}

.wa-tooltip-body {
  padding: 16px 16px 12px;
  background: #ece5dd;
}

.wa-message-bubble {
  background: #fff;
  border-radius: 0 12px 12px 12px;
  padding: 12px 14px;
  font-size: 13.5px;
  color: #1a1a1a;
  line-height: 1.55;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: relative;
}

.wa-message-bubble::before {
  content: '';
  position: absolute;
  top: 0;
  left: -8px;
  border-style: solid;
  border-width: 0 8px 8px 0;
  border-color: transparent #fff transparent transparent;
}

.wa-start-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  padding: 14px 16px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 0.2s, transform 0.15s;
}

.wa-start-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.wa-start-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Transitions */
.wa-tooltip-enter-active {
  animation: wa-pop-in 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.wa-tooltip-leave-active {
  animation: wa-pop-out 0.2s ease-in forwards;
}

@keyframes wa-pop-in {
  from { opacity: 0; transform: scale(0.8) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes wa-pop-out {
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.85) translateY(8px); }
}

/* Responsive */
@media (max-width: 480px) {
  .wa-widget-wrapper {
    bottom: 18px;
    right: 16px;
  }
  .wa-tooltip {
    width: calc(100vw - 32px);
    max-width: 310px;
  }
}
</style>
