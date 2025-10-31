<template>
  <div class="futuristic-dimension">
    <!-- Sistema de partículas cósmicas -->
    <div class="cosmic-particles">
      <div class="particle" v-for="n in 50" :key="n" :style="{ 
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 20 + 's',
        animationDuration: (Math.random() * 10 + 15) + 's'
      }"></div>
    </div>

    <table class="table table-danger">
        <tr><td></td></tr>
    </table>
    <!-- Ondas de energía -->
    <div class="energy-waves">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>

    <!-- Grid cibernético -->
    <div class="cyber-grid"></div>

    <!-- Portal de búsqueda holográfico -->
    <div class="search-portal">
      <div class="search-header">
        <h3 class="search-title">Quantum Search Protocol</h3>
      </div>
      <div class="quantum-input-wrapper">
        <label class="quantum-label">🔍 Enter Customer ID</label>
        <input 
          type="text" 
          v-model="id" 
          class="quantum-input" 
          placeholder="Type customer identifier...">
      </div>
      <button @click="buscarPorId()" class="quantum-button">
        <span>Execute Search</span>
      </button>
      
      <div v-if="customerPorID.ContactName" class="result-box">
        <div class="result-header">✓ Match Found</div>
        <div class="result-data">{{customerPorID.ContactName}}</div>
      </div>
    </div>

    <!-- Título épico con aurora -->
    <div class="epic-title">
      <h1 class="title-main">Elite Network</h1>
      <p class="title-subtitle">Global Directory System</p>
    </div>

    <!-- Dashboard de estadísticas 3D -->
    <div class="stats-dashboard">
      <div class="stat-cube">
        <span class="stat-icon">🏢</span>
        <span class="stat-label">Companies</span>
        <span class="stat-value">{{customers.length}}</span>
        <div class="stat-graph">
          <div class="graph-bar"></div>
        </div>
      </div>
      
      <div class="stat-cube">
        <span class="stat-icon">🌍</span>
        <span class="stat-label">Countries</span>
        <span class="stat-value">45+</span>
        <div class="stat-graph">
          <div class="graph-bar"></div>
        </div>
      </div>
      
      <div class="stat-cube">
        <span class="stat-icon">⭐</span>
        <span class="stat-label">Active</span>
        <span class="stat-value">100%</span>
        <div class="stat-graph">
          <div class="graph-bar"></div>
        </div>
      </div>
    </div>

    <!-- Grid de clientes futurista -->
    <div class="clients-matrix">
      <div class="matrix-grid">
        <div 
          v-for="(customer, index) in customers" 
          :key="customer.CustomerID"
          class="client-card"
          :style="{ animationDelay: (index * 0.05) + 's' }">
          
          <!-- SVG Border animado -->
          <svg class="svg-border" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#00ffff;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8a2be2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect class="border-line" x="1" y="1" width="100%" height="100%" rx="25"/>
          </svg>

          <!-- Decoración 3D de esquinas -->
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration top-right"></div>
          <div class="corner-decoration bottom-left"></div>
          <div class="corner-decoration bottom-right"></div>

          <!-- Header de la tarjeta -->
          <div class="card-header">
            <h2 class="company-name">{{customer.CompanyName}}</h2>
            <span class="company-id">ID: {{customer.CustomerID}}</span>
          </div>

          <!-- Sección de contacto -->
          <div class="contact-section">
            <div class="section-title">
              <span class="title-icon">👤</span>
              <span>Primary Contact</span>
            </div>
            <div class="contact-name">{{customer.ContactName}}</div>
            <div class="contact-title">{{customer.ContactTitle}}</div>
          </div>

          <!-- Divisor holográfico -->
          <div class="holographic-divider"></div>

          <!-- Información de ubicación -->
          <div class="location-matrix">
            <div class="section-title">
              <span class="title-icon">📍</span>
              <span>Location Data</span>
            </div>
            
            <div class="location-row">
              <span class="location-icon">🏠</span>
              <div class="location-content">
                <span class="location-label">Address</span>
                <span class="location-value">{{customer.Address}}</span>
              </div>
            </div>

            <div class="location-row">
              <span class="location-icon">🏙️</span>
              <div class="location-content">
                <span class="location-label">City</span>
                <span class="location-value">{{customer.City}}</span>
              </div>
            </div>

            <div class="location-row" v-if="customer.Region">
              <span class="location-icon">🗺️</span>
              <div class="location-content">
                <span class="location-label">Region</span>
                <span class="location-value">{{customer.Region}}</span>
              </div>
            </div>

            <div class="location-row">
              <span class="location-icon">📮</span>
              <div class="location-content">
                <span class="location-label">Postal Code</span>
                <span class="location-value">{{customer.PostalCode}}</span>
              </div>
            </div>

            <div class="country-badge">
              <span class="flag-icon">🌎</span>
              <span class="country-name">{{customer.Country}}</span>
            </div>
          </div>

          <!-- Divisor holográfico -->
          <div class="holographic-divider"></div>

          <!-- Comunicación -->
          <div class="comms-portal">
            <span class="phone-icon">📞</span>
            <div class="phone-info">
              <span class="phone-label">Direct Line</span>
              <a :href="'tel:' + customer.Phone" class="phone-number">{{customer.Phone}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer épico -->
    <div class="cosmic-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-icon">💼</span>
          <span class="logo-text">Elite Network</span>
        </div>
        <div class="footer-text">
          <span class="text-glow">Powered by Advanced Technology</span>
        </div>
        <div class="footer-social">
          <span class="social-icon">🌐</span>
          <span class="social-icon">💬</span>
          <span class="social-icon">📧</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Global from '../Global'
let url= Global.urlCustomers;
export default {
    data(){
        return{
            customers: [],
            id: 0,
            customerPorID: {}
        }
    },
    methods:{
        loadCustomers(){
            let request = "/customers"
            axios.get(url+request).then(res => {
                this.customers = res.data.value
                console.log(this.customers.value)
            })
        },
        buscarPorId(){   
           let id=this.id
           this.customers.map(customer => {
            console.log(customer)
                if(customer.CustomerID == id){
                   this.customerPorID = customer 
                }
            })
        }
    },
    mounted(){
        this.loadCustomers()
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Poppins:wght@300;400;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.futuristic-dimension {
  min-height: 100vh;
  background: #000000;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow-x: hidden;
  color: #ffffff;
  padding: 40px 20px;
}

/* Sistema de partículas cósmicas */
.cosmic-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, #00ffff, transparent);
  border-radius: 50%;
  box-shadow: 0 0 10px #00ffff;
  animation: float 20s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(100px, -100px) scale(1.2);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50px, -200px) scale(0.8);
    opacity: 0.4;
  }
  75% {
    transform: translate(-150px, -50px) scale(1.1);
    opacity: 0.7;
  }
}

