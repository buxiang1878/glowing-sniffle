// 仪表盘初始化
function initGauges() {
    const gauges = document.querySelectorAll('.gauge');
    
    gauges.forEach(gauge => {
      const value = parseInt(gauge.getAttribute('data-value'));
      gauge.style.setProperty('--percentage', `${value}%`);
    });
  }
  
  // 人脸识别功能
  async function setupFaceRecognition() {
    const cameraFeed = document.getElementById('camera-feed');
    const startBtn = document.getElementById('start-recognition');
    const detectionTimeEl = document.getElementById('detection-time');
    const faceCountEl = document.getElementById('face-count');
    
    let stream = null;
    let isRecognizing = false;
    
    startBtn.addEventListener('click', async () => {
      if (isRecognizing) {
        // 停止识别
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        cameraFeed.innerHTML = `
          <div class="placeholder">
            <i class="camera-icon"></i>
            <p>点击下方按钮开启摄像头</p>
          </div>
        `;
        startBtn.innerHTML = `
          <span class="btn-icon"></span>
          <span class="btn-text">一键体验人脸识别</span>
        `;
        isRecognizing = false;
        return;
      }
      
      try {
        // 请求摄像头权限
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // 显示视频流
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.playsInline = true;
        
        cameraFeed.innerHTML = '';
        cameraFeed.appendChild(video);
        
        // 更新按钮状态
        startBtn.innerHTML = `
          <span class="btn-icon stop-icon"></span>
          <span class="btn-text">停止识别</span>
        `;
        isRecognizing = true;
        
        // 模拟人脸识别结果
        simulateFaceDetection(video, detectionTimeEl, faceCountEl);
      } catch (error) {
        console.error('摄像头访问错误:', error);
        alert('无法访问摄像头，请确保已授予权限');
      }
    });
  }
  
  // 模拟人脸检测（实际项目中应接入真实API）
  function simulateFaceDetection(video, timeEl, countEl) {
    let detectionInterval = setInterval(() => {
      if (!video.srcObject) {
        clearInterval(detectionInterval);
        return;
      }
      
      // 随机生成模拟数据
      const detectionTime = (10 + Math.random() * 20).toFixed(1);
      const faceCount = Math.floor(Math.random() * 4);
      
      timeEl.textContent = `${detectionTime}ms`;
      countEl.textContent = faceCount;
    }, 1000);
  }
  
  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', () => {
    initGauges();
    setupFaceRecognition();
  });