

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initRegisterForm();
});





function initCountdown() {
    const el = document.getElementById('countdown');
    if (!el) return;

    const deadline = new Date(el.dataset.deadline).getTime();
    const daysEl = el.querySelector('[data-unit="days"]');
    const hoursEl = el.querySelector('[data-unit="hours"]');
    const minsEl = el.querySelector('[data-unit="minutes"]');
    const secsEl = el.querySelector('[data-unit="seconds"]');

    function tick() {
        const now = Date.now();
        const diff = deadline - now;

        if (diff <= 0) {
            [daysEl, hoursEl, minsEl, secsEl].forEach(node => node.textContent = '00');
            clearInterval(timer);
            return;
        }

        const day = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        daysEl.textContent = String(day).padStart(2, '0');
        hoursEl.textContent = String(hrs).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
    }

    tick();
    const timer = setInterval(tick, 1000);
}




function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    const alertBox = document.getElementById('registerAlert');
    const submitBtn = document.getElementById('registerSubmitBtn');
    const submitText = document.getElementById('registerSubmitText');
    const spinner = document.getElementById('registerSpinner');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
        form.classList.add('was-validated');

        const payload = {
            name: document.getElementById('regName').value.trim(),
            email: document.getElementById('regEmail').value.trim(),
            plan: document.getElementById('regPlan').value
        };

        setLoading(true);
        hideAlert();

        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            showAlert('success', `Thanks ${payload.name}! Your ${payload.plan} registration is confirmed (ref #${data.id}). Check your email for details.`);
            form.reset();
            form.classList.remove('was-validated');

        } catch (err) {
            showAlert('danger', 'Something went wrong submitting your registration. Please try again.');
        } finally {
            setLoading(false);
        }
    });

    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        spinner.classList.toggle('d-none', !isLoading);
        submitText.textContent = isLoading ? 'Submitting…' : 'Confirm Registration';
    }

    function showAlert(type, message) {
        alertBox.className = `alert alert-${type}`;
        alertBox.textContent = message;
        alertBox.classList.remove('d-none');
    }

    function hideAlert() {
        alertBox.classList.add('d-none');
    }
}