/* Ondas de energía */
.energy-waves {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.wave {
  position: absolute;
  width: 200%;
  height: 200%;
  border-radius: 45%;
  animation: wave 15s infinite ease-in-out;
}

.wave:nth-child(1) {
  background: radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  animation-delay: 0s;
}

.wave:nth-child(2) {
  background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, transparent 70%);
  animation-delay: -5s;
}

.wave:nth-child(3) {
  background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.1) 0%, transparent 70%);
  animation-delay: -10s;
}

@keyframes wave {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-40%, -60%) rotate(180deg) scale(1.3);
    opacity: 0.6;
  }
}

/* Grid cibernético */
.cyber-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  pointer-events: none;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Portal de búsqueda holográfico */
.search-portal {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto 60px;
  padding: 40px;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.03) 0%,
    rgba(138, 43, 226, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 
    0 0 60px rgba(0, 255, 255, 0.2),
    0 0 100px rgba(138, 43, 226, 0.15),
    inset 0 0 40px rgba(0, 255, 255, 0.05);
  animation: portalPulse 4s ease-in-out infinite;
}

@keyframes portalPulse {
  0%, 100% {
    box-shadow: 
      0 0 60px rgba(0, 255, 255, 0.2),
      0 0 100px rgba(138, 43, 226, 0.15),
      inset 0 0 40px rgba(0, 255, 255, 0.05);
  }
  50% {
    box-shadow: 
      0 0 80px rgba(0, 255, 255, 0.4),
      0 0 120px rgba(138, 43, 226, 0.25),
      inset 0 0 60px rgba(0, 255, 255, 0.1);
  }
}

