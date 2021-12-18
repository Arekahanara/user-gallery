<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Upload</h2>
      
        <form>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              class="form-label"
            >Email address</label>
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            >
            <div
              id="emailHelp"
              class="form-text"
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label
              for="exampleInputName1"
              class="form-label"
            >Name</label>
            <input
              id="exampleInputName1"
              type="password"
              class="form-control"
            >
          </div>
          <div class="mb-3 form-check">
            <input
              id="exampleCheck1"
              type="checkbox"
              class="form-check-input"
            >
            <label
              class="form-check-label"
              for="exampleCheck1"
            >Check me out</label>
          </div>
          <div class="mb-3">
            <label
              for="formFile"
              class="form-label"
            >Default file input example</label>
            <input
              id="formFile"
              class="form-control"
              type="file"
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
