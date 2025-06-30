
document.addEventListener("DOMContentLoaded", function () {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    // Load Tỉnh/Thành phố
    fetch("https://provinces.open-api.vn/api/p/")
        .then(response => response.json())
        .then(cities => {   
            cities.forEach(city => {
                citySelect.innerHTML += `<option value="${city.code}">${city.name}</option>`;
            });
        });

    // Khi chọn Tỉnh/TP → tải Quận/Huyện
    citySelect.addEventListener("change", function () {
        const cityCode = this.value;
        districtSelect.innerHTML = '<option value="">Quận/huyện</option>';
        wardSelect.innerHTML = '<option value="">Phường/xã</option>';

        if (cityCode) {
            fetch(`https://provinces.open-api.vn/api/p/${cityCode}?depth=2`)
                .then(res => res.json())
                .then(data => {
                    data.districts.forEach(district => {
                        districtSelect.innerHTML += `<option value="${district.code}">${district.name}</option>`;
                    });
                });
        }
    });

    // Khi chọn Quận/Huyện → tải Phường/Xã
    districtSelect.addEventListener("change", function () {
        const districtCode = this.value;
        wardSelect.innerHTML = '<option value="">Phường/xã</option>';

        if (districtCode) {
            fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
                .then(res => res.json())
                .then(data => {
                    data.wards.forEach(ward => {
                        wardSelect.innerHTML += `<option value="${ward.code}">${ward.name}</option>`;
                    });
                });
        }
    });
});

