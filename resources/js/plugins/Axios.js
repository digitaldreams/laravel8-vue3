import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken.content;
} else {
    /* eslint-disable no-console */
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
}