.search-header {
  text-align: center;
  margin-bottom: 30px;
}

.search-title {
  font-size: 1.4rem;
  font-weight: 600;
  background: linear-gradient(90deg, #00ffff, #8a2be2, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: titleShine 3s ease-in-out infinite;
}

@keyframes titleShine {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.quantum-input-wrapper {
  position: relative;
  margin-bottom: 25px;
}

.quantum-label {
  display: block;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

.quantum-input {
  width: 100%;
  padding: 18px 24px;
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 15px;
  color: #ffffff;
  font-size: 1.1rem;
  font-family: 'Orbitron', sans-serif;
  outline: none;
  transition: all 0.3s ease;
}

.quantum-input:focus {
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  transform: scale(1.02);
}

.quantum-input::placeholder {
  color: rgba(0, 255, 255, 0.5);
}

.quantum-button {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #00ffff, #8a2be2);
  border: none;
  border-radius: 15px;
  color: #000;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.quantum-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent);
  transform: rotate(45deg);
  animation: buttonShine 3s linear infinite;
}

@keyframes buttonShine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.quantum-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.5);
}

.quantum-button:active {
  transform: translateY(0) scale(0.98);
}

.result-box {
  margin-top: 25px;
  padding: 20px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 15px;
  text-align: center;
}

.result-header {
  font-size: 1rem;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.result-data {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
}

/* Título épico con aurora */
.epic-title {
  text-align: center;
  margin: 80px 0 60px;
  position: relative;
  z-index: 10;
}

.title-main {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(90deg, 
    #00ffff 0%, 
    #ff00ff 25%,
    #8a2be2 50%,
    #ff00ff 75%,
    #00ffff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 8px;
  animation: auroraFlow 5s linear infinite, titleFloat 3s ease-in-out infinite;
  text-shadow: 
    0 0 30px rgba(0, 255, 255, 0.5),
    0 0 60px rgba(138, 43, 226, 0.3);
  margin-bottom: 20px;
}

@keyframes auroraFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

@keyframes titleFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
  }
}

.title-subtitle {
  font-size: 1.3rem;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 300;
  opacity: 0.8;
  animation: subtitlePulse 2s ease-in-out infinite;
}

@keyframes subtitlePulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* Dashboard de estadísticas 3D */
.stats-dashboard {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.stat-cube {
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.1) 0%,
    rgba(138, 43, 226, 0.1) 100%);
  backdrop-filter: blur(15px);
  padding: 35px;
  border-radius: 25px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-cube::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  animation: cubeGlow 6s ease-in-out infinite;
}

@keyframes cubeGlow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translate(-10%, -10%) scale(1.2);
    opacity: 1;
  }
}

.stat-cube:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  box-shadow: 
    0 20px 60px rgba(0, 255, 255, 0.3),
    0 0 80px rgba(138, 43, 226, 0.2);
  border-color: #00ffff;
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.6));
  animation: iconRotate 10s linear infinite;
}

