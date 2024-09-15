document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 获取用户输入的姓名
    const userName = document.getElementById('userName').value.trim();
    const errorMessage = document.getElementById('error-message');

    // 检查用户名是否为 "swy"
    if (userName === "swy") {
        errorMessage.style.display = 'none';

        // 隐藏输入表单，显示动画和祝福
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('greeting-container').style.display = 'block';

        // 设置显示的祝福内容
        const birthdayMessage = `To Make Every Day Count, ${userName}!`;
        document.getElementById('birthdayMessage').textContent = birthdayMessage;

        // 开始播放背景音乐
        const audio = document.getElementById('background-music');
        audio.play();

        // 图片轮播
        const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg'];
        let imgIndex = 0;

        // 使用 setInterval 切换图片
        setInterval(function() {
            imgIndex = (imgIndex + 1) % images.length;
            document.getElementById('slideshow-img').src = images[imgIndex];
        }, 6000);  // 每6秒切换一张图片
    } else {
        // 显示错误提示
        errorMessage.style.display = 'block';
    }
});
