// 1. 获取页面元素
const cheerBtn = document.getElementById('cheer-btn');
const cheerCountText = document.getElementById('cheer-count');
const countSpan = cheerCountText.querySelector('span');

// 初始化计数 (可以从 localStorage 读取，这里先设为 0)
let count = 0;

// 2. 定义点击事件监听器
cheerBtn.addEventListener('click', function() {
    // 增加计数
    count++;
    
    // 更新页面上的数字
    countSpan.textContent = count;
    
    // 显示计数文字 (如果之前是隐藏的)
    cheerCountText.style.display = 'block';
    
    // 添加一个简单的动画效果：按钮文字变化
    const originalText = cheerBtn.textContent;
    cheerBtn.textContent = "加油! 🔥 (" + count + ")";
    
    // 3秒后恢复文字
    setTimeout(() => {
        cheerBtn.textContent = originalText;
    }, 3000);

    // 3. 额外的互动：随机生成一句鼓励的话
    const praises = [
        "好球！大头太帅了！",
        "左手将的奇迹！",
        "巴黎奥运双冠王！",
        "未来可期，继续冲！",
        "暴力美学，无解！"
    ];
    
    // 随机选一句话并在控制台打印 (或者你可以做一个弹窗 alert)
    const randomPraise = praises[Math.floor(Math.random() * praises.length)];
    console.log(randomPraise);
    
    // 进阶：让背景颜色闪一下
    document.body.style.backgroundColor = "#fff5f5";
    setTimeout(() => {
        document.body.style.backgroundColor = "#f4f4f9";
    }, 200);
});

// 4. 平滑滚动 (当点击导航栏时)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认跳转行为
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // 平滑滚动效果
            });
        }
    });
});

console.log("欢迎来到王楚钦的个人主页！");