@keyframes iconRotate {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-weight: 500;
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-graph {
  margin-top: 20px;
  height: 60px;
  width: 100%;
  background: linear-gradient(90deg, 
    rgba(0, 255, 255, 0.2) 0%,
    rgba(0, 255, 255, 0.4) 50%,
    rgba(0, 255, 255, 0.2) 100%);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.graph-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background: linear-gradient(180deg, #00ffff, #8a2be2);
  border-radius: 10px;
  animation: graphPulse 2s ease-in-out infinite;
}

@keyframes graphPulse {
  0%, 100% {
    height: 60%;
  }
  50% {
    height: 100%;
  }
}

/* Grid de clientes futurista */
.clients-matrix {
  position: relative;
  z-index: 10;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px 80px;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 35px;
}

.client-card {
  background: linear-gradient(135deg,
    rgba(0, 20, 40, 0.8) 0%,
    rgba(20, 0, 40, 0.8) 100%);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 35px;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: cardAppear 0.6s ease-out backwards;
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.client-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    #00ffff, 
    #8a2be2, 
    #ff00ff, 
    #00ffff);
  background-size: 300% 300%;
  border-radius: 25px;
  z-index: -1;
  opacity: 0;
  animation: borderFlow 4s linear infinite;
  transition: opacity 0.5s;
}

.client-card:hover::before {
  opacity: 1;
}

@keyframes borderFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.client-card:hover {
  transform: translateY(-15px) rotateX(5deg);
  box-shadow: 
    0 30px 80px rgba(0, 255, 255, 0.3),
    0 0 100px rgba(138, 43, 226, 0.2),
    inset 0 0 60px rgba(0, 255, 255, 0.05);
}

/* SVG Border animado */
.svg-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.border-line {
  fill: none;
  stroke: url(#gradient);
  stroke-width: 2;
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: drawBorder 3s ease-in-out infinite;
}

@keyframes drawBorder {
  0%, 100% {
    stroke-dashoffset: 800;
  }
  50% {
    stroke-dashoffset: 0;
  }
}

/* Decoración 3D de esquinas */
.corner-decoration {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #00ffff;
  opacity: 0.3;
  transition: all 0.3s;
}

.corner-decoration.top-left {
  top: 15px;
  left: 15px;
  border-right: none;
  border-bottom: none;
}

.corner-decoration.top-right {
  top: 15px;
  right: 15px;
  border-left: none;
  border-bottom: none;
}

.corner-decoration.bottom-left {
  bottom: 15px;
  left: 15px;
  border-right: none;
  border-top: none;
}

.corner-decoration.bottom-right {
  bottom: 15px;
  right: 15px;
  border-left: none;
  border-top: none;
}

.client-card:hover .corner-decoration {
  opacity: 1;
  transform: scale(1.2);
}

/* Header de la tarjeta */
.card-header {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  position: relative;
}

.company-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  line-height: 1.3;
}

.company-id {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(0, 255, 255, 0.15);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Sección de contacto */
.contact-section {
  margin-bottom: 25px;
}

.section-title {
  font-size: 0.85rem;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.6));
}

.contact-name {
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 6px;
}

.contact-title {
  font-size: 1rem;
  color: rgba(138, 43, 226, 1);
  font-style: italic;
}

/* Divisor holográfico */
.holographic-divider {
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #00ffff 50%, 
    transparent 100%);
  margin: 25px 0;
  position: relative;
  animation: dividerPulse 2s ease-in-out infinite;
}

@keyframes dividerPulse {
  0%, 100% {
    opacity: 0.3;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  }
}

/* Información de ubicación */
.location-matrix {
  margin-bottom: 20px;
}

.location-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.location-icon {
  font-size: 1.1rem;
  color: #8a2be2;
  margin-top: 2px;
  filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.6));
}

.location-content {
  flex: 1;
}

.location-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
  display: block;
}

.location-value {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
}

.country-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.2), 
    rgba(138, 43, 226, 0.2));
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  margin-top: 5px;
}

.flag-icon {
  font-size: 1.2rem;
}

.country-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #00ffff;
  letter-spacing: 1px;
}

/* Comunicación */
.comms-portal {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  transition: all 0.3s;
}

.comms-portal:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

.phone-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.6));
}

.phone-info {
  flex: 1;
}

.phone-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
  display: block;
}

.phone-number {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.phone-number:hover {
  color: #ff00ff;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
}

/* Footer cósmico */
.cosmic-footer {
  position: relative;
  z-index: 10;
  margin-top: 80px;
  padding: 50px 20px;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 20, 40, 0.8) 50%,
    rgba(0, 0, 0, 0.9) 100%);
  border-top: 1px solid rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8));
  animation: logoSpin 10s linear infinite;
}

@keyframes logoSpin {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #00ffff, #8a2be2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-text {
  flex: 1;
  text-align: center;
}

.text-glow {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: textGlow 2s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  }
}

.footer-social {
  display: flex;
  gap: 20px;
}

.social-icon {
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s;
  filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.6));
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.2);
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 1));
}

/* Efectos responsive */
@media (max-width: 768px) {
  .title-main {
    font-size: 3rem;
    letter-spacing: 4px;
  }
  
  .title-subtitle {
    font-size: 1rem;
    letter-spacing: 3px;
  }
  
  .matrix-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-dashboard {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .title-main {
    font-size: 2rem;
  }
  
  .search-portal {
    padding: 25px;
  }
  
  .client-card {
    padding: 25px;
  }
}
</style>
