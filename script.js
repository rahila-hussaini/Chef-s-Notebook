// Like Button
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function () {
      const isLiked = this.dataset.like === '1';
      const icon = this.querySelector('i');
      const likeCount = this.nextElementSibling;
  
      if (isLiked) {
        this.dataset.like = '0';
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
      } else {
        this.dataset.like = '1';
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
      }
    });
  });
  
  //submiting comment on reriew  page
  
  document.getElementById('submit-comment').addEventListener('click', function () {
    const form = document.getElementById('leave_comments');
    const comments = form['comments'].value;
  
    if (comments.trim() !== '') {
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
  
      // Reset the form fields
      form.reset();
    } else {
      alert('Please fill out the comments before submitting.');
    }
  });
  
  