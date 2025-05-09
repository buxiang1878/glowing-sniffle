document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.feature-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮和面板的active类
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // 为当前按钮和对应面板添加active类
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-panel`).classList.add('active');
        });
    });
    
    // 诗歌生成功能
    const poetryGenerateBtn = document.querySelector('.generate-btn');
    const poetryResult = document.querySelector('.generated-poem');
    const poetryLoading = document.querySelector('.loading-animation');
    
    if (poetryGenerateBtn) {
        poetryGenerateBtn.addEventListener('click', generatePoem);
    }
    
    function generatePoem() {
        const theme = document.getElementById('poetry-theme').value || '秋天';
        const style = document.getElementById('poetry-style').value;
        
        // 显示加载动画
        poetryLoading.style.display = 'flex';
        poetryResult.innerHTML = '';
        
        // 模拟API调用延迟
        setTimeout(() => {
            const poem = getGeneratedPoem(theme, style);
            
            // 隐藏加载动画
            poetryLoading.style.display = 'none';
            
            // 逐行显示诗歌
            displayPoemLineByLine(poem);
            
            // 添加到历史记录
            addToPoetryHistory(theme, poem);
        }, 2000);
    }
    
    function getGeneratedPoem(theme, style) {
        // 这里应该是调用AI API的地方，现在我们用预设诗歌模拟
        const poems = {
            classic: [
                `${theme}风吹落叶黄`,
                `孤灯照影长`,
                `思君如满月`,
                `夜夜减清光`
            ],
            modern: [
                `在${theme}的深处`,
                `时间像一片叶子`,
                `轻轻落下`,
                `没有声音`,
                `却惊动了整个季节`
            ],
            haiku: [
                `${theme}的午后`,
                `蝉鸣穿透寂静`,
                `一片落叶`
            ],
            free: [
                `${theme}，${theme}`,
                `你是如此难以捉摸`,
                `像一首未完成的诗`,
                `在记忆的角落里`,
                `静静等待`
            ]
        };
        
        return poems[style] || poems.classic;
    }
    
    function displayPoemLineByLine(poem) {
        poem.forEach((line, index) => {
            setTimeout(() => {
                const lineElement = document.createElement('div');
                lineElement.classList.add('poem-line');
                lineElement.textContent = line;
                poetryResult.appendChild(lineElement);
                
                // 触发动画
                setTimeout(() => {
                    lineElement.classList.add('animate');
                }, 100);
            }, index * 500);
        });
    }
    
    function addToPoetryHistory(theme, poem) {
        const historyContainer = document.querySelector('.history-items');
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        
        const preview = poem.slice(0, 2).join(' / ');
        
        historyItem.innerHTML = `
            <div class="history-theme">${theme}</div>
            <div class="history-preview">${preview}</div>
        `;
        
        historyItem.addEventListener('click', () => {
            poetryResult.innerHTML = '';
            displayPoemLineByLine(poem);
        });
        
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
        // 更新历史计数
        const badge = document.querySelector('.badge');
        if (badge) {
            badge.textContent = parseInt(badge.textContent) + 1;
        }
    }
    
    // 医疗影像分析功能
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');
    const previewPlaceholder = document.querySelector('.preview-placeholder');
    const analyzeBtn = document.querySelector('.analyze-btn');
    
    if (dropZone) {
        // 拖放功能
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '#ff0066';
            dropZone.style.background = 'rgba(255, 0, 102, 0.1)';
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = '#444';
            dropZone.style.background = 'rgba(10, 10, 20, 0.8)';
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '#444';
            dropZone.style.background = 'rgba(10, 10, 20, 0.8)';
            
            if (e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                handleFileUpload(fileInput.files[0]);
            }
        });
        
        // 点击上传
        dropZone.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length) {
                handleFileUpload(fileInput.files[0]);
            }
        });
    }
    
    function handleFileUpload(file) {
        if (!file.type.match('image.*')) {
            alert('请上传图像文件');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            previewPlaceholder.style.display = 'none';
            
            // 启用分析按钮
            analyzeBtn.disabled = false;
        };
        
        reader.readAsDataURL(file);
    }
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeMedicalImage);
    }
    
    function analyzeMedicalImage() {
        if (!fileInput.files.length) return;
        
        // 模拟分析过程
        const scanLine = document.querySelector('.scan-line');
        const annotations = document.querySelector('.annotations');
        
        // 重置状态
        scanLine.style.display = 'block';
        annotations.style.display = 'none';
        
        // 显示扫描动画
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = '分析中...';
        
        // 模拟分析延迟
        setTimeout(() => {
            // 隐藏扫描线，显示分析结果
            scanLine.style.display = 'none';
            annotations.style.display = 'block';
            
            // 更新分析按钮状态
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = '开始分析';
            
            // 这里应该是调用AI分析API并显示结果的地方
            // 现在我们使用模拟数据
        }, 3000);
    }
    
    // 模态选择器
    const modalityButtons = document.querySelectorAll('.modality-btn');
    
    modalityButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalityButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // 课表周导航
    const prevWeekBtn = document.querySelector('.prev-week');
    const nextWeekBtn = document.querySelector('.next-week');
    const scheduleTitle = document.querySelector('.schedule-title');
    
    if (prevWeekBtn && nextWeekBtn && scheduleTitle) {
        let currentWeek = 12;
        
        prevWeekBtn.addEventListener('click', () => {
            if (currentWeek > 1) {
                currentWeek--;
                updateScheduleTitle();
            }
        });
        
        nextWeekBtn.addEventListener('click', () => {
            if (currentWeek < 20) {
                currentWeek++;
                updateScheduleTitle();
            }
        });
        
        function updateScheduleTitle() {
            scheduleTitle.textContent = `2023-2024学年 第${currentWeek}周`;
        }
    }
});