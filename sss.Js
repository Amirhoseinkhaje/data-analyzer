let score = 0;  // امتیاز اولیه
let target = document.getElementById('target');
let gameArea = document.getElementById('gameArea');
let scoreDisplay = document.getElementById('score');

// تابع برای جابجا کردن هدف
function moveTarget() {
    // ابعاد صفحه بازی
        let gameWidth = gameArea.clientWidth;
            let gameHeight = gameArea.clientHeight;
                
                    // ابعاد هدف
                        let targetSize = target.offsetWidth;

                            // مختصات تصادفی برای هدف
                                let randomX = Math.random() * (gameWidth - targetSize);
                                    let randomY = Math.random() * (gameHeight - targetSize);

                                        // تغییر موقعیت هدف
                                            target.style.left = randomX + 'px';
                                                target.style.top = randomY + 'px';
                                                }

                                                // تابع برای بروزرسانی امتیاز
                                                function updateScore() {
                                                    score++;
                                                        scoreDisplay.textContent = `امتیاز: ${score}`;
                                                        }

                                                        // وقتی روی هدف کلیک شد
                                                        target.addEventListener('click', function() {
                                                            updateScore();
                                                                moveTarget();  // حرکت هدف به جای جدید
                                                                });

                                                                // حرکت اولیه هدف
                                                                moveTarget();
                                                                
