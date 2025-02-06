// Display picture
  document.getElementById('file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const preview = document.getElementById('preview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%; height: auto;">`;
      };
      reader.readAsDataURL(file);
    }
  });

  // Validate form fields and show preview
 ////**********************check if the files are empty */
 document.getElementById('preview-btn').addEventListener('click', function () {
  const form = document.getElementById('add-recipe-form');
  const foodname = form['food-name'].value.trim();
  const foodtype = form['food-type'].value.trim();
  const ingredients = form['ingredients'].value.trim();
  const recipe = form['recipe'].value.trim();
  const briefinfo = form['brief-info'].value.trim();
  const file = form['file'].files.length;

  if (!foodname || !foodtype || !ingredients || !recipe  || !briefinfo|| file === 0) {
      alert('Please fill out all the fields before submitting.');
      return;
  }

  const previewContent = `
      <p><strong>Name:</strong> ${foodname}</p>
      <p><strong>Food Type:</strong> ${foodtype}</p>
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Recipe:</strong> ${recipe}</p>
      <p><strong>Brief Info:</strong> ${briefinfo}</p>
  `;
  document.getElementById('form-preview-content').innerHTML = previewContent;

  const formModal = new bootstrap.Modal(document.getElementById('formModal'));
  formModal.show();
});


  // Handle Submit button click (inside modal)
  document.getElementById('confirm-submit').addEventListener('click', function () {
    const formModal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
    formModal.hide();

    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Reset the form fields
    const form = document.getElementById('add-recipe-form');
    form.reset();

    // Clear preview content
    document.getElementById('form-preview-content').innerHTML = '';
    document.getElementById('preview').innerHTML = ''; // Clear image preview
  });