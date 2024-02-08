const pointsElement = document.getElementById('points');
            let points = localStorage.getItem('points');
            pointsElement.textContent = points || '0';

            function updatePoints(newPoints) {
                pointsElement.textContent = newPoints;
                localStorage.setItem('points', newPoints);
            }

            function generateVoucherCode() {
                return 's' + Math.floor(Math.random() * 100000);
            }

            function claimVoucher(cost, discountKey) {
                var currentPoints = parseInt(pointsElement.textContent);
                
                if (currentPoints >= cost) {
                    var newPoints = currentPoints - cost;
                    updatePoints(newPoints);

                    // Generate a new voucher code
                    var voucherCode = generateVoucherCode();

                    // Add the discount key and voucher code to local storage
                    localStorage.setItem(discountKey, voucherCode);

                    alert('Voucher claimed successfully! \n code: ' + voucherCode);
                } else {
                    alert('Insufficient points to claim this voucher.');
                }
            }