var Name = document.getElementById('floatingInput');
var Age = document.getElementById('floatingAge');
const msg = [
    {quote:"مرحباً"},
    {quote:"اهلاً بك"},
    {quote:"منور"}
];
var data = [];

function CalcAge() {
    var Ages = parseInt(Age.value);
    if (isNaN(Ages) || Ages < 1) {
        alert("عمرك صغير");
        return; 
    }
    var Namee = Name.value;
    if (Namee.trim() === "") {
        alert("اسمك مطلوب");
        return; 
    }
    // إضافة البيانات إلى المصفوفة
    data.push({nm: Namee, ag: Ages});
    displayProduct(); // استدعاء عرض البيانات بعد الحفظ
    clearForm(); // تفريغ النموذج
}

function displayProduct() {
    const randomIndex = Math.floor(Math.random() * msg.length);
    const selectedmsg = msg[randomIndex];

    var resultDiv = document.getElementById('result');
    var cartona = '';

    for (var i = 0; i < data.length; i++) {
        cartona += `
        <div class="col-md-3 col-sm-6 mb-3">
            <div class="data">
                <h1>${selectedmsg.quote} ${data[i].nm}</h1>
                <h3>العمر بالايام: ${data[i].ag * 365}</h3>
            </div>
        </div>
        `;
    }

    resultDiv.innerHTML = cartona;
}

function clearForm() {
    Name.value = "";
    Age.value = "";
}