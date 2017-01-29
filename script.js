window.addEventListener('load', function(event){

//querySelectorAll returns NodeList, has forEach avail
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    // console.log(this.value);

    //set the suffix for the variables
    const suffix = this.dataset.sizing ||  '';
    // console.log(suffix);

    //select entire document :root, set a property base, spacing or blur
    // console.log(this.name);
    //get the styles and set this.name to this.value, plus the suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

//event listener for change or mouseover
  inputs.forEach(input => input.addEventListener('change' || 'mousemove', handleUpdate));


});
