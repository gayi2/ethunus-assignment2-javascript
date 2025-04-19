function validateForm() {
    let isValid = true;
  
    const fields = [
      "fname", "lname", "email", "password", "repassword", 
      "age", "phone", "address", "state"
    ];
  
    fields.forEach(field => {
      const input = document.getElementById(field);
      const error = document.getElementById(field + "Error");
      if (!input.value.trim()) {
        error.innerText = "POOR";
        isValid = false;
      } else {
        error.innerText = "";
      }
    });
  
    const pass = document.getElementById("password").value;
    const repass = document.getElementById("repassword").value;
  
    if (pass && repass && pass !== repass) {
      document.getElementById("repasswordError").innerText = "POOR OR MISMATCH";
      isValid = false;
    }
  
    return isValid;
  }
  