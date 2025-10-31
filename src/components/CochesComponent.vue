<template>
  <div class="f1-container">
    <div class="checkered-bg"></div>
    <h1 class="f1-title">
      <span class="f1-icon">🏁</span>
      <span class="title-text">
        <span class="glitch" data-text="F1 RACING">F1 RACING</span>
        <span class="subtitle">GARAGE</span>
      </span>
      <span class="f1-icon">🏁</span>
    </h1>
    <div class="coches-grid">
      <div v-for="car in coches" :key="car" class="car-card">
        <div class="card-glow"></div>
        <div class="racing-number">{{car.idcoche}}</div>
        <div class="car-header">
          <div class="header-decoration">
            <span class="deco-line"></span>
            <span class="deco-dot"></span>
            <span class="deco-line"></span>
          </div>
          <h3 class="car-name">
            <span class="marca">{{car.marca}}</span>
            <span class="modelo">{{car.modelo}}</span>
          </h3>
          <div class="header-shine"></div>
        </div>
        <div class="car-image-container">
          <div class="hexagon-bg"></div>
          <div class="speed-lines speed-line-1"></div>
          <div class="speed-lines speed-line-2"></div>
          <div class="speed-lines speed-line-3"></div>
          <img :src="car.imagen" class="car-image" :alt="car.marca + ' ' + car.modelo">
          <div class="image-frame"></div>
        </div>
        <div class="car-footer">
          <div class="stats-bar">
            <div class="stat-item">
              <span class="stat-icon">⚡</span>
              <span class="stat-value">350 km/h</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-icon">🏆</span>
              <span class="stat-value">TOP SPEED</span>
            </div>
          </div>
          <div class="driver-info">
            <div class="driver-badge">
              <span class="driver-label">PILOT</span>
              <span class="driver-name">{{car.conductor}}</span>
            </div>
            <div class="position-badge">P1</div>
          </div>
        </div>
        <div class="corner-accent top-left"></div>
        <div class="corner-accent top-right"></div>
        <div class="corner-accent bottom-left"></div>
        <div class="corner-accent bottom-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches'
const service = new ServiceCoches();
export default {
    name:"CochesComponent",
    data(){
        return{
            coches: []
        }
    },
    mounted(){
      //Una promesa no es un metodo, es un objeto
        service.getCoches().then(res=>{
          this.coches = res
        });
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

* {
  box-sizing: border-box;
}

.f1-container {
  background: #000;
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  position: relative;
  overflow: hidden;
}

.f1-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(220, 0, 0, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 119, 255, 0.05) 0%, transparent 70%);
  animation: pulseGlow 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.checkered-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);
  pointer-events: none;
  animation: moveCheckered 20s linear infinite;
}

@keyframes moveCheckered {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(70px) translateY(70px); }
}

.f1-title {
  text-align: center;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  z-index: 10;
  animation: titleEntry 1s ease-out;
}

