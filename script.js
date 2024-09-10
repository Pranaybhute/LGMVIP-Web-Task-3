
document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect data from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const imageLink = document.getElementById("imageLink").value || 'https://via.placeholder.com/100';
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Collect selected skills
  let skills = [];
  document.querySelectorAll('.skills input[type="checkbox"]:checked').forEach(skill => {
    skills.push(skill.value);
  });

  // Create student card with details
  const studentCard = document.createElement('div');
  studentCard.classList.add('student');

  studentCard.innerHTML = `
    <div class="student-details">
      <h3>${name}</h3>
      <p>${gender}</p>
      <p><a href="mailto:${email}">${email}</a></p>
      <p><a href="${website}" target="_blank">${website}</a></p>
      <p>Skills: ${skills.join(', ')}</p>
    </div>
    <div class="student-image">
      <img src="${imageLink}" alt="${name}'s image" onerror="this.src='https://via.placeholder.com/100';">
    </div>
  `;

  // Append the new student to the student list
  document.getElementById("studentList").appendChild(studentCard);

  // Reset the form
  document.getElementById("enrollmentForm").reset();
});

// Clear form and student list functionality
document.getElementById("clearForm").addEventListener("click", function() {
  // Clear the form
  document.getElementById("enrollmentForm").reset();

  // Clear the student list
  document.getElementById("studentList").innerHTML = '';
});