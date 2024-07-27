document.addEventListener('DOMContentLoaded', function () {
    let start = 0;
    const limit = 20;
    let loading = false;
    const postsContainer = document.getElementById('posts');

    function getRandomColor() {
        const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#FF6F61'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    async function fetchPosts() {
        if (loading) return;
        loading = true;
        const response = await fetch(`/posts/?start=${start}&end=${start + limit}`);
        const data = await response.json();
        const posts = data.posts;

        posts.forEach(post => {
            const div = document.createElement('div');
            div.className = 'post';
            div.textContent = post;
            div.style.borderColor = getRandomColor(); // Setting a random border color
            postsContainer.appendChild(div);
            div.offsetHeight; 
            div.classList.add('visible');
        });

        start += limit;
        loading = false;
    }

    fetchPosts(); // Initial fetch

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            fetchPosts();
        }
    });
});