@keyframes titleEntry {
  0% { 
    opacity: 0;
    transform: translateY(-50px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}

.f1-icon {
  font-size: 3em;
  animation: rotateFlag 3s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
}

@keyframes rotateFlag {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(10deg) scale(1.1); }
}

.title-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.glitch {
  font-size: 4em;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 12px;
  position: relative;
  text-shadow: 
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #dc0000,
    0 0 80px #dc0000,
    0 0 120px #dc0000;
  animation: textGlow 2s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% {
    text-shadow: 
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #dc0000,
      0 0 80px #dc0000;
  }
  50% {
    text-shadow: 
      0 0 20px #fff,
      0 0 40px #fff,
      0 0 60px #dc0000,
      0 0 100px #dc0000,
      0 0 140px #dc0000;
  }
}

.subtitle {
  font-size: 1.2em;
  color: #ffd700;
  letter-spacing: 8px;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.coches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}

.car-card {
  background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  animation: cardEntry 0.6s ease-out backwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

@keyframes cardEntry {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.car-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, 
    #dc0000 0%, 
    #ff1744 25%, 
    #ffd700 50%, 
    #ff1744 75%, 
    #dc0000 100%);
  background-size: 200% 100%;
  animation: racingStripe 3s linear infinite;
  z-index: 10;
}

@keyframes racingStripe {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(220, 0, 0, 0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.car-card:hover {
  transform: translateY(-20px) scale(1.03);
  box-shadow: 
    0 30px 80px rgba(220, 0, 0, 0.4),
    0 0 60px rgba(220, 0, 0, 0.3),
    0 0 0 1px rgba(255, 215, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.car-card:hover .card-glow {
  opacity: 1;
  animation: rotateGlow 4s linear infinite;
}

@keyframes rotateGlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.racing-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3em;
  font-weight: 900;
  color: rgba(255, 215, 0, 0.15);
  z-index: 1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
}

.car-card:hover .racing-number {
  color: rgba(255, 215, 0, 0.3);
  transform: scale(1.2);
}

.corner-accent {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 3px solid #ffd700;
  z-index: 5;
  opacity: 0;
  transition: all 0.4s ease;
}

.top-left {
  top: 15px;
  left: 15px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 15px;
  right: 15px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 15px;
  left: 15px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 15px;
  right: 15px;
  border-left: none;
  border-top: none;
}

.car-card:hover .corner-accent {
  opacity: 1;
}

.car-card:hover .top-left {
  transform: translate(-5px, -5px);
}

.car-card:hover .top-right {
  transform: translate(5px, -5px);
}

.car-card:hover .bottom-left {
  transform: translate(-5px, 5px);
}

.car-card:hover .bottom-right {
  transform: translate(5px, 5px);
}

.car-header {
  background: linear-gradient(135deg, #dc0000 0%, #a00000 50%, #dc0000 100%);
  background-size: 200% 100%;
  padding: 25px 20px;
  position: relative;
  overflow: hidden;
  transition: background-position 0.5s ease;
}

.car-card:hover .car-header {
  background-position: 100% 0;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.deco-line {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
}

.deco-dot {
  width: 8px;
  height: 8px;
  background: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 10px #ffd700;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.3);
    opacity: 0.7;
  }
}

.header-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent);
  transition: left 0.6s ease;
}

.car-card:hover .header-shine {
  left: 100%;
}

.car-name {
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  z-index: 2;
}

.marca {
  color: #fff;
  font-size: 1.6em;
  font-weight: 900;
  letter-spacing: 4px;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease;
}

.car-card:hover .marca {
  transform: scale(1.05);
}

.modelo {
  color: #ffd700;
  font-weight: 900;
  font-size: 1.3em;
  letter-spacing: 3px;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.8),
    0 0 20px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { 
    filter: brightness(1);
  }
  50% { 
    filter: brightness(1.3);
  }
}

.car-image-container {
  position: relative;
  padding: 40px;
  background: 
    radial-gradient(circle at center, #2a2a2a 0%, #0f0f0f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  overflow: hidden;
}

.hexagon-bg {
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, 
    rgba(220, 0, 0, 0.1), 
    rgba(255, 215, 0, 0.1));
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  animation: rotateHex 20s linear infinite;
  opacity: 0.3;
}

@keyframes rotateHex {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.car-image {
  width: 280px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
  border: 4px solid transparent;
  background: linear-gradient(#0f0f0f, #0f0f0f) padding-box,
              linear-gradient(135deg, #dc0000, #ffd700, #dc0000) border-box;
  box-shadow: 
    0 10px 40px rgba(220, 0, 0, 0.5),
    0 0 60px rgba(220, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 3;
  filter: brightness(0.95) contrast(1.1);
}

.car-card:hover .car-image {
  transform: scale(1.15) rotate(-2deg);
  filter: brightness(1.1) contrast(1.2);
  box-shadow: 
    0 15px 60px rgba(220, 0, 0, 0.7),
    0 0 80px rgba(255, 215, 0, 0.5),
    inset 0 0 30px rgba(0, 0, 0, 0.3);
}

.image-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(280px + 40px);
  height: calc(220px + 40px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  pointer-events: none;
  transition: all 0.4s ease;
}

.car-card:hover .image-frame {
  width: calc(280px + 60px);
  height: calc(220px + 60px);
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
}

.speed-lines {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(220, 0, 0, 0.8) 50%, 
    transparent 100%);
  opacity: 0;
  box-shadow: 0 0 10px rgba(220, 0, 0, 0.8);
}

.speed-line-1 {
  top: 40%;
}

.speed-line-2 {
  top: 50%;
}

.speed-line-3 {
  top: 60%;
}

.car-card:hover .speed-lines {
  animation: speedLine 0.6s ease-out;
}

.car-card:hover .speed-line-1 {
  animation-delay: 0s;
}

.car-card:hover .speed-line-2 {
  animation-delay: 0.1s;
}

.car-card:hover .speed-line-3 {
  animation-delay: 0.2s;
}

@keyframes speedLine {
  0% { 
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% { 
    transform: translateX(100%);
    opacity: 0;
  }
}

.car-footer {
  background: linear-gradient(180deg, #0f0f0f, #1a1a1a);
  padding: 25px 20px;
  border-top: 2px solid rgba(220, 0, 0, 0.3);
  position: relative;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
}

.car-card:hover .stats-bar {
  background: rgba(220, 0, 0, 0.2);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 0 20px rgba(220, 0, 0, 0.3);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-icon {
  font-size: 1.5em;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.8));
}

.stat-value {
  color: #fff;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.stat-divider {
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, 
    transparent, 
    rgba(255, 215, 0, 0.5), 
    transparent);
}

.driver-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.driver-badge {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  background: linear-gradient(135deg, 
    rgba(220, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.3));
  border-radius: 10px;
  border: 1px solid rgba(220, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.driver-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent);
  transition: left 0.5s ease;
}

.car-card:hover .driver-badge::before {
  left: 100%;
}

.driver-label {
  color: #999;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
}

.driver-name {
  color: #ffd700;
  font-size: 1.3em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.8),
    0 0 20px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
}

.car-card:hover .driver-name {
  color: #fff;
  text-shadow: 
    0 0 15px rgba(255, 215, 0, 1),
    0 0 30px rgba(255, 215, 0, 0.7),
    2px 2px 6px rgba(0, 0, 0, 1);
  transform: scale(1.05);
}

.position-badge {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 900;
  color: #000;
  box-shadow: 
    0 5px 20px rgba(255, 215, 0, 0.6),
    inset 0 -3px 10px rgba(0, 0, 0, 0.3),
    inset 0 3px 10px rgba(255, 255, 255, 0.5);
  border: 3px solid #000;
  transition: all 0.3s ease;
  position: relative;
}

.position-badge::before {
  content: '🏆';
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.6em;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.8));
}

.car-card:hover .position-badge {
  transform: rotate(360deg) scale(1.1);
  box-shadow: 
    0 8px 30px rgba(255, 215, 0, 0.9),
    inset 0 -3px 10px rgba(0, 0, 0, 0.3),
    inset 0 3px 10px rgba(255, 255, 255, 0.7);
}

/* Responsive */
@media (max-width: 768px) {
  .f1-title {
    gap: 15px;
  }
  
  .f1-icon {
    font-size: 2em;
  }
  
  .glitch {
    font-size: 2.5em;
    letter-spacing: 6px;
  }
  
  .subtitle {
    font-size: 1em;
    letter-spacing: 4px;
  }
  
  .coches-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .car-image {
    width: 220px;
    height: 180px;
  }
  
  .image-frame {
    width: calc(220px + 40px);
    height: calc(180px + 40px);
  }
  
  .car-card:hover .image-frame {
    width: calc(220px + 50px);
    height: calc(180px + 50px);
  }
  
  .marca {
    font-size: 1.3em;
  }
  
  .modelo {
    font-size: 1.1em;
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 10px;
  }
  
  .stat-divider {
    width: 40px;
    height: 2px;
  }
}

@media (max-width: 480px) {
  .glitch {
    font-size: 2em;
    letter-spacing: 4px;
  }
  
  .car-image {
    width: 180px;
    height: 150px;
  }
  
  .driver-info {
    flex-direction: column;
  }
}
</style>