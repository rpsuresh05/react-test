function UncontrolledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Collect form data

    formData.append("avatar", "https://picsum.photos/800");
    console.log([...formData.entries()], "FormData Entries");

    const obj = {};

    for (const [key, value] of formData.entries()) {
      obj[key] = value;
    }

    fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "RTNDATA"))
      .catch((err) => console.error("Error uploading file:", err));
    // fetch("https://api.escuelajs.co/api/v1/files/upload", {
    //   method: "POST",
    //   body: formData, // Send FormData directly
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data, "RTNDATA"))
    //   .catch((err) => console.error("Error uploading file:", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Mail</label>
          <input type="email" id="email" name="email" />
        </div>{" "}
        <div>
          <label htmlFor="password">Mail</label>
          <input type="password" id="password" name="password" />
        </div>
        {/* <div>
          <label htmlFor="over18">Over 18</label>
          <input type="checkbox" id="over18" name="over18" />
        </div> */}
        {/* <div>
          <label>Gender</label>
          <input id="male" type="radio" value="male" name="gender" />
          <label htmlFor="male">Male</label>
          <input id="female" type="radio" value="female" name="gender" />
          <label htmlFor="female">Female</label>
        </div> */}
        {/* <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div>
          <label htmlFor="range">Range</label>
          <input type="range" id="range" name="range" />
        </div> */}
        {/* <div>
          <label htmlFor="file">Upload File</label>
          <input type="file" id="file" name="file" />
        </div> */}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default UncontrolledForm;